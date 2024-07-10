# CommonHeader Component

## Overview

The `CommonHeader` component is a React functional component designed as a common header for an application. It includes various sections such as the header, navigation menus, notifications, user account management, and a footer. The component leverages several other components and hooks to provide a dynamic and interactive user experience.

## Features

- **HeaderSection**: Displays the header of the page with a background image and various navigation options.
- **BurgerMenu**: A responsive burger menu for easy navigation on smaller screens.
- **Logo**: Displays the application logo.
- **PrimaryNav**: The primary navigation menu.
- **NavNotification**: A notification component that displays user notifications.
- **Account**: Displays user profile information and account-related actions.
- **BottomNav**: The footer navigation menu.
- **Dynamic Data**: Fetches and displays data such as user information, notifications, and menu items.

## HeaderSection Props

The `HeaderSection` component accepts the following props:

| Prop Name             | Type       | Description                                                                      |
|-----------------------|------------|----------------------------------------------------------------------------------|
| `backgroundImageUrl`  | `string`   | URL of the background image for the header.                                      |
| `backgroundImgAltText`| `string`   | Alt text for the background image.                                               |
| `isAuthenticated`     | `boolean`  | Indicates if the user is authenticated.                                          |
| `useSeoJsonData`      | `any`      | Hook or data to get SEO JSON data.                                               |
| `useHeadingJson`      | `any`      | Hook or data to get heading JSON data.                                           |
| `children`            | `ReactNode`| Child components to render within the header.                                    |
| `brandName`           | `string`   | The name of the brand to display in SEO metadata.                                |

## BurgerMenu Props

The `BurgerMenu` component accepts the following props:

| Prop Name       | Type                       | Required | Description                                                             |
|-----------------|----------------------------|----------|-------------------------------------------------------------------------|
| `menuData`      | `IBurgerMenu[]` | Yes      | Data for the menu items, including nested children.                     |
| `Name`          | `string`                   | No       | Name of the logo.                                                       |
| `id`            | `string`                   | No       | ID of the menu.                                                         |
| `LogoUrl`       | `string`                   | No       | URL of the logo to display in the menu header.                          |
| `changeAction`  | `(status: boolean) => void`| Yes      | Function to change the open/close status of the menu.                   |
| `openTab`       | `boolean | null`           | Yes      | Indicates whether the menu is open or closed.                           |
| `MainPortal`    | `string`                   | No       | Base URL for the main portal.                                           |
| `QBPortal`      | `string`                   | No       | Base URL for the question builder portal.                               |
| `ResourcesPortal`| `string`                  | No       | Base URL for the resources portal.                                       |
| `OuterDomain`   | `string`                   | No       | Base URL for outer domain links.                                        |

## Logo Props

The `Logo` component accepts the following props:

| Prop Name   | Type       | Required | Description                                                   |
|-------------|------------|----------|---------------------------------------------------------------|
| `title`     | `string`   | No       | Title of the logo, used for accessibility and hover text.     |
| `imageUrl`  | `string`   | No       | URL of the image to display. Supports SVG and other image formats.|
| `link`      | `string`   | No       | URL to navigate to when the logo is clicked.                  |
| `action`    | `function` | No       | Function to execute when the logo is clicked.                 |
| `state`     | `any`      | No       | State to pass when navigating using the link.                 |
| `isLoading` | `boolean`  | No       | Indicates whether the component should show a loading state initially. Defaults to `false`. |


## PrimaryNav Props

The `PrimaryNav` component accepts the following props:

| Prop Name        | Type       | Required | Description                                                                 |
|------------------|------------|----------|-----------------------------------------------------------------------------|
| `navItems`       | `MenuItem[]` | Yes      | Array of navigation items to display.
|`MainPortal`     | `string`   | No       | Base URL for the main portal.                                               |
| `QBPortal`       | `string`   | No       | Base URL for the question builder portal.                                   |
| `ResourcesPortal`| `string`   | No       | Base URL for the resources portal.                                          |
| `OuterDomain`    | `string`   | No       | Base URL for outer domain links.                                            |

## Bento Menu Props

The `Bento Menu` component accepts the following props:

| Prop Name       | Type                       | Required | Description                                                             |
|-----------------|----------------------------|----------|-------------------------------------------------------------------------|
| `menuItems`     | `MenuItemProps[]`          | Yes      | Array of menu items to display.                                         |
| `changeAction`  | `(status: boolean) => void`| Yes      | Function to change the open/close status of the menu.                   |
| `openTab`       | `boolean`                  | Yes      | Indicates whether the menu is open or closed.                           |
| `MainPortal`    | `string`                   | No       | Base URL for the main portal.                                           |
| `QBPortal`      | `string`                   | No       | Base URL for the question builder portal.                               |
| `ResourcesPortal`| `string`                  | No       | Base URL for the resources portal.                                       |
| `OuterDomain`   | `string`                   | No       | Base URL for outer domain links.                                        |

## Notification Props

The `Notification` component accepts the following props:

| Prop Name         | Type                    | Required | Description                                                          |
|-------------------|-------------------------|----------|----------------------------------------------------------------------|
| `dropStatus`      | `boolean`               | Yes      | Indicates whether the notification dropdown is open or closed.       |
| `openNotify`      | `(status: boolean) => void` | Yes  | Function to toggle the open/close status of the notification dropdown. |
| `goNotifications` | `() => void`            | Yes      | Function to navigate to the notifications page.                      |
| `totalNotifications` | `number`            | Yes      | Total number of notifications to display.                            |
| `children`        | `ReactNode`             | Yes      | Content to display inside the notification dropdown.                 |

## Account Props

The `Account` component accepts the following props:

| Prop Name        | Type                       | Required | Description                                                             |
|------------------|----------------------------|----------|-------------------------------------------------------------------------|
| `proxyUsers`     | `any[]`                    | No       | Array of proxy users for the account.                                   |
| `userInfo`       | `IUserInfo | any`          | Yes      | User information to display in the account menu.                        |
| `menuItems`      | `MenuItemProps[] | any`    | Yes      | Array of menu items to display in the dropdown menu.                    |
| `openTab`        | `boolean | null`           | Yes      | Indicates whether the menu is open or closed.                           |
| `changeAction`   | `(status: boolean) => void`| Yes      | Function to change the open/close status of the menu.                   |
| `MainPortal`     | `string`                   | No       | Base URL for the main portal.                                           |
| `QBPortal`       | `string`                   | No       | Base URL for the question builder portal.                               |
| `ResourcesPortal`| `string`                   | No       | Base URL for the resources portal.                                      |
| `OuterDomain`    | `string`                   | No       | Base URL for outer domain links.                                        |


## BottomNav Props

The `BottomNav` component accepts the following props:

| Prop Name        | Type                       | Required | Description                                                             |
|------------------|----------------------------|----------|-------------------------------------------------------------------------|
| `navItems`       | `MenuItem[]`               | Yes      | Array of navigation items to display.                                   |
| `MainPortal`     | `string`                   | No       | Base URL for the main portal.                                           |
| `QBPortal`       | `string`                   | No       | Base URL for the question builder portal.                               |
| `ResourcesPortal`| `string`                   | No       | Base URL for the resources portal.                                      |
| `OuterDomain`    | `string`                   | No       | Base URL for outer domain links.                                        |

## Example

Here is an example of how to use the `CommonHeader` component in your application:

```jsx
import React, { useState } from 'react';

import {
  Account,
  BottomNav,
  BurgerMenu,
  HeaderSection,
  Logo,
  Menu,
  MenuItem,
  MenuItemProps,
  NavNotification,
  PrimaryNav,
  RecordStatus,
  portalUrls,
  IBurgerMenu,
  MenuItem,
  MenuItemProps,
  UserProfileInfo,
} from 'mv-react-ui-components';

import { useHeadingJson } from '../userdata/useHeadingJson';
import { useSeoJsonData } from '../userdata/seoJsonDatas';
import HeaderImg from '../assets/images/Maia_header.webp';

import portalUrls from '../utils/AppURLs';

interface CommonHeaderProps {}

const user = true;

export const CommonHeader: React.FC<CommonHeaderProps> = ({}) => {
  const [openTab, setOpenTab] = useState(false);
  const [openBurgerTab, setOpenBurgerTab] = useState(false);
  const [dropStatus, setDropStatus] = useState(false);
  const [totalNotifications, setTotalNotifications] = useState(0);
  const [openProfileTab, setOpenProfileTab] = useState(false);

  const toggleNotificationDropdown = (status: boolean) => {
    setDropStatus(status);
  };

  const toggleAccountDropdown = (status: boolean) => {
    setOpenProfileTab(status);
  };

  const handleMenuToggle = (status: boolean) => {
    setOpenTab(status);
  };

  const handleBurgerMenuToggle = (status: boolean) => {
    setOpenBurgerTab(status);
  };

  const viewAllNotifications = () => {
    console.log('Redirecting to all notifications...');
    // Implement redirect or other logic here
  };

  const mockGetQuestionBuilderToken = () => {
    return Promise.resolve({
      result: {
        QB_Token: 'sample-token',
        clientId: 'sample-client-id',
        tpId: 'sample-tp-id',
      },
    });
  };

  const getQuestionBuilder = async () => {
    try {
      const getTokenQB = await mockGetQuestionBuilderToken();
      if (getTokenQB) {
        window.location.href = `${
          process.env.REACT_APP_QB_FE
        }validateLogin/?token=${getTokenQB.result.QB_Token}&clientId=${
          getTokenQB.result.clientId
        }&tpId=${getTokenQB.result.tpId}&theme=${
          localStorage.getItem('accessibility-theme') ||
          localStorage.getItem('theme') ||
          'theme-default'
        }`;
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  const userInfo: UserProfileInfo = {
    userId: 'u123',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    avatarUrl: 'http://example.com/path-to-avatar.jpg',
  };

  const profileMenuItems: MenuItemProps[] = [
    {
      label: 'Account',
      to: "/account",
      appUrl: 'MainPortal', // appUrl is not required for main portal
    },
    {
      label: 'Logout',
      to: "/logout",
    },
  ];

  const BurgerMenuData: IBurgerMenu[] = [
    {
      name: 'Dashboard',
      label: 'Dashboard',
      roles: ["admin","superAdmin"],
      children: [
        {
          label: 'Team caseload',
          link: "/team-caseload",
          isActive: false,
          isHide: false,
        },
        {
          label: 'Patient overview',
          link: '/patient-overview',
          isActive: false,
          isHide: false,
        },
      ],
    },
    {
      label: 'Area management',
      name: 'Area management',
      link: "/area-management",
      appUrl: 'MainPortal', // appUrl is not required for main portal
      children: [],
    },
    {
      name: 'Question Builder',
      label: 'Question Builder',
      action: () => getQuestionBuilder(),
      appUrl: 'Action',
      children: [],
    },
  ];

  const PrimaryNavItem: MenuItem[] = [
    {
      link: portalUrls.mainPortalUrls.dashboard.patient,
      label: 'Dashboard',
      isActive: false,
      isHide: false,
      appUrl: 'MainPortal', // appUrl is not required for main portal
    },
    {
      link: '/resources',
      label: 'Resources',
      isActive: false,
      isHide: false,
      appUrl: 'MainPortal', // appUrl is not required for main portal
    },
    {
      label: 'Question Builder',
      action: () => getQuestionBuilder(),
      isActive: false,
      isHide: false,
      appUrl: 'Action',
    },
    // Add more items as required
  ];

  const bentoMenuItems: MenuItemProps[] = [
    {
      to: "/dashboard",
      label: 'Dashboard',
      appUrl: 'MainPortal', // appUrl is not required for main portal
    }
  ];

  return (
    <div>
      <HeaderSection
        brandName='AsOneHealth'
        isAuthenticated={true}
        useSeoJsonData={useSeoJsonData}
        useHeadingJson={useHeadingJson}
        backgroundImageUrl={HeaderImg}
      >
        <nav className='nav-group'>
          <div className='just-w flex w-[188px] gap-4'>
            <BurgerMenu
              openTab={openBurgerTab}
              changeAction={handleBurgerMenuToggle}
              menuData={BurgerMenuData}
              MainPortal={process.env.REACT_APP_MP_FE}
              LogoUrl='https://st2.sample-vector-logo.jpg'
            />
            <Logo
              isLoading={true}
              title="My Application Logo"
              link="/home"
              action={() => console.log('Logo clicked')}
              imageUrl='https://st2.sample-vector-logo.jpg'
            />
          </div>
          <PrimaryNav
            navItems={PrimaryNavItem}
            MainPortal={process.env.REACT_APP_MP_FE} // MainPortal is not required for main portal
          />
          <div className='flex items-center gap-4 lg:gap-10'>
            <Menu
              menuItems={bentoMenuItems}
              changeAction={handleMenuToggle}
              openTab={openTab}
              MainPortal={process.env.REACT_APP_MP_FE} // MainPortal is not required for main portal
            />
            <NavNotification
              dropStatus={dropStatus}
              openNotify={toggleNotificationDropdown}
              goNotifications={viewAllNotifications}
              totalNotifications={totalNotifications}
            >
              {totalNotifications > 0 ? (
                <>
                  <p>Your Notification Data use this place</p>
                </>
              ) : (
                <RecordStatus label="No data found!" />
              )}
            </NavNotification>
            <Account
              userInfo={userInfo}
              menuItems={profileMenuItems}
              openTab={openProfileTab}
              changeAction={toggleAccountDropdown}
              MainPortal={process.env.REACT_APP_MAIA_HOME} // MainPortal is not required for main portal
            />
          </div>
        </nav>
        <BottomNav
          MainPortal={process.env.REACT_APP_MAIA_HOME} // MainPortal is not required for main portal
          navItems={PrimaryNavItem.slice(0, 4)}
        />
      </HeaderSection>
    </div>
  );
};
```

## Notes

- Ensure that all the components and hooks used in the `CommonHeader` component are properly imported and available in your project.
- The `getQuestionBuilder` function contains mock data and should be replaced with actual API calls as needed.
- The navigation URLs and menu items should be customized based on the requirements of your application.

## Dependencies

- React
- Custom components such as `HeaderSection`, `BurgerMenu`, `Logo`, `PrimaryNav`, `NavNotification`, `Account`, and `BottomNav`.

## License

This project is licensed under the MIT License.