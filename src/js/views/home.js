import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    // Añadir 4 perfiles de ejemplo si no hay ninguno
    if (store.demo.length === 0) {
      actions.addDemoItem("Nombre 1", "Teléfono 1", "Ubicación 1", "blue");
      actions.addDemoItem("Nombre 2", "Teléfono 2", "Ubicación 2", "red");
      actions.addDemoItem("Nombre 3", "Teléfono 3", "Ubicación 3", "green");
      actions.addDemoItem("Nombre 4", "Teléfono 4", "Ubicación 4", "orange");
    }
  }, [actions, store.demo.length]);

  return (
    <div className="container mt-5">
      <h1>List of Contacts</h1>
      {/* Lista de perfiles */}
      <ul className="list-group mt-5">
        {store.demo.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="profile-info">
              <img src={item.profilePhoto} alt="Profile" />
              <div>
                <div>Name: {item.name}</div>
                <div>Phone: {item.phone}</div>
                <div>Address: {item.address}</div>
              </div>
            </div>
            {/* Botones de editar y eliminar */}
            <div>
              <button
                className="btn btn-warning mr-2"
                onClick={() => actions.editDemoItem(index)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => actions.deleteDemoItem(index)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/contacts" className="btn btn-primary">
        Add New Contact
      </Link>
    </div>
  );
};

export default Home;
