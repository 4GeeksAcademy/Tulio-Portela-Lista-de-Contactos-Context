import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import meOnProgramation from "../../img/me-on-programation.jpg";
import meOnVacation from "../../img/me-on-vacation.jpg";
import {
  faPencilAlt,
  faTrashAlt,
  faLocationDot,
  faPhoneFlip,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ModalDelete from "./modal-delete";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [showModalIndex, setShowModalIndex] = useState(null);

  const handleDeleteClick = (index) => {
    console.log("handleDeleteClick called with index: ", index);
    setShowModalIndex(index);
  };

  const handleDeleteConfirm = (index) => {
    actions.deleteDemoItem(index);
    setShowModalIndex(null);
  };

  const handleCancelDelete = () => {
    setShowModalIndex(null);
  };

  useEffect(() => {
    if (store.demo.length === 0) {
      actions.addDemoItem(
        "Michi Cat",
        "123-456-7890",
        "123 Main St, Anytown",
        "michicat@example.com",
        meOnProgramation
      );
      actions.addDemoItem(
        "NoMichi Dog",
        "987-654-3210",
        "456 Elm St, Othertown",
        "nomichidog@example.com",
        meOnVacation
      );
    }
  }, []);

  return (
    <div className="container mt-3 mb-3">
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
              <div className="w-100">
                <div className="d-flex justify-content-between m-1">
                  <span className="h5">{item.name}</span>
                  <span className="icons">
                    <Link
                      to={`/single/${item.id}`} // Enlace al perfil individual del contacto
                      className="btn mr-2"
                    >
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </Link>
                    <button
                      className="btn mr-2"
                      onClick={() => handleDeleteClick(index)}
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

            <ModalDelete
              show={showModalIndex === index}
              handleClose={() => setShowModalIndex(null)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
