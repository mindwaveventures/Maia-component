import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

import "./BottomNav.css";
import useViewportWidth from "../../utils/useViewportWidth";
import useScrollControl from "../../utils/useScrollControl";
import IconComponent from "../Icons/Icons";
import { MenuItem, IUserInfo, IGlobelSettings } from "../../types";

export interface BottomNavProps {
  userInfo?: IUserInfo;
  globalSettings: IGlobelSettings;
  MainPortal?: string;
  QBPortal?: string;
  ResourcesPortal?: string;
  OuterDomain?: string;
  checkPermissions?: (permissions: string[]) => boolean;
}

interface MenuItemProps {
  item: MenuItem;
  getAppUrl: (appUrl?: string, link?: string) => string;
  index: number;
  totalItems: number;
  userRole?: string;
}

const NavItem: React.FC<MenuItemProps> = ({
  item,
  getAppUrl,
  index,
  totalItems,
  userRole,
}) => {
  const location = useLocation();

  // Enhanced active state logic
  const getActiveState = () => {
    // Use the item's isActive property if available
    if (item.isActive !== undefined) {
      return item.isActive;
    }

    // Special handling for referrals
    if (item.label === "Referrals") {
      return location.pathname.includes("/referral");
    }

    // Special handling for dashboard
    if (item.label === "Dashboard") {
      return location.pathname.includes("/dashboard");
    }

    // Special handling for questionnaires
    if (item.label === "Questionnaires") {
      return (
        location.pathname.includes("/questionnaires") ||
        location.pathname.includes("/form-approvals") ||
        location.pathname.includes("/responses") ||
        location.pathname.includes("/scheduled-forms")
      );
    }

    // Default: check if current path includes the item link
    const itemUrl = getAppUrl(item.appUrl, item.link);
    return (
      location.pathname.includes(item.link || "#") ||
      location.pathname === itemUrl
    );
  };

  const active = getActiveState();
  const itemRef = useRef<HTMLLIElement>(null);

  // Generate unique ID for each nav item
  const itemId = `bottom-nav-item-${index}`;
  const linkId = `bottom-nav-link-${index}`;

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const items = document.querySelectorAll('[role="menuitem"]');
      const currentIndex = Array.from(items).indexOf(
        event.currentTarget as Element
      );

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          const nextIndex = (currentIndex + 1) % items.length;
          (items[nextIndex] as HTMLElement)?.focus();
          break;
        case "ArrowLeft":
          event.preventDefault();
          const prevIndex =
            currentIndex === 0 ? items.length - 1 : currentIndex - 1;
          (items[prevIndex] as HTMLElement)?.focus();
          break;
        case "Home":
          event.preventDefault();
          (items[0] as HTMLElement)?.focus();
          break;
        case "End":
          event.preventDefault();
          (items[items.length - 1] as HTMLElement)?.focus();
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          item.action?.();
          break;
      }
    },
    [item.action]
  );

  // Enhanced ARIA labels for different user roles
  const getAriaLabel = () => {
    const baseLabel = item.label;
    const status = active ? ", current page" : "";
    const roleContext = userRole ? ` (${userRole} menu)` : "";
    return `${baseLabel}${status}${roleContext}`;
  };

  const getAriaDescription = () => {
    if (active) {
      return `You are currently on the ${item.label} page`;
    }
    return `Navigate to ${item.label}`;
  };

  return (
    <li
      ref={itemRef}
      role="menuitem"
      id={itemId}
      className={`bottom-nav-item ${active ? "active" : ""}`}
      aria-current={active ? "page" : undefined}
      aria-label={getAriaLabel()}
      aria-describedby={`${linkId}-desc`}
    >
      <Link
        id={linkId}
        to={getAppUrl(item.appUrl, item.link)}
        className={`bottom-nav-link focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral ${
          active ? "active" : ""
        }`}
        onClick={() => item.action?.()}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label={getAriaLabel()}
        aria-describedby={`${linkId}-desc`}
      >
        {item.icon ? (
          <div className="nav-icon" aria-hidden="true">
            {item.icon}
          </div>
        ) : (
          <IconComponent
            name={item.label}
            addClass="nav-icon"
            aria-hidden="true"
          />
        )}
        <span className="nav-label">{item.label}</span>

        {/* Hidden description for screen readers */}
        <span id={`${linkId}-desc`} className="sr-only">
          {getAriaDescription()}
        </span>

        {/* Active state announcement for screen readers */}
        {active && (
          <span className="sr-only" aria-live="polite">
            Current page: {item.label}
          </span>
        )}
      </Link>
    </li>
  );
};

export const BottomNav: React.FC<BottomNavProps> = ({
  userInfo,
  globalSettings,
  MainPortal = "",
  QBPortal = "",
  ResourcesPortal = "",
  OuterDomain = "",
  checkPermissions = () => true,
}) => {
  const viewportWidth = useViewportWidth();
  const showMenu = useScrollControl();
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(viewportWidth <= 1023);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    setIsMobile(viewportWidth <= 1023);
  }, [viewportWidth]);

  // Announce navigation changes to screen readers
  useEffect(() => {
    if (announcement) {
      const timer = setTimeout(() => setAnnouncement(""), 1000);
      return () => clearTimeout(timer);
    }
  }, [announcement]);

  const getAppUrl = (appUrl: string = "", link: string = ""): string => {
    switch (appUrl) {
      case "MainPortal":
        return `${MainPortal}${link}`;
      case "QBPortal":
        return `${QBPortal}${link}`;
      case "ResourcesPortal":
        return `${ResourcesPortal}${link}`;
      case "OuterDomain":
        return `${OuterDomain}${link}`;
      case "Action":
        return "#";
      default:
        return link || "#";
    }
  };

  // Handle keyboard navigation for the entire navigation
  const handleNavKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      // Ensure focus stays within navigation when tabbing
      const items = navRef.current?.querySelectorAll('[role="menuitem"]');
      if (items && items.length > 0) {
        const firstItem = items[0] as HTMLElement;
        const lastItem = items[items.length - 1] as HTMLElement;

        if (event.shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          lastItem.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          firstItem.focus();
        }
      }
    }
  }, []);

  // Generate menu items based on user role and permissions (same logic as PrimaryNav)
  const generateMenuItems = (): MenuItem[] => {
    const items: MenuItem[] = [];

    if (!userInfo) return items;

    // Dashboard - Always show for all users
    items.push({
      label: "Dashboard",
      link: "/dashboard",
      icon: <IconComponent name="Dashboard" />,
      isActive: location.pathname.includes("/dashboard"),
      isHide: false,
      appUrl: "MainPortal",
    });

    // Clinician-specific menus (same as PrimaryNav)
    if (userInfo.role === "clinician") {
      if (globalSettings.modules?.card_myHealth) {
        items.push({
          label: "Caseload",
          link: "/caseload/clinical-caseload",
          icon: <IconComponent name="Dashboard" />,
          isActive: location.pathname.includes("/caseload"),
          isHide: false,
          appUrl: "MainPortal",
        });
      }
    }

    // Patient-specific menus (same as PrimaryNav)
    if (userInfo.role === "patient") {
      if (globalSettings.modules?.card_myHealth) {
        items.push({
          label: "My health",
          link: "/my-health/overview",
          icon: <IconComponent name="Dashboard" />,
          isActive: location.pathname.includes("/my-health"),
          isHide: false,
          appUrl: "MainPortal",
        });
      }

      if (globalSettings.modules?.card_tracker) {
        items.push({
          label: "Trackers",
          link: "/tracking/trackers/dashboard",
          icon: <IconComponent name="Dashboard" />,
          isActive: location.pathname.includes("/tracking"),
          isHide: false,
          appUrl: "MainPortal",
        });
      }

      if (globalSettings.modules?.card_referral) {
        items.push({
          label: "Referrals",
          link: "/referral/pending",
          icon: <IconComponent name="Referrals" />,
          isActive: location.pathname.includes("/referral"),
          isHide: false,
          appUrl: "MainPortal",
        });
      }
    }

    // Notifications (same logic as PrimaryNav)
    if (
      userInfo.role !== "patient" &&
      userInfo.role !== "clinician" &&
      userInfo.role !== "mAdmin" &&
      checkPermissions([
        "notification.email_and_inapp.view",
        "notification.sms.view",
      ])
    ) {
      items.push({
        label: "Notifications",
        link: checkPermissions(["notification.email_and_inapp.view"])
          ? "/notifications/overview"
          : "/notifications/sms-overview",
        icon: <IconComponent name="Notifications" />,
        isActive: location.pathname.includes("/notifications"),
        isHide: false,
        appUrl: "MainPortal",
      });
    }

    // Appointments (same logic as PrimaryNav)
    if (
      (userInfo.role === "admin" &&
        checkPermissions([
          "appointment.clinic.view",
          "appointment.clinic_location.view",
          "appointment.appointment_type.view",
          "appointment.manage_appointment.view",
          "appointment.appointment_status.view",
          "appointment.diagnosis_type.view",
        ])) ||
      (userInfo.role === "clinician" &&
        checkPermissions([
          "appointment.clinic.view",
          "appointment.manage_appointment.view",
        ]))
    ) {
      if (globalSettings.modules?.myHealth?.appointment) {
        items.push({
          label: "Appointments",
          link: "/appointment/admin/dashboard",
          icon: <IconComponent name="Appointments" />,
          isActive: location.pathname.includes("/appointment"),
          isHide: false,
          appUrl: "MainPortal",
        });
      }
    }

    // Questionnaires (same logic as PrimaryNav)
    if (
      (userInfo.role === "clinician" ||
        userInfo.role === "mAdmin" ||
        userInfo.role === "admin" ||
        userInfo.role === "superAdmin") &&
      checkPermissions(["questionnaire.questionnaire_form.view"]) &&
      globalSettings.modules?.myHealth?.questionnaires
    ) {
      items.push({
        label: "Questionnaires",
        link: "#",
        icon: <IconComponent name="Questionnaires" />,
        isActive: false,
        isHide: false,
        appUrl: "Action",
        action: () => {
          // Handle questionnaire action
          console.log("Questionnaire action triggered");
        },
      });
    }

    // Resources (same logic as PrimaryNav)
    if (globalSettings.modules?.card_resource && userInfo.role !== "mAdmin") {
      items.push({
        label: "Resources",
        link: "/resources/all-resources",
        icon: <IconComponent name="Resources" />,
        isActive: location.pathname.includes("/resources"),
        isHide: false,
        appUrl: "ResourcesPortal",
      });
    }

    // Referrals (same logic as PrimaryNav)
    if (
      userInfo.role !== "mAdmin" &&
      globalSettings.modules?.referral &&
      checkPermissions(["referral.referral_management.view"])
    ) {
      items.push({
        label: "Referrals",
        link:
          userInfo.role === "patient" ? "/referral/pending" : "/referral/admin",
        icon: <IconComponent name="Referrals" />,
        isActive: location.pathname.includes("/referral"),
        isHide: false,
        appUrl: "MainPortal",
      });
    }

    return items.filter((item) => !item.isHide);
  };

  const menuItems = generateMenuItems();

  // Debug: Log the generated menu items
  console.log("BottomNav - User Role:", userInfo?.role);
  console.log(
    "BottomNav - Menu Items:",
    menuItems.map((item) => item.label)
  );

  if (!isMobile || menuItems.length === 0) {
    return null;
  }

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      {/* Live region for announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      <nav
        ref={navRef}
        role="navigation"
        aria-label={`${userInfo?.role || "Main"} navigation menu`}
        className={`bottom-navbar ${!showMenu ? "hiddenmob" : ""}`}
        onKeyDown={handleNavKeyDown}
      >
        <ul
          className="bottom-nav"
          role="menubar"
          aria-label="Bottom navigation menu"
        >
          {menuItems.map((item, index) => (
            <NavItem
              key={`${item.label}-${index}`}
              item={item}
              getAppUrl={getAppUrl}
              index={index}
              totalItems={menuItems.length}
              userRole={userInfo?.role}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default BottomNav;
