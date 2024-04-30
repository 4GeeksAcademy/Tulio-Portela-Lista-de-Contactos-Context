import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dates = () => {
  const { actions } = useContext(Context);
  const [newContact, setNewContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setNewContact({
      ...newContact,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    // Validación de los campos del formulario
    if (!newContact.fullName) {
      alert("Por favor, introduce un nombre completo.");
      return;
    }
    if (!newContact.email || !newContact.email.includes("@")) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }
    if (!newContact.phone || newContact.phone.length < 10) {
      alert("Por favor, introduce un número de teléfono válido.");
      return;
    }
    if (!newContact.address) {
      alert("Por favor, introduce una dirección.");
      return;
    }

    // Si todas las validaciones son correctas, se añade el nuevo contacto
    actions.addDemoItem(
      newContact.fullName,
      newContact.phone,
      newContact.address,
      "blue"
    );
    navigate("/");
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
        <div className="buttons-form">
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary mt-3" onClick={handleSubmit}>
              Save
            </button>
          </div>

          <div className="d-flex justify-content-start p-0">
            <Link to="/" className="btn btn-link">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
