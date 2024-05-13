import React, { ReactNode, useEffect, useState } from "react";
import LazyBackgroundImage from "../LazyBackgroundImg/LazyBackgroundImage";
import Seo from "../Seo/Seo";
import { IUserInfo } from "../../types";
import Button from "../Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getMatchedData, RouteParams } from "../../utils/getMatchedData";
import { usePathSegments } from "../../utils/usePathSegments";
import { useLastTwoPathSegments } from "../../utils/useLastPathSegments";
import IconComponent from "../Icons/Icons";

interface HeaderProps {
  backgroundImageUrl?: string;
  backgroundImgAltText?: string;
  isAuthenticated: boolean;
  user: IUserInfo | null;
  useSeoJsonData?: any|null;
  useHeadingJson?: any |null;
  children: ReactNode;
}

function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportWidth;
}

const unauthoredPageRoutes = [
  "validate-login",
  "developer",
  "logout",
  "accessibilitystatement",
  "about",
  "termsofservices",
  "emergency",
  "privacypolicy",
  "feedback",
  "faq",
  "not-found",
  "consent",
  "contact",
  "cookies",
];

export const HeaderSection: React.FC<HeaderProps> = ({
  backgroundImageUrl,
  backgroundImgAltText,
  isAuthenticated,
  user,
  useSeoJsonData,
  useHeadingJson,
  children,
}) => {
  const [isMobile, setisMobile] = useState(false);
  const [seoTitle, setSeoTitle] = useState<string>("");
  const [seoDescription, setSeoDescription] = useState<string>("");
  const [headerHeading, setHeaderHeading] = useState<string>("");
  const [headerSubheading, setHeaderSubheading] = useState<string>("");

  const viewportWidth = useViewportWidth();

  useEffect(() => {
    if (viewportWidth <= 1023) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  }, [viewportWidth]);

  const history = useNavigate();
  const location = useLocation();

  const goBack = () => {
    history(-1);
  };
  const pathToRemoveButton = [
    "/dashboard/patient",
    "/dashboard/",
    "/rbac/trust/overview",
    "dashboard/carer",
    "dashboard/carer/health-access",
  ];
  const isButtonHidden = pathToRemoveButton.includes(location.pathname);
  const firstParam = usePathSegments(0) || "";
  const lastTwoSegments = useLastTwoPathSegments();

  useEffect(() => {
    const cleanedFirstParam = firstParam.replace(/[^a-zA-Z0-9]/g, "");

    // Convert the path segments into a RouteParams object
    const routeParams: RouteParams = {};
    routeParams["param0"] = lastTwoSegments;
    const firstParams: RouteParams = {};
    firstParams["param0"] = cleanedFirstParam;

    try {
      // Fetch data and handle potential errors
      let seoData: any;
      if (useSeoJsonData !== null) {
        seoData = getMatchedData(routeParams, useSeoJsonData);
      }
      let headerData: any;
      if (useHeadingJson !== null) {
        headerData = getMatchedData(firstParams, useHeadingJson);
      }

      // Update state with fetched data
      if (seoData) {
        setSeoTitle(seoData.title);
        setSeoDescription(seoData.description);
      }

      if (headerData) {
        setHeaderHeading(headerData.title);
        setHeaderSubheading(headerData.description);
      }
    } catch (error) {
      // Handle the error gracefully
      console.error("An error occurred:", error);
      // You can choose to set default values or display an error message to the user
      // For example:
      setSeoTitle("Error");
      setSeoDescription("An error occurred while fetching data.");
    }
  }, [location.pathname, useHeadingJson]);

  return (
    <div className="bg-header">
      <LazyBackgroundImage
        imageUrl={backgroundImageUrl}
        altText={backgroundImgAltText}
      >
        <Seo title={seoTitle} description={seoDescription} />
        {isAuthenticated && user !== null ? (
          <>
            <div>
              <div
                className={`${
                  isMobile ? "mobile-top-nav-block" : "top-nav-block"
                }`}
              >
                {children}
                {isMobile ? (
                  <div className="go-back-block">
                    <Button
                      btntype="button"
                      addClass="go-back-btn"
                      customButton={true}
                      showLabel={false}
                      text="back arrow"
                      onClick={goBack}
                    >
                      {!isButtonHidden && (
                        <span>
                          <IconComponent name="back" />
                        </span>
                      )}
                    </Button>
                    {seoTitle}
                  </div>
                ) : (
                  <>
                    {headerHeading && (
                      <div className="header-text">
                        {headerHeading && <h2>{headerHeading}</h2>}
                        {headerSubheading && <p>{headerSubheading}</p>}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </>
        ) : null}
        {!unauthoredPageRoutes.includes(location.pathname.split("/")[1]) &&
        (location.pathname === "/" ||
          location.pathname.includes("/login") ||
          location.pathname.includes("/signup") ||
          location.pathname.includes("/verify-email") ||
          location.pathname.includes("/reset-password") ||
          location.pathname.split("/")?.length === 2 ||
          location.pathname === "/forgot-password")
          ? ""
          : !isAuthenticated && (
              <div
                className={`${
                  isMobile ? "mobile-top-nav-block" : "top-nav-block"
                }`}
              >
                {isMobile ? (
                  <div className="go-back-block">
                    <button
                      type="button"
                      className="go-back-btn"
                      onClick={goBack}
                    >
                      {!isButtonHidden && (
                        <span>
                          <IconComponent name="back" />
                        </span>
                      )}
                      {seoTitle}
                    </button>
                  </div>
                ) : (
                  <>
                    {!isAuthenticated && (
                      <span className="mx-auto">
                        <Link to="/">
                          <IconComponent name="brandLogo" />
                          <span className="sr-only">logo</span>
                        </Link>
                      </span>
                    )}
                    <div className="header-text">
                      {headerHeading && <h2>{headerHeading}</h2>}
                      {headerSubheading && <p>{headerSubheading}</p>}
                    </div>
                  </>
                )}
              </div>
            )}
      </LazyBackgroundImage>
    </div>
  );
};
