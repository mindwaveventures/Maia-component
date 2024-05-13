import React, { useEffect } from "react";

import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    const dynamicTitle = location.pathname === "/" ? "" : "| MAIA";

    const pageTitle = `${title} ${dynamicTitle}`;

    document.title = pageTitle;
  }, [title, location.pathname]);

  return (
    <div>
      {description && (
        <Helmet>
          <meta name="description" content={description || ""} />
        </Helmet>
      )}
      <h1 className="sr-only">
        {title} <span className="sr-only">title</span>
      </h1>
    </div>
  );
};

export default Seo;
