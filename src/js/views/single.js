import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Single = () => {
  const { actions } = useContext(Context);
  const [newContact, setNewContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const history = useHistory();

  const handleInputChange = (event) => {
    setNewContact({
      ...newContact,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    actions.addDemoItem(
      newContact.fullName,
      newContact.phone,
      newContact.address,
      "blue"
    );
    history.push("/");
  };

  return (
    <div className="container mt-5">
      <h1>Add a New Contact</h1>
      <div className="form-group">
        <label htmlFor="fullName">Full name:</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          value={newContact.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter email"
          value={newContact.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          placeholder="Enter phone"
          value={newContact.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          placeholder="Enter Address"
          value={newContact.address}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};
