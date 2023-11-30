import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import logo from "../../Images/Logo.png";
import style from "./Signin.module.css";

const Signin = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();

  const handleForget = () => {
    navigate("/forget-password");
  };

  return (
    <div className={style.signContainer}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={style.formContainer}>
        <h2
          style={{
            color: "#0E1116",
            fontWeight: "700",
            marginBottom: "36px",
          }}
        >
          Sign In
        </h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div>
            <label htmlFor="" className={style.label}>
            Email
            </label>
            <Form.Item
              name="email"
    
            >
              <Input
                type="email"
                placeholder="Enter your Email"
                className={style.input}
              />
            </Form.Item>
          </div>

          <div>
            <label htmlFor="" className={style.label}>
          Password
            </label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter confirm Password!",
                },
              ]}
            >
              <Input
                type="passowrd"
                placeholder="Enter your password"
                className={style.input}
              />
            </Form.Item>
          </div>

          {/* showing error */}
          {/* <label style={{ color: "red" }}>{err}</label> */}
          <div className={style.rememberAndPass}>
            <div></div>
            <a
              className="login-form-forgot"
              style={{ color: "#F66D0F", fontWeight: "600" }}
              href=""
              onClick={handleForget}
            >
              Forgot password?
            </a>
          </div>

          <Form.Item>
          <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                navigate("/");
              }}
              block
              style={{
                height: "45px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#F66D0F",
                marginTop: "20px",
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  );
};

export default Signin;
