import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const selectedContact = store.demo.find((item) => item.id === parseInt(id));
    setContact(selectedContact);
  }, [id, store.demo]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Contact Details</h1>
      <div>
        <h3>Name: {contact.name}</h3>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Address: {contact.address}</p>
        {/* Agrego aquí cualquier otra información relevante */}
      </div>
    </div>
  );
};
