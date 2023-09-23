import { Col, Row } from "antd";
import React from "react";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import "./DashboardHome.css";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { GrHistory } from "react-icons/gr";
import { MdCarRental } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import InvoiceTable from "./InvoiceTable";
import MostRentCarChart from "./MostRentCarChart";
import DailyRentChart from "./dailyRentChart";

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  return (
    <div className="dashboardContainer">
      <Row>
        <h2
          style={{
            fontSize: "25px",
            marginBottom: "10px",
            fontWeight: "normal",
          }}
        >
          Rent Information
        </h2>
      </Row>

      <Row gutter={16} style={{ marginBottom: "20px" }}>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div style={{ background: "#7CC605",width:"390px",height:"200px", paddingTop:"50px" }} className="rent-card complete">
            <h3
              style={{
                fontSize: "1.5rem",
                letterSpacing: ".2rem",
                marginBottom: "15px",
              }}
            >
              110
            </h3>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "normal",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              Completed
            </h1>
          </div>
        </Col>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div style={{ background: "#FDB600",width:"390px",height:"200px", paddingTop:"50px" }} className="rent-card reserved">
            <h3
              style={{
                fontSize: "1.5rem",
                letterSpacing: "1px",
                marginBottom: "15px",
              }}
            >
              60
            </h3>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "300",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              Pending
            </h1>
          </div>
        </Col>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div style={{ background: "#FC4400",width:"390px",height:"200px", paddingTop:"50px" }} className="rent-card canceled">
            <h3
              style={{
                fontSize: "1.5rem",
                letterSpacing: "1px",
                marginBottom: "15px",
              }}
            >
              20
            </h3>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "300",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              Cancelled
            </h1>
          </div>
        </Col>
      </Row>

      <Row>
        <h2
          style={{ fontSize: "25px", margin: "30px 0px", fontWeight: "normal" }}
        >
          Recent Appointments
        </h2>
      </Row>
      <InvoiceTable />
    </div>
  );
}

export default DashboardHome;
