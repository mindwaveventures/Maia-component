type MenuItemLabel =
  | "Dashboard"
  | "Notifications"
  | "Messaging"
  | "Appointments"
  | "Circle of care"
  | "Questionnaires"
  | "Forms"
  | "Carer dashboard"
  | "User management"
  | "Permission management"
  | "Trust management"
  | "Theme management"
  | "ICB management"
  | "Resource hub";


export type MenuItemProps = {
  label: MenuItemLabel;
  to: string;
  action: () => void;
};

export interface ITrustInfo {
  uuid: string;
  trustId?: string;
  trustInfo: {
    uuid?: string;
    trustCode: string;
    trustLogoUrl: string;
    trustName: string;
    trustUiTheme: string;
    trustRegional?: any;
  };
}
export interface IUserInfo {
  openDialogID?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
  _id?: string;
  uuid?: string;
  username?: string;
  firstName?: string;
  email?: string;
  mobileNumber?: string;
  profile_image?: string;
  nameCalled?: string;
  dob?: string;
  userType?: string;
  authenticatedApps?: any;
  smartDashboard?: any;
  gender?: string;
  loginType?: 'normal' | 'google' | 'nhs' | 'azure';
  maritalStatus?: string;
  ethnicity?: string;
  languagesSpoken?: string[];
  iNeedAnInterpreter?: boolean;
  enabledTrackers?: any;
  mobileOtp?: boolean;
  mailOtp?: boolean;
  role?: string;
  lastName?: string;
  createdAt?: string;
  userId?: any;
  userProfile?: any;
  resourcePreference?: any;
  isCarer?: boolean;
  isProxyUser?: boolean;
  trusts?: Array<ITrustInfo>;
  isCarerAndUser?: boolean;
  accessibility?: any;
  userSkin?: string;
  password?: string;
  trust_list?: Array<ITrustInfo>;
  mfaSetupComplete?: boolean;
  mfaBackupCodesAvailable?: number;
  nhsNumber?: string;
}