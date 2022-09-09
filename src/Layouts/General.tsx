import React, { useEffect } from "react";
// @ts-ignore
import Navigation from "../components/Navigation/index.tsx";
// @ts-ignore
import Footer from "../components/Footer/index.tsx";
// @ts-ignore
import Space from "../components/Space/index.tsx";

import "./styles.scss";

const General = ({ children }:any): JSX.Element => {
  useEffect((): void => { window.scrollTo(0, 0) }, []);
  return (
    <div className="general-layout">
      <Navigation />
      <div className="pb-16">
        <Space>
          <div className="pt-36">
            {children}
          </div>
        </Space>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
};

export default General;
