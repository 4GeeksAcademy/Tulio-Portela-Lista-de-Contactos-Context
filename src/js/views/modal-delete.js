import React from "react";
import { Modal, Button } from "react-bootstrap";

export const ModalDelete = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>¿Estás seguro?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Para eliminar este perfil o volver al punto anterior, confirma aquí.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;
