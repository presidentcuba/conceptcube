import React from "react";

import { useTranslation } from "react-i18next";
import "./Header.scss";
import { useEffect } from "react";
import { useRef } from "react";
import bg1 from "../../../../Assets/Images/bg-object-1.png";
import bg2 from "../../../../Assets/Images/bg-object-2.png";
import bg3 from "../../../../Assets/Images/bg-object-3.png";
import bg4 from "../../../../Assets/Images/bg-object-4.png";
import bg5 from "../../../../Assets/Images/bg-object-5.png";
interface Props {
  className: string;
}
const Header = ({ className }: Props) => {
  const { t } = useTranslation();
  let headerRef = useRef(null);
  useEffect(() => {
    console.log(headerRef.current);
  }, [headerRef]);
  return (
    <div className={`panel header ${className}`}>
      <div className="header-text">
        <p className="header-heading">everything is in the conceptcube</p>
      </div>
      <div className="img img1">
        <img src={bg1}></img>
      </div>
      <div className="img img2">
        <img src={bg2}></img>
      </div>
      <div className="img img3">
        <img src={bg3}></img>
      </div>
      <div className="img img4">
        <img src={bg4}></img>
      </div>
      <div className="img img5">
        <img src={bg5}></img>
      </div>
      <div className="content">ConceptCube Company Introduction</div>
    </div>
  );
};

export default Header;
