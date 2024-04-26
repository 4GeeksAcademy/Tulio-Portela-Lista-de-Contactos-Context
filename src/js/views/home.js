import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrashAlt,
  faLocationDot,
  faPhoneFlip,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    // Añadir 4 perfiles de ejemplo si no hay ninguno
    // agregar cambios adicionales al recargar la página
  }, []);

  return (
    <div className="container mt-3">
      <div className="AddContact d-flex justify-content-between">
        <h1 className="title text-start ms-2">List of Contacts</h1>
        <Link to="/dates">
          <button className="btn btn-primary me-2">Add new contact</button>
        </Link>
      </div>
      {/* Lista de perfiles */}
      <ul className="list-group mt-1">
        {store.demo.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="profile-info d-flex align-items-center">
              <img
                src={item.profilePhoto}
                alt="Profile"
                className="profile-photo"
              />
              <div>
                <div className="Name-Icons">
                  <span>{item.name}</span>
                  <span className="icons">
                    <button
                      className="btn mr-2"
                      onClick={() => actions.editDemoItem(index)}
                    >
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    <button
                      className="btn mr-2"
                      onClick={() => actions.deleteDemoItem(index)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faLocationDot} /> {item.address}
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhoneFlip} /> {item.phone}
                </div>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} /> {item.email}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
