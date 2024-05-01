import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";

export const ModalDelete = ({ index, setShowModal }) => {
  const { actions } = useContext(Context);
  const modalRef = useRef();

  const handleDelete = () => {
    actions.deleteDemoItem(index);
    var myModal = new bootstrap.Modal(modalRef.current);
    myModal.hide();
    setShowModal(false);
  };

  return (
    <div className="modal" tabIndex="-1" ref={modalRef} id="deleteModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmar eliminación</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>¿Estás seguro de que quieres eliminar este perfil?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary bg-secondary btn-outline-light"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger bg-danger"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
