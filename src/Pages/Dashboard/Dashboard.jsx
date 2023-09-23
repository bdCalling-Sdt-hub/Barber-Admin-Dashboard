/* eslint-disable no-unused-vars */
import { MenuOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Select, theme } from "antd";

import { Divider } from "antd";
import { GiReceiveMoney } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

import { FaUsers } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbCalendarCheck, TbMessageCircle2Filled } from "react-icons/tb";

import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import rentiLogo from "../../Images/renti-logo.png";
import Styles from "./Dashboard.module.css";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

const profileItems = [
  {
    key: 1,
    label: (
      <Link to="/notification" style={{ height: "50px" }} rel="noreferrer">
        <div
          className={Styles.everyNotify}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{ marginRight: "20px" }}
            width="30"
            height="30"
            src="https://img.icons8.com/windows/32/gender-neutral-user.png"
            alt="gender-neutral-user"
          />
          <div className="" style={{ marginTop: "" }}>
            <p>Profile</p>
          </div>
        </div>
      </Link>
    ),
  },
  {
    key: 2,
    label: (
      <Link to="/notification" style={{}} rel="noreferrer">
        <div
          className={Styles.everyNotify}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{ marginRight: "20px" }}
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/appointment-reminders--v1.png"
            alt="appointment-reminders--v1"
          />
          <div className="" style={{ marginTop: "" }}>
            <p>Notification</p>
          </div>
        </div>
      </Link>
    ),
  },
  {
    key: 3,
    label: (
      <div
        style={{ border: "none", backgroundColor: "transparent" }}
        rel="noreferrer"
      >
        <div
          className={Styles.everyNotify}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{ marginRight: "20px" }}
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/exit--v1.png"
            alt="exit--v1"
          />
          <div className="" style={{ marginTop: "" }}>
            <p>Logout</p>
          </div>
        </div>
      </div>
    ),
  },
];

const items = [...Array(5).keys()].map((item, index) => {
  return {
    key: index,
    label: (
      <Link to="/notification" style={{}} rel="noreferrer">
        <div
          className={Styles.everyNotify}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{
              backgroundColor: "#d9cffb",
              borderRadius: "100%",
              padding: "5px",
              marginRight: "15px",
            }}
            width="30"
            height="30"
            src="https://img.icons8.com/3d-fluency/94/person-male--v2.png"
            alt="person-male--v2"
          />
          <div className="" style={{ marginTop: "" }}>
            <p>
              <span>Sanchej haro manual </span>started a new trip from mexico.
            </p>
            <span style={{ color: "#d2d2d2" }}>1 hr ago</span>
          </div>
        </div>
      </Link>
    ),
  };
});

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.lang);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [t, i18n] = useTranslation("global");

  const handleSelectLanguage = (value) => {
    setSelectedLanguage(value);
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("lang", value);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const menu = (
    <Menu>
      <Menu.Item disabled>
        <h2
          style={{
            color: "#F66D0F",
            fontWeight: "500",
            borderBottom: "1px solid #e6e7f4",
            paddingBottom: "20px",
          }}
        >
          Notifications
        </h2>
        {/* <span style={{ fontWeight: 'bold', color: '#000' }}>Notifications</span> */}
      </Menu.Item>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px",
        }}
      >
        <Button
          type="primary"
          block
          style={{
            height: "50px",
            backgroundColor: "#e6e7f4",
            color: "#F66D0F",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <Link to="/notification">See All</Link>
        </Button>
      </div>
    </Menu>
  );

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        width="313px"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          zIndex: 2,
          backgroundColor: "white",
        }}
      >
        <div className="demo-logo-vertical" />
        <div
          className={Styles.logo}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <img
            src={rentiLogo}
            height={collapsed ? "40px" : "150px"}
            width={collapsed ? "40px" : "150px"}
          />
        </div>

        <Menu
          style={{ padding: collapsed ? "0px" : "20px", border: "none" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item
            key="1"
            icon={<RxDashboard style={{ fontSize: "14px", color: "white" }} />}
          >
            <Link to="/" style={{ fontSize: "16px" }}>
              {t("dashboard")}
            </Link>
          </Menu.Item>

          <SubMenu
            style={{ fontSize: "16px" }}
            key="2"
            icon={
              <GiReceiveMoney style={{ fontSize: "14px", color: "white" }} />
            }
            title={t("earning.title")}
          >
            <Menu.Item key="31">
              <Link to="/earning/today-income">{t("earning.subTitle1")}</Link>
            </Menu.Item>
            <Menu.Item key="32">
              <Link to="/earning/weekly-income">{t("earning.subTitle2")}</Link>
            </Menu.Item>
            <Menu.Item key="33">
              <Link to="/earning/monthly-income">{t("earning.subTitle3")}</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item
            key="3"
            icon={<MdPayment style={{ fontSize: "14px", color: "white" }} />}
          >
            <Link to="/" style={{ fontSize: "16px" }}>
              {t("payment.title")}
            </Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={
              <IoWalletOutline style={{ fontSize: "14px", color: "white" }} />
            }
          >
            <Link to="/" style={{ fontSize: "16px" }}>
              {t("wallet")}
            </Link>
          </Menu.Item>
          <Divider />

          <SubMenu
            style={{ fontSize: "16px" }}
            key="4"
            icon={
              <TbCalendarCheck style={{ fontSize: "14px", color: "white" }} />
            }
            title={t("appointment.title")}
          >
            <Menu.Item key="39">
              <Link to="/host-info">{t("appointment.subTitle1")}</Link>
            </Menu.Item>
            <Menu.Item key="40">
              <Link to="/host-request">{t("appointment.subTitle2")}</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item
            key="5"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_711_3682)">
                  <path
                    d="M3.44883 0.460541C3.02695 0.541399 2.56289 0.882416 1.81055 1.65585C1.13906 2.34843 0.745313 2.88632 0.421875 3.55781C0.242578 3.92695 0.140625 4.2539 0.140625 4.44726C0.144141 4.59492 0.253125 4.82343 0.369141 4.91484C0.548438 5.05546 0.829688 5.0871 1.02656 4.98515C1.06172 4.96757 1.6207 4.52109 2.27109 3.99023C3.61406 2.88984 3.58594 2.90742 3.81094 3.17109C3.93398 3.31171 3.9375 3.32226 3.87773 3.37851C3.84258 3.41015 3.23789 3.90585 2.53125 4.48242C1.82461 5.05898 1.22695 5.55468 1.20586 5.58281C1.18125 5.61445 1.16016 5.69882 1.16016 5.76913C1.16016 5.87109 1.18125 5.91679 1.25156 5.97304C1.38516 6.07851 1.48359 6.06445 1.66992 5.92382C1.80352 5.81835 4.08164 3.95859 4.25391 3.81093C4.29961 3.77226 4.33125 3.79335 4.47891 3.97617C4.57734 4.0957 4.63711 4.20117 4.61953 4.21523C4.60195 4.23281 4.0043 4.72499 3.28711 5.30859C2.57344 5.89218 1.9582 6.40195 1.92656 6.44062C1.89141 6.47929 1.86328 6.56367 1.86328 6.63046C1.86328 6.79218 1.96523 6.89062 2.1375 6.89062C2.25703 6.89062 2.38359 6.7957 3.63867 5.7621L5.00977 4.6371L5.1293 4.7707C5.30156 4.96757 5.36133 5.06601 5.32266 5.09062C5.1293 5.22421 2.60508 7.32656 2.5875 7.36874C2.51719 7.55507 2.65078 7.76953 2.84063 7.76953C2.96367 7.76953 2.84414 7.85742 4.40859 6.57773C5.10117 6.01171 5.68828 5.54414 5.71289 5.54062C5.7375 5.54062 5.82539 5.62499 5.91328 5.73046L6.07148 5.92382L4.69688 7.04882C3.80391 7.78007 3.31172 8.20898 3.29063 8.26874C3.22031 8.46913 3.42773 8.69062 3.62813 8.62734C3.67031 8.61328 4.31367 8.10703 5.05195 7.50234C5.79023 6.89413 6.40898 6.39843 6.43008 6.39843C6.46875 6.39843 6.75 6.7289 6.75 6.77812C6.75 6.79921 6.15234 7.30546 5.42109 7.90312C4.69336 8.50078 4.07109 9.01757 4.04297 9.04921C3.96211 9.14765 3.97969 9.34804 4.07461 9.42538C4.27148 9.5871 4.28203 9.58007 5.76211 8.36718C6.51445 7.74843 7.14023 7.24218 7.14727 7.24218C7.1543 7.24218 7.23867 7.34413 7.34063 7.46718L7.51992 7.69218L6.30703 9.10195C5.00625 10.6172 5.01328 10.6066 5.17148 10.807C5.2418 10.8984 5.37188 10.9266 5.49844 10.8773C5.53008 10.8633 6.1207 10.1988 6.81328 9.39374L8.06836 7.93124L8.09648 8.08945C8.15625 8.39179 8.27227 8.74687 8.55 9.45703C8.82422 10.1531 8.83125 10.1777 8.76445 10.2305C8.7293 10.2586 7.37227 11.4187 5.75508 12.8109C3.80391 14.4844 2.80547 15.3633 2.79141 15.4195C2.73867 15.6234 2.94961 15.8273 3.14297 15.7641C3.19219 15.7465 3.98672 15.0855 4.90781 14.291C5.83242 13.4965 6.60938 12.8355 6.6375 12.818C6.67617 12.7969 6.71133 12.818 6.77461 12.8988C6.96445 13.1414 7.37578 13.2258 7.65703 13.0816C7.72734 13.0465 8.26172 12.7195 8.8418 12.3609C9.97031 11.6578 10.132 11.584 10.473 11.6086C10.8527 11.6367 10.923 11.693 12.0656 12.9269C12.6422 13.5457 13.1414 14.066 13.1695 14.0766C13.3594 14.1504 13.5703 14.0098 13.5703 13.8164C13.5703 13.7355 13.5281 13.6617 13.4016 13.5246C11.8617 11.8582 11.4082 11.3871 11.2535 11.2887C10.7789 10.9828 10.1426 10.9582 9.61523 11.2219C9.53789 11.2605 9.00703 11.584 8.43398 11.9391C7.86094 12.2941 7.3582 12.5859 7.31602 12.5859C7.22461 12.5859 7.14023 12.4312 7.19297 12.3539C7.21055 12.3258 8.0543 11.5945 9.0668 10.7227L10.9055 9.14413L12.4945 11.0848C13.3664 12.1535 14.7305 13.8234 15.5215 14.7937C16.316 15.7641 16.977 16.5937 16.9945 16.6394C17.0684 16.8398 16.875 17.0578 16.6816 16.991C16.6324 16.9769 16.0383 16.3617 15.3563 15.6269C14.2559 14.4422 14.1012 14.291 13.9992 14.2805C13.7707 14.2594 13.6125 14.4773 13.718 14.6707C13.7426 14.7164 14.3156 15.3527 14.9906 16.0769C16.2492 17.4375 16.3266 17.5078 16.6359 17.5605C16.8152 17.5922 17.0895 17.5219 17.2582 17.4023C17.3426 17.3391 17.4305 17.2266 17.4902 17.107C17.5746 16.9383 17.5852 16.8785 17.5711 16.6641C17.5605 16.4637 17.5395 16.3934 17.4516 16.2703C17.3918 16.1859 15.9961 14.4703 14.3508 12.4523C12.702 10.4344 11.3555 8.78203 11.3555 8.77148C11.3555 8.76445 11.9637 8.2371 12.6246 7.6746C12.6773 7.63242 12.6914 7.63945 12.7652 7.75898C13.0008 8.13867 13.4965 8.51835 13.9535 8.66249C15.2297 9.06679 16.5586 8.33554 16.8926 7.04882C16.9594 6.77812 16.9629 6.19453 16.8926 5.92382C16.8645 5.80781 16.7871 5.60038 16.7203 5.46679C16.657 5.32968 16.5938 5.17851 16.5832 5.12929C16.548 4.99218 16.6219 4.61601 16.7238 4.39804C16.8996 4.02538 17.3461 3.67382 17.7328 3.60351C17.9297 3.56484 18.007 3.47343 17.993 3.29765C17.9859 3.18867 17.9578 3.13593 17.8875 3.0832C17.8031 3.01992 17.775 3.0164 17.5887 3.05156C17.0473 3.16054 16.4848 3.59648 16.2316 4.10976C16.1578 4.2539 16.091 4.4332 16.0805 4.50703C16.0664 4.58085 16.0523 4.64062 16.0453 4.64062C16.0383 4.64062 15.9574 4.5914 15.866 4.53515C15.525 4.31718 15.1453 4.21523 14.6777 4.21523C14.052 4.21171 13.5105 4.42617 13.0816 4.84804C12.6316 5.28749 12.4031 5.81132 12.3961 6.41601C12.3961 6.60937 12.4031 6.83437 12.4207 6.91523L12.4453 7.06288L11.7141 7.6957L10.9793 8.32499L10.4238 7.64648C9.8332 6.91874 9.77344 6.87304 9.57305 6.96796C9.46406 7.0207 9.40078 7.15781 9.43242 7.28085C9.44297 7.32656 9.69258 7.65703 9.98438 8.0121C10.2727 8.36718 10.5117 8.67304 10.5117 8.6871C10.5117 8.73632 10.241 8.85937 10.0441 8.89804C9.82266 8.94023 9.46055 8.89101 9.1125 8.77499C8.8418 8.68359 8.83125 8.66953 8.71875 8.23007C8.6168 7.83984 8.63086 7.44257 8.75742 7.19999C8.88398 6.9539 10.4801 5.09765 10.5469 5.11874C10.6945 5.17148 11.2816 5.17148 11.5312 5.11874C12.1957 4.97812 12.8215 4.49296 13.1063 3.89882C13.1836 3.7371 13.268 3.51562 13.2926 3.41015C13.3594 3.13945 13.3488 2.5664 13.275 2.28515C13.057 1.48359 12.375 0.826166 11.5734 0.646868C11.1867 0.562494 10.6488 0.594133 10.3008 0.720697C9.58008 0.987885 9.03164 1.58202 8.8418 2.30273C8.77148 2.57695 8.76797 3.11835 8.83828 3.4207C8.96484 3.95859 9.37969 4.55273 9.81211 4.80585C9.86836 4.84101 9.91055 4.87968 9.90703 4.89374C9.9 4.91132 9.70312 5.15038 9.46406 5.43163L9.03164 5.93788L8.9332 5.82539C8.88047 5.7621 7.97695 4.66874 6.92578 3.39257C5.87461 2.1164 4.96055 1.01249 4.89023 0.93515C4.52109 0.537884 3.97266 0.358587 3.44883 0.460541ZM4.14141 1.08984C4.23633 1.13202 4.36992 1.22343 4.43672 1.29374C4.53164 1.39218 7.75898 5.29453 8.51484 6.22265L8.64141 6.38085L8.27227 6.81328C8.06836 7.05234 7.88906 7.23515 7.875 7.21757C7.86094 7.20351 7.05234 6.21562 6.08203 5.02734C5.1082 3.83906 4.25742 2.80546 4.18711 2.72812C4.1168 2.65429 3.99727 2.56288 3.91992 2.52773C3.73359 2.43984 3.36445 2.43984 3.19922 2.52421C3.13242 2.55937 2.55938 3.00937 1.92656 3.52968C1.29375 4.04648 0.766406 4.46835 0.748828 4.46484C0.696094 4.45781 0.738281 4.24687 0.84375 3.99374C0.991406 3.64218 1.33594 3.09374 1.68047 2.66132C1.99336 2.26406 2.74219 1.51523 3.06914 1.26562C3.45234 0.980852 3.76523 0.928118 4.14141 1.08984ZM11.4996 1.2164C12.1465 1.40624 12.6457 1.95117 12.7617 2.60156C12.9727 3.7582 11.8758 4.80937 10.7156 4.56679C10.1215 4.44374 9.61875 3.98671 9.42188 3.38906C9.35508 3.1957 9.34453 3.09726 9.35859 2.80195C9.36914 2.47499 9.3832 2.41874 9.50274 2.16913C9.7207 1.70507 10.1496 1.34296 10.6207 1.2164C10.8738 1.14609 11.2641 1.14609 11.4996 1.2164ZM15.1523 4.84101C15.5145 4.93945 15.9152 5.24179 16.1332 5.58632C16.4602 6.09609 16.4707 6.80273 16.1648 7.34413C15.8238 7.94179 15.082 8.3039 14.4211 8.1914C13.4859 8.03671 12.8215 7.14726 12.9691 6.25078C13.1414 5.19609 14.1293 4.55976 15.1523 4.84101ZM9.47109 9.44999L9.64688 9.4746L9.46758 9.62578L9.28828 9.77343L9.22852 9.62578C9.19688 9.5414 9.1582 9.45351 9.15117 9.4289C9.13711 9.39726 9.15469 9.39023 9.21445 9.40429C9.26367 9.41484 9.37617 9.43593 9.47109 9.44999Z"
                    fill="white"
                  />
                  <path
                    d="M7.4355 9.74874C7.36167 9.80851 7.34058 9.86124 7.34058 9.96671C7.34058 10.2233 7.61479 10.3534 7.8187 10.1917C7.89253 10.1355 7.91011 10.0898 7.91011 9.96671C7.91011 9.84366 7.89253 9.79796 7.8187 9.74171C7.69565 9.64679 7.55151 9.64679 7.4355 9.74874Z"
                    fill="white"
                  />
                  <path
                    d="M4.56325 11.1726C4.42966 11.2605 0.105442 16.3054 0.0491915 16.4425C-0.0140897 16.5902 -0.0140897 16.9136 0.0456759 17.0613C0.119504 17.23 0.270676 17.3952 0.43591 17.4796C0.618723 17.5745 0.949192 17.5851 1.12497 17.4972C1.24099 17.441 2.44685 16.4249 2.5031 16.337C2.55232 16.2597 2.53122 16.112 2.45739 16.0171C2.40466 15.9468 2.35544 15.9257 2.257 15.9257C2.14099 15.9257 2.06364 15.9785 1.52927 16.439C1.20232 16.7202 0.896457 16.9699 0.850754 16.991C0.738254 17.0437 0.583567 16.9242 0.569504 16.7765C0.558957 16.6605 0.316379 16.9523 3.93396 12.7441C4.49646 12.0867 4.96755 11.5136 4.98161 11.4679C5.01325 11.3449 4.92888 11.1902 4.80935 11.148C4.67224 11.0988 4.67575 11.0988 4.56325 11.1726Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_711_3682">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            <Link to="/user-info" style={{ fontSize: "16px" }}>
              {t("solonaList")}
            </Link>
          </Menu.Item>

          <Menu.Item
            key="6"
            icon={<FaUsers style={{ fontSize: "14px", color: "white" }} />}
          >
            <Link to="/rent-info" style={{ fontSize: "16px" }}>
              {t("barberList")}
            </Link>
          </Menu.Item>

          <Menu.Item
            key="7"
            icon={<FaUsers style={{ fontSize: "14px", color: "white" }} />}
          >
            <Link to="/car-info" style={{ fontSize: "16px" }}>
              {t("userList")}
            </Link>
          </Menu.Item>

          <Menu.Item
            key="7"
            icon={
              <TbMessageCircle2Filled
                style={{ fontSize: "14px", color: "white" }}
              />
            }
          >
            <Link to="/message" style={{ fontSize: "16px" }}>
              {t("message")}
            </Link>
          </Menu.Item>

          <Divider />

          <Menu.Item
            key="9"
            icon={
              <SettingOutlined style={{ fontSize: "14px", color: "white" }} />
            }
          >
            <Link to="/setting" style={{ fontSize: "16px" }}>
              {t("setting.title")}
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100vw",
            height: "80px",
            zIndex: 1,
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "60px",
          }}
        >
          <div className="" style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuOutlined  /> : <MenuOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                marginLeft: collapsed ? "125px" : "360px",
                fontSize: "16px",
                width: 45,
                height: 45,
                marginRight: "10px",
                color:"white"
              }}
            />
            <h2>{t("header.title")}</h2>
          </div>

          <div
            className={Styles.notificatonProfileSection}
            style={{ display: "flex", alignItems: "center", lineHeight: 0 }}
          >
            <div className="" style={{ marginRight: "40px" }}>
              <Select
                value={selectedLanguage}
                style={{ width: 150 }}
                onChange={handleSelectLanguage}
              >
                <Option value="en">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg"
                      alt="English"
                      style={{ marginRight: 8, width: 16, height: 16 }}
                    />
                    English
                  </div>
                </Option>
                <Option value="es">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://e0.pxfuel.com/wallpapers/630/608/desktop-wallpaper-spain-flag-in-collection.jpg"
                      style={{ marginRight: 8, width: 16, height: 16 }}
                    />
                    Spanish
                  </div>
                </Option>
              </Select>
            </div>
            <div className={Styles.notificaton}>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <IoMdNotificationsOutline style={{ fontSize: "30px", color: "white" }} />
              </Dropdown>
            </div>
            <div className={Styles.profile}>
              <Dropdown
                menu={{
                  items: profileItems,
                }}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <img
                  style={{ cursor: "pointer" }}
                  width="40"
                  height="40"
                  src="https://img.icons8.com/3d-fluency/94/person-male--v2.png"
                  alt="person-male--v2"
                />
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            marginTop: "120px",
            marginBottom: "50px",
            marginLeft: collapsed ? "130px" : "360px",
            marginRight: "60px",
            background: "#e6e7f4",
            padding: 50,
            minHeight: 280,
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
