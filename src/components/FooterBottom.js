import React from "react";
import { BottomNavigation } from "@material-ui/core";

const FooterBottom = () => {
  return (
    <div>
      <BottomNavigation
        style={{ background: "black", height: "100%", width: "100%" }}
      >
        <h6 style={{ color: "white", padding: "20px" }}>
          Copyright © 2020 All rights reserved | Created by Deepak Pandey !
        </h6>
      </BottomNavigation>
    </div>
  );
};

export default FooterBottom;
