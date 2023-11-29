import React, { useState } from "react";
import styles from "./Categories.module.css";
import { FaEdit } from "react-icons/fa";
import { Button, Col, Checkbox, Upload, Row, Input, Modal, Form } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const stylee = {
  formContainer: {
    // background: "white",
    // padding: "30px",
    borderRadius: "10px",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "45px",
    marginBottom: "10px",
    backgroundColor: "#364153 !important",
  },
  notification: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "45px",
    marginTop: "10px",
    backgroundColor: "#364153",
    boxShadow: "0 2px 0 rgba(0, 0, 0, 0.02)",
    borderRadius: "6px",
    padding: "4px 15px",
    marginBottom: "15px",
  },
  option: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "45px",
    marginTop: "10px",
    backgroundColor: "#364153",
    boxShadow: "0 2px 0 rgba(0, 0, 0, 0.02)",
    borderRadius: "6px",
    padding: "4px 15px",
    marginBottom: "15px",
    cursor: "pointer",
  },
  input: {
    height: "45px",
  },
  otpInput: {
    width: "50px",
    height: "70px",
  },
  cardMenuBtn: {
    width: "100%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    gap: "5px",
  },
  ackgroundColor: "#364153 !important",
  // }
};

function Categories() {
  const [openChangePassModel, setOpenChangePassModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Catagories</h2>
        <button
          onClick={() => setOpenChangePassModel(!openChangePassModel)}
          className={styles.btn}
        >
          Add new catagory
        </button>
      </div>

      <div className={styles.catagoriesContainer}>
        {Array(15)
          .fill()
          .map((item, index) => (
            <div
              onClick={() => setOpenChangePassModel(!openChangePassModel)}
              className={styles.singleCard}
              key={index}
            >
              <div className={styles.singleCatagories}>
                <img src="https://i.ibb.co/09RJT8D/Rectangle-2060.png" alt="" />
                <FaEdit className={styles.editIcon} />
                <p>Nails</p>
              </div>
            </div>
          ))}
      </div>

      <Modal
        title={<h2 style={{ marginBottom: "30px" }}>Add Category</h2>}
        centered
        open={openChangePassModel}
        onCancel={() => setOpenChangePassModel(false)}
        width={500}
        footer={[]}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          //   onFinish={handleChangePassword}
        >
          <div>
            <label htmlFor="" className={styles.label}>
              Category name
            </label>
            <Form.Item name="categoryName">
              <Input
                placeholder="Enter Category name"
                type="text"
                style={stylee.input}
              />
            </Form.Item>
          </div>

          <div>
            <label htmlFor="">Category Picture</label>
            <Form.Item name="categoryPicture">
              <div
                style={{ display: "flex", width: "500px", margin: "0 auto" }}
              >
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className={styles.avatarUploader}
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              style={{
                height: "45px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#F66D0F",
                marginTop: "60px",
              }}
            >
              Add Category
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        centered
        open={openDeleteModel}
        onCancel={() => setOpenDeleteModel(false)}
        width={500}
        footer={[]}
      >
        <div className={styles.deleteModal}>
          <img src="https://i.ibb.co/K0PNtNc/Delete-icon.png" alt="" />
          <h3>You sure want to delete this package?</h3>

          <div style={{ display: "flex", gap: "5px" }}>
            <button className={styles.editBtn}>Yes</button>{" "}
            <button className={styles.editBtn}>No</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Categories;
