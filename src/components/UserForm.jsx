// src/components/UserForm.jsx
import React, { useState } from "react";
import { Input, Button, Form } from "antd";

const UserForm = ({ getUser }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(username);
  };

  return (
    <Form
      onSubmitCapture={handleSubmit}
      style={{ maxWidth: 400, margin: "20px auto", textAlign: "center" }}
    >
      <Input
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        size="large"
        style={{ marginBottom: "10px" }}
      />

      <Button type="primary" htmlType="submit" block size="large">
        Search
      </Button>
    </Form>
  );
};

export default UserForm;
