import {
  Button,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Upload,
  message,
} from "antd";
const { TextArea } = Input;
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
//import DatePicker from "react-multi-date-picker";
import styleForm from "./Message.module.css";
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
const { Option } = Select;
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Message = () => {
  const [formType, setFormType] = useState("host");

  const [selectedCountry, setSelectedCountry] = useState("usa");

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const style = {
    formContainer: {
      background: "white",
      padding: "30px",
      borderRadius: "10px",
    },
    formNavigateBtn: {
      height: "50px",
    },
    input: {
      height: "45px",
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
          height: "45px",
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div style={{ padding: "0 60px" }}>
      <div>
        <form>
          <div>
            {/* <input className={`${styleForm.sendAllMessageInputBox}`} type='text' placeholder="Write message"/> */}
            <TextArea rows={8} className={styleForm.sendMessage} style={{ background: '#364153', color: '#FFF' }} placeholder="Write Message" />
            <div>
              <input className={`${styleForm.sendAllButton}`} type="submit" value={'Send to All'} />
            </div>
          </div>
          <Row style={{ marginBottom: "30px" }}>
            <h2 className={styleForm.h2Design}>
              Search Messages
            </h2>
            <Col lg={{ span: 24 }}>
              <div className='' style={{ display: "flex", gap: "15px" }}>
                <Input className={styleForm.searchMessageInput} size="large" placeholder="Search by name/ID" prefix={<SearchOutlined style={{ color: "#CFCFD0" }} />} />
                <Button style={{ height: "50px", width: "300px", backgroundColor: "#F66D0F", color: "#fff", fontSize: "20px" }}>Search</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <h2>Recent Messages</h2>
            <div>
              <input type="text" placeholder="search by name/ID" />
              <input type="submit" value={'Search'} />
            </div>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Message;
