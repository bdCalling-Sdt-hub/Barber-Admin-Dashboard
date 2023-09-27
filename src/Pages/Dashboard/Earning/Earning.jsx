import { Col, Row } from "antd";
import React from "react";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import EarnHistoryTable from "./EarnHistoryTable";
import style from "./Earning.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Earning() {
  const location = useLocation();

  return (
    <div style={{ padding: "0px 50px" }}>
      <h2 style={{ fontSize: "25px", fontWeight: "normal" }}>Total Earnings</h2>
      <Row
        gutter={{
          xs: 8,
          sm: 18,
          md: 24,
          lg: 45,
        }}
        style={{ marginTop: "20px" }}
      >
        <Col className="gutter-row" span={8}>
          <div
            style={{
              background: `${
                location.pathname === "/earning/today-income" ? "#F66D0F" : ""
              }`,
            }}
            className={style.card}
          >
            <div>
              <h2 className={style.cardTitle}>$ 110</h2>
              <div className={style.statusTitle}>
                <LiaHandHoldingUsdSolid
                  style={{ fontSize: "35px", marginRight: "8px" }}
                />
                <h2>Today’s Income</h2>
              </div>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div
            style={{
              background: `${
                location.pathname === "/earning/weekly-income" ? "#F66D0F" : ""
              }`,
            }}
            className={style.card}
          >
            <div>
              <h2 className={style.cardTitle}>$ 260</h2>
              <div className={style.statusTitle}>
                <LiaHandHoldingUsdSolid
                  style={{ fontSize: "35px", marginRight: "8px" }}
                />
                <h2>Weakly Income</h2>
              </div>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div
            style={{
              background: `${
                location.pathname === "/earning/monthly-income" ? "#F66D0F" : ""
              }`,
            }}
            className={style.card}
          >
            <div>
              <h2 className={style.cardTitle}>$ 1120</h2>
              <div className={style.statusTitle}>
                <LiaHandHoldingUsdSolid
                  style={{ fontSize: "35px", marginRight: "8px" }}
                />
                <h2>Monthly Income</h2>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <h2
        style={{ fontSize: "25px", margin: "30px 0px", fontWeight: "normal" }}
      >
        Transaction History
      </h2>

      <EarnHistoryTable />
    </div>
  );
}

export default Earning;
