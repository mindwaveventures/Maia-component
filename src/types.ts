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
