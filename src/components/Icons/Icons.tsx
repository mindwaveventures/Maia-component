import React from "react";

import DashboardIcon from "../../assets/svgs/BentoDashboard";
import BentoOpenIcon from "../../assets/svgs/BentoOpen";
import BentoCloseIcon from "../../assets/svgs/BentoClose";
import BentoAppointmentIcon from "../../assets/svgs/BentoAppointment";
import BentoFormIcon from "../../assets/svgs/BentoForm";
import BentoCircleIcon from "../../assets/svgs/BentoCircle";
import BentoNotificationIcon from "../../assets/svgs/BentoNotification";
import userManagementIcon from "../../assets/svgs/BentoUserManagement";
import ThemeIcon from "../../assets/svgs/BentoTheme";
import ResourceHubIcon from "../../assets/svgs/BentoResource";
import LockOpenIcon from "../../assets/svgs/BentoLockOpen";
import BellIcon from "../../assets/svgs/NotifyBell";

type IconComponentProps = { name: string; addClass?: string };
type IconTypes = { [name: string]: any };

const iconTypes: IconTypes = {
  Dashboard: DashboardIcon,
  Notifications: BentoNotificationIcon,
  Messaging: BentoNotificationIcon,
  Appointments: BentoAppointmentIcon,
  "Circle of care": BentoCircleIcon,
  Questionnaires: BentoFormIcon,
  Forms: BentoFormIcon,
  "Carer dashboard": DashboardIcon,
  "User management": userManagementIcon,
  "Permission management": LockOpenIcon,
  "Trust management": DashboardIcon,
  "Theme management": ThemeIcon,
  "ICB management": DashboardIcon,
  "Resource hub":ResourceHubIcon,
  openIcon: BentoOpenIcon,
  closeIcon: BentoCloseIcon,
  notifyBell:BellIcon
};

const IconComponent = ({ name, addClass, ...props }: IconComponentProps) => {
  const Icons = iconTypes[name];
  return (
    <div className={`icon-view ${addClass ? addClass : ""}`}>
      {Icons && <Icons {...props} />}
    </div>
  );
};

export default IconComponent;
