import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { MenuItem } from "../../types";
import "./PrimaryNav.css";

export interface PrimaryNavProps {
  navItems: MenuItem[];
  userInfo?: any;
  MainPortal?: string;
  QBPortal?: string;
  ResourcesPortal?: string;
  OuterDomain?: string;
  showDashboard?: boolean;
}

export const PrimaryNav: React.FC<PrimaryNavProps> = ({
  navItems,
  userInfo,
  MainPortal = "",
  QBPortal = "",
  ResourcesPortal = "",
  OuterDomain = "",
  showDashboard = true,
}) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getAppUrl = (appUrl: string, link: string) => {
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
        return link ? link : "#";
    }
  };

  // Get role-specific dashboard link
  const getDashboardLink = () => {
    if (!userInfo?.role) return "/dashboard";

    // Handle different role string formats
    const role = userInfo.role;

    switch (role) {
      case "Patient":
        return "/dashboard/patient";
      case "MAdmin":
        return "/rbac/overview";
      case "Super Admin":
      case "Admin":
      case "Clinician":
        return "/regional/overview";
      default:
        // Fallback to lowercase comparison for other projects
        const normalizedRole = role.toLowerCase();
        switch (normalizedRole) {
          case "patient":
            return "/dashboard/patient";
          case "madmin":
            return "/rbac/overview";
          default:
            return "/regional/overview";
        }
    }
  };

  // Get role-specific dashboard active check
  const isDashboardActive = () => {
    if (!userInfo?.role) return location.pathname.includes("/dashboard");

    // Handle different role string formats
    const role = userInfo.role;

    switch (role) {
      case "Patient":
        return location.pathname.includes("/dashboard/patient");
      case "MAdmin":
        return location.pathname.includes("/rbac/overview");
      case "Super Admin":
      case "Admin":
      case "Clinician":
        return location.pathname.includes("/regional/overview");
      default:
        // Fallback to lowercase comparison for other projects
        const normalizedRole = role.toLowerCase();
        switch (normalizedRole) {
          case "patient":
            return location.pathname.includes("/dashboard/patient");
          case "madmin":
            return location.pathname.includes("/rbac/overview");
          default:
            return location.pathname.includes("/regional/overview");
        }
    }
  };

  // Check if current path is questionnaire-related
  const isQuestionnaireActive = () => {
    const questionnairePaths = [
      "/dashboard",
      "/questionnaires",
      "/form-approvals",
      "/responses",
      "/scheduled-forms",
    ];
    return questionnairePaths.some((path) => location.pathname.includes(path));
  };

  // Check if a nav item should be active
  const isNavItemActive = (item: any) => {
    // Dashboard special case
    if (item.label === "Dashboard") {
      return isDashboardActive();
    }

    // Questionnaires special case
    if (item.label === "Questionnaires") {
      return isQuestionnaireActive();
    }

    // Default case - exact path match
    const itemUrl = getAppUrl(item.appUrl, item.link);
    return (
      itemUrl === location.pathname ||
      itemUrl === location.pathname + location.search
    );
  };

  // Dashboard item that appears for all authenticated users
  const dashboardItem: MenuItem = {
    label: "Dashboard",
    link: getDashboardLink(),
    isActive: isDashboardActive(),
    isHide: false,
    appUrl: "MainPortal",
  };

  // Enhance existing nav items to have proper active states
  const enhancedNavItems = navItems.map((item) => {
    // If it's a Questionnaires item, enhance its active state
    if (item.label === "Questionnaires") {
      return {
        ...item,
        isActive: isQuestionnaireActive(),
      };
    }
    return item;
  });

  // Combine dashboard item with existing nav items
  // Only show Dashboard on desktop (not mobile)
  const allNavItems =
    showDashboard && userInfo && !isMobile
      ? [dashboardItem, ...enhancedNavItems]
      : enhancedNavItems;

  return (
    <nav
      role="navigation"
      aria-label="header navigation"
      className="pri-nav-wrap merge-bento nav-group"
    >
      <ul>
        {allNavItems.map(
          (item: any, index) =>
            !item.isHide && (
              <li key={index} onClick={() => item.action?.()}>
                <Link
                  to={getAppUrl(item.appUrl, item.link) || "#"}
                  className={`pri-nav-link ${
                    isNavItemActive(item) ? "active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default PrimaryNav;
