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

const user = {
  role: "admin"
};

export const CommonHeader: React.FC<CommonHeaderProps> = ({}) => {
  const [openTab, setOpenTab] = useState(false);
  const [openBurgerTab, setOpenBurgerTab] = useState(false);
  const [dropStatus, setDropStatus] = useState(false);
  const [totalNotifications, setTotalNotifications] = useState(0);
  const [openProfileTab, setOpenProfileTab] = useState(false);

  const useHeading = useHeadingJson(user);
  const useSeoJson = useSeoJsonData(user);

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
        useSeoJsonData={useSeoJson}
        useHeadingJson={useHeading}
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


# useKeyboard Hook

## Overview

The `useKeyboard` hook is a custom React hook designed to handle keyboard events, specifically the Escape key. It executes a provided callback function when the Escape key is pressed, allowing for customizable behavior such as closing modals, menus, or other UI elements.

## Features

- **Escape Key Handling**: Executes the provided callback function when the Escape key is pressed.
- **Event Listener Management**: Automatically adds and removes the event listener for the Escape key.

## Usage

### Importing the Hook

First, import the `useKeyboard` hook into your component:

```jsx
import useKeyboard from 'mv-react-ui-components';
```

### Using the Hook

Use the `useKeyboard` hook in your component by passing a callback function that will be executed when the Escape key is pressed:

```jsx
import React, { useState } from 'react';
import useKeyboard from 'mv-react-ui-components';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeOnEscape = (status) => {
    setIsOpen(status);
  };

  useKeyboard(closeOnEscape);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && <div>Press Escape to close this element.</div>}
    </div>
  );
};

export default MyComponent;
```

## API

### `useKeyboard`

#### Parameters

- `state`: `(status: boolean) => void`
  - **Type**: Function
  - **Required**: Yes
  - **Description**: A callback function that will be executed when the Escape key is pressed. The function should accept a boolean parameter which typically controls the open/close state of a UI element.

## Notes

- Ensure the `state` function provided to the `useKeyboard` hook properly handles the boolean parameter to reflect the intended open/close behavior of the target UI element.
- The hook manages the addition and removal of the event listener for the Escape key, ensuring clean-up on component unmount.



# useOutsideClick Hook

## Overview

The `useOutsideClick` hook is a custom React hook designed to handle clicks outside of a specified element. It executes a provided callback function when a click is detected outside of the referenced element, allowing for customizable behavior such as closing modals, dropdowns, or other UI elements.

## Features

- **Outside Click Handling**: Executes the provided callback function when a click is detected outside the referenced element.
- **Event Listener Management**: Automatically adds and removes the event listeners for `mousedown` and `touchstart` events.

## Usage

### Importing the Hook

First, import the `useOutsideClick` hook into your component:

```jsx
import useOutsideClick from 'mv-react-ui-components';
```

### Using the Hook

Use the `useOutsideClick` hook in your component by passing a reference to the element and a callback function that will be executed when a click is detected outside the referenced element:

```jsx
import React, { useRef, useState } from 'react';
import useOutsideClick from 'mv-react-ui-components';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const closeOnOutsideClick = () => {
    setIsOpen(false);
  };

  useOutsideClick(ref, closeOnOutsideClick);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <div ref={ref}>
          Click outside this element to close it.
        </div>
      )}
    </div>
  );
};

export default MyComponent;
```

### `useOutsideClick`

#### Parameters

- `ref`: `RefObject<HTMLElement>`
  - **Type**: RefObject
  - **Required**: Yes
  - **Description**: A reference to the HTML element that you want to detect outside clicks for.

- `handler`: `() => void`
  - **Type**: Function
  - **Required**: Yes
  - **Description**: A callback function that will be executed when a click is detected outside the referenced element.

## Notes

- Ensure the `ref` provided to the `useOutsideClick` hook is correctly assigned to the element you want to detect outside clicks for.
- The hook manages the addition and removal of the event listeners for `mousedown` and `touchstart` events, ensuring clean-up on component unmount.




# usePathSegments and getPathSegments Hooks

## Overview

The `usePathSegments` and `getPathSegments` hooks are custom React hooks designed to extract specific segments or portions of the URL path. These hooks leverage React Router's `useLocation` to access the current URL path and return the desired segments.

## Features

- **Path Segment Extraction**: Extract specific segments from the URL path.
- **Partial Path Retrieval**: Retrieve a specific portion of the URL path up to a specified segment index.
- **URL Management**: Helps in managing and utilizing URL segments for dynamic routing or component rendering.

## Hooks

### `usePathSegments`

#### Parameters

- `segmentIndex`: `number`
  - **Type**: Number
  - **Required**: Yes
  - **Description**: The index of the path segment to retrieve.

#### Returns

- `string | null`: The path segment at the specified index, or `null` if the index is out of bounds.

### `getPathSegments`

#### Parameters

- `segmentEndIndex`: `number`
  - **Type**: Number
  - **Required**: Yes
  - **Description**: The index of the last path segment to include in the returned path.

#### Returns

- `string | null`: The path up to the specified segment index, or `null` if the index is out of bounds.

## Usage

### Importing the Hooks

First, import the `usePathSegments` and `getPathSegments` hooks into your component:

```jsx
import { usePathSegments, getPathSegments } from 'mv-react-ui-components';
```

### Using the Hooks

Use the `usePathSegments` hook to get a specific path segment from the URL:

```jsx
import React from 'react';
import { usePathSegments } from 'mv-react-ui-components';

const MyComponent = () => {
  const segment = usePathSegments(1); // Get the second segment of the path

  return (
    <div>
      <p>Path Segment: {segment}</p>
    </div>
  );
};

export default MyComponent;
```

Use the `getPathSegments` hook to get a specific portion of the path from the URL:

```jsx
import React from 'react';
import { getPathSegments } from 'mv-react-ui-components';

const MyComponent = () => {
  const partialPath = getPathSegments(2); // Get the path up to the third segment

  return (
    <div>
      <p>Partial Path: {partialPath}</p>
    </div>
  );
};

export default MyComponent;
```

## Notes

- Ensure that the `segmentIndex` or `segmentEndIndex` provided to the hooks are within the bounds of the path segments.
- These hooks are useful for dynamic routing and extracting meaningful segments from the URL for conditional rendering or logic.

## Dependencies

- React
- React Router (`react-router-dom`)



# useLastTwoPathSegments Hook

## Overview

The `useLastTwoPathSegments` hook is a custom React hook designed to retrieve the last two path segments from the URL, excluding any UUIDs if present. It is useful for extracting meaningful parts of the URL for dynamic routing or component rendering.

## Features

- **Path Segment Extraction**: Extracts the last two segments from the URL path.
- **UUID Removal**: Filters out UUID segments from the path.
- **Path Cleaning**: Removes non-alphanumeric characters from the segments.

## Usage

### Importing the Hook

First, import the `useLastTwoPathSegments` hook into your component:

```jsx
import { useLastTwoPathSegments } from 'mv-react-ui-components';
```

### Using the Hook

Use the `useLastTwoPathSegments` hook in your component to get the concatenated last two path segments from the URL:

```jsx
import React from 'react';
import { useLastTwoPathSegments } from 'mv-react-ui-components';

const MyComponent = () => {
  const lastTwoSegments = useLastTwoPathSegments();

  return (
    <div>
      <p>Last Two Path Segments: {lastTwoSegments}</p>
    </div>
  );
};

export default MyComponent;
```

### `useLastTwoPathSegments`

#### Returns

- `string`: A concatenated string of the last two path segments, excluding any UUID segments and non-alphanumeric characters.

## Notes

- Ensure that the path segments are valid and correctly formatted.
- The hook removes UUIDs and non-alphanumeric characters to provide clean and meaningful segments.
- This hook is useful for dynamic routing, breadcrumb navigation, and other URL-based logic in React applications.

## Dependencies

- React
- React Router (`react-router-dom`)

## License

This project is licensed under the MIT License.
