"use client";
import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Upload } from "antd";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import dayjs from "dayjs";
import { PlusOutlined } from "@ant-design/icons";
import CustomButton from "@/components/Button/CustomButton";

const { RangePicker } = DatePicker;

const LoginForm = () => {
  const [form] = Form.useForm();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  // Function to handle form submission
  const onFinish = (values: any) => {
    console.log("Form values: ", values); // Logs the form values to console
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleCountryChange = (value: string) => {
    setCountry(value);
    setRegion(""); // Reset city value when country changes
    form.setFieldsValue({ city: undefined });
  };

  // Function to trigger form submission on button click
  const handleButtonClick = () => {
    form.submit();
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <Form
        form={form}
        name="login_form"
        layout="vertical"
        onFinish={onFinish}
        style={{
          padding: "24px",
          color: "white",
        }}
        className="w-full max-w-lg shadow-lg rounded-xl bg-opacity-90 backdrop-blur-lg"
      >
        <span className="text-lg">Do you wanna post your billboard</span>
        {/* Full Name */}
        <Form.Item
          name="fullName"
          label={<label style={{ color: "white" }}>Username</label>}
          style={{ marginBottom: "12px" }}
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Input your full name" />
        </Form.Item>

        <div className="flex gap-4">
          <Form.Item
            name="country"
            label={<label style={{ color: "white" }}>Country</label>}
            rules={[{ required: true, message: "Please select your country!" }]}
            style={{ marginBottom: "12px" }}
            className="w-[50%]"
          >
            <CountryDropdown
              value={country}
              onChange={(val) => handleCountryChange(val)}
              classes="rounded-lg h-[30px] w-full"
            />
          </Form.Item>

          {/* City */}
          {country && (
            <Form.Item
              name="city"
              label={<label style={{ color: "white" }}>City</label>}
              rules={[{ required: true, message: "Please select your city!" }]}
              className="w-[50%]"
            >
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
                classes="rounded-lg h-[30px] w-full"
              />
            </Form.Item>
          )}
        </div>

        {/* Address */}
        <Form.Item
          name="address"
          label={<label style={{ color: "white" }}>Address</label>}
          rules={[{ required: true, message: "Please enter your address!" }]}
          style={{ marginBottom: "12px" }}
        >
          <Input placeholder="Input your address" />
        </Form.Item>

        {/* Date Range */}
        <Form.Item
          name="dateRange"
          label={<label style={{ color: "white" }}>Select Date Range</label>}
          rules={[{ required: true, message: "Please select a date range!" }]}
        >
          <RangePicker
            format="YYYY-MM-DD"
            disabledDate={(current) =>
              current && current < dayjs().startOf("day")
            }
            className="w-full"
          />
        </Form.Item>

        {/* Image Upload */}
        <Form.Item
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Please upload your image!" }]}
        >
          <Upload
            action="/upload.do"
            listType="picture-card"
            maxCount={3} // Limit file upload to 3 images
          >
            <button
              style={{ border: 0, background: "none", color: "white" }}
              type="button"
            >
              <PlusOutlined />
              <div>Upload</div>
            </button>
          </Upload>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item style={{ marginBottom: "0px" }}>
          <CustomButton content="Submit" onclick={handleButtonClick} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
