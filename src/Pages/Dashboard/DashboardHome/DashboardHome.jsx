import { Col, Row } from "antd";
import React from "react";
import "./DashboardHome.css";
import InvoiceTable from "./InvoiceTable";

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
          Service Status
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
          <div
            style={{
              background: "#7CC605",
              width: "390px",
              height: "200px",
              paddingTop: "50px",
            }}
            className="rent-card complete"
          >
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
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_281_2843)">
                  <path
                    d="M12.6055 0.0382881C10.7516 0.213287 8.68437 0.875006 7.02734 1.83204C3.77343 3.70782 1.35624 6.86329 0.432025 10.4289C0.0874939 11.7742 0.0328064 12.2883 0.0328064 14C0.0328064 15.3563 0.0437439 15.6461 0.14765 16.2422C0.661713 19.1953 1.89765 21.6399 3.93749 23.7563C6.03202 25.9328 8.67343 27.3109 11.7578 27.8523C12.3539 27.9563 12.6437 27.9672 14 27.9672C15.7117 27.9672 16.2258 27.9125 17.5711 27.568C23.4336 26.0531 27.7758 20.6992 27.9836 14.7055C28.0219 13.6609 27.9891 13.4969 27.6719 13.2125C27.2508 12.8352 26.7312 12.8133 26.2555 13.1688C25.9711 13.382 25.8836 13.65 25.8453 14.4484C25.725 17.0242 24.8336 19.4141 23.2586 21.3883C22.8375 21.9188 21.9187 22.8375 21.3883 23.2586C19.7641 24.5547 17.7953 25.4133 15.6898 25.7414C14.8312 25.8727 13.1687 25.8727 12.3102 25.7414C9.71796 25.3367 7.47031 24.1992 5.63281 22.3672C3.80078 20.5297 2.66328 18.282 2.25859 15.6898C2.12734 14.8313 2.12734 13.1688 2.25859 12.3102C2.66328 9.71798 3.80078 7.47032 5.63281 5.63282C7.78202 3.48907 10.4945 2.29688 13.5516 2.15469C14.35 2.11641 14.618 2.02891 14.8312 1.74454C14.9789 1.54219 15.0937 1.25235 15.0937 1.07188C15.0937 0.683599 14.793 0.213287 14.4539 0.0765686C14.2844 0.005476 13.2016 -0.0163994 12.6055 0.0382881Z"
                    fill="white"
                  />
                  <path
                    d="M26.0039 3.6039C25.8508 3.66953 23.8875 5.58906 19.4141 10.0461L13.043 16.3953L10.7188 13.8687C9.11641 12.1297 8.32891 11.3148 8.18125 11.2437C7.875 11.0961 7.44297 11.1125 7.14219 11.2875C6.80313 11.4844 6.58985 11.9164 6.6336 12.3102C6.65547 12.4633 6.71563 12.6656 6.77579 12.7586C6.91797 12.9828 12.2281 18.7414 12.425 18.8891C12.6109 19.0203 13.1414 19.0695 13.4203 18.9766C13.568 18.9273 15.2195 17.3195 20.4586 12.0969C24.5656 8.00625 27.3383 5.20078 27.4039 5.08047C27.4695 4.94375 27.5078 4.75781 27.5078 4.55C27.5078 3.76797 26.7258 3.27578 26.0039 3.6039Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_281_2843">
                    <rect width="28" height="28" rx="8" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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
          <div
            style={{
              background: "#FDB600",
              width: "390px",
              height: "200px",
              paddingTop: "50px",
            }}
            className="rent-card reserved"
          >
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
          <div
            style={{
              background: "#FC4400",
              width: "390px",
              height: "200px",
              paddingTop: "50px",
            }}
            className="rent-card canceled"
          >
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
