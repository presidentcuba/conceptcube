import { Drawer, Menu } from "antd";
import React, { useState } from "react";
import "./Sidemenu.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
interface Props {
  visible: boolean;
  showDrawer: any;
}

const { SubMenu } = Menu;

const Sidemenu = ({ visible, showDrawer }: Props) => {
  const [openKeys, setOpenKeys] = useState([""]);
  const [activeItem, setActiveItem] = useState(1);
  const { t } = useTranslation();

  const openHandle = (key: string, number: number) => {
    setOpenKeys([key]);
    setActiveItem(number);
  };

  return (
    <>
      <Drawer
        placement="right"
        visible={visible}
        width={532}
        style={{ zIndex: "20" }}
        mask={false}
      >
        <div className="menu">
          <Menu
            style={{
              width: 256,
              backgroundColor: "#061440",
              fontSize: 39,
              color: "#fff",
            }}
            mode="inline"
            theme="dark"
            openKeys={openKeys}
            selectable={false}
          >
            <Menu.Item
              key="1"
              onClick={() => {
                openHandle("", 1);
                showDrawer();
                // eslint-disable-next-line no-restricted-globals
                location.href = "/#firstPage";
              }}
            >
              <Link to="/#firstPage" style={{ color: "#fff" }}>
                <div
                  className={`menu-item ${
                    activeItem === 1 ? "active-menu-item" : ""
                  }`}
                >
                  Home
                </div>
              </Link>
            </Menu.Item>

            <Menu.Item
              key="2"
              onClick={() => {
                openHandle("", 2);
                showDrawer();
                // eslint-disable-next-line no-restricted-globals
                location.href = "/Teams";
              }}
            >
              <Link to="/Teams" style={{ color: "#fff" }}>
                <div
                  className={`menu-item ${
                    activeItem === 2 ? "active-menu-item" : ""
                  }`}
                >
                  Teams
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => {
                openHandle("", 3);
                showDrawer();
                // eslint-disable-next-line no-restricted-globals
                location.href = "/works";
              }}
            >
              <Link to="/works" style={{ color: "#fff" }}>
                <div
                  className={`menu-item ${
                    activeItem === 3 ? "active-menu-item" : ""
                  }`}
                >
                  Works
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={() => {
                openHandle("", 4);
                showDrawer();
              }}
            >
              <Link to="/contact" style={{ color: "#fff" }}>
                <div
                  className={`menu-item ${
                    activeItem === 4 ? "active-menu-item" : ""
                  }`}
                >
                  {t("sidemenu9")}
                </div>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className="menu-line"></div>
        <div className="menu-footer">
          <p>
            {t("sidemenu10")}
            <br />
            {t("sidemenu11")}
          </p>
          <p> {t("sidemenu12")}</p>
          <p>
            {t("sidemenu13")} <br />
            {t("sidemenu14")}
          </p>
          <p>
            {t("sidemenu15")} <br />
            {t("sidemenu16")}
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default Sidemenu;
