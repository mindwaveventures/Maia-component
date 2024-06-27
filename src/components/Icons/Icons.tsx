import React from 'react';

import DashboardIcon from '../../assets/svgs/BentoDashboard';
import BentoOpenIcon from '../../assets/svgs/BentoOpen';
import BentoCloseIcon from '../../assets/svgs/BentoClose';
import BentoAppointmentIcon from '../../assets/svgs/BentoAppointment';
import BentoFormIcon from '../../assets/svgs/BentoForm';
import BentoCircleIcon from '../../assets/svgs/BentoCircle';
import BentoNotificationIcon from '../../assets/svgs/BentoNotification';
import userManagementIcon from '../../assets/svgs/BentoUserManagement';
import ThemeIcon from '../../assets/svgs/BentoTheme';
import ResourceHubIcon from '../../assets/svgs/BentoResource';
import LockOpenIcon from '../../assets/svgs/BentoLockOpen';
import BellIcon from '../../assets/svgs/NotifyBell';
import ProfileIcon from '../../assets/svgs/Profile';
import LogoProfileIcon from '../../assets/svgs/LogoProfile';
import BackArrowIcon from '../../assets/svgs/BackArrow';
import BrandLogoIcon from '../../assets/svgs/BrandLogo';
import { BurgerMenu } from '../../assets/svgs/BurgerMenu';
import { Info } from '../../assets/svgs/Info';
import ResourceIcon from '../../assets/svgs/Resource';
import RollManagementIcon from '../../assets/svgs/RollManagement';
import ModuleManagementIcon from '../../assets/svgs/ModuleManagement';
import ServiceManagementIcon from '../../assets/svgs/ServiceManagement';
import AreaManagementIcon from '../../assets/svgs/AreaManagement';

type IconComponentProps = { name: string; addClass?: string };
type IconTypes = { [name: string]: any };

const iconTypes: IconTypes = {
  Dashboard: DashboardIcon,
  Notifications: BentoNotificationIcon,
  Messaging: BentoNotificationIcon,
  Appointments: BentoAppointmentIcon,
  'Circle of care': BentoCircleIcon,
  Questionnaires: BentoFormIcon,
  Forms: BentoFormIcon,
  'Carer dashboard': DashboardIcon,
  'User management': userManagementIcon,
  'Permission management': LockOpenIcon,
  'Trust management': DashboardIcon,
  'Theme management': ThemeIcon,
  'ICB management': DashboardIcon,
  'Resource hub': ResourceHubIcon,
  'Area management': AreaManagementIcon,
  'Service Management': ServiceManagementIcon,
  'Module Management': ModuleManagementIcon,
  'Roll Management': RollManagementIcon,
  Resource: ResourceIcon,
  openIcon: BentoOpenIcon,
  closeIcon: BentoCloseIcon,
  notifyBell: BellIcon,
  profileIcon: ProfileIcon,
  logoProfile: LogoProfileIcon,
  back: BackArrowIcon,
  brandLogo: BrandLogoIcon,
  burgerMenu: BurgerMenu,
  infoIcon: Info,
};

const IconComponent = ({ name, addClass, ...props }: IconComponentProps) => {
  const Icons = iconTypes[name];
  return (
    <>
      {Icons && <Icons className={`${addClass ? addClass : ''}`} {...props} />}
    </>
  );
};

export default IconComponent;
