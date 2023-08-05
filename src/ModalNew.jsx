import { Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalNew = ({ show, handleCloseModal, dataModal }) => {
  return (
    <>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Body>
          <div className="container">
            <div className="row mt-3">
              <h5 className="text-center">{dataModal.title}</h5>
              <p className="text-center">Inscribite ahora!!!</p>
            </div>
            <div className="row">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Ingrese su nombre</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
              <div className="container text-center p-3">
                <Button size="sm" onClick={handleCloseModal}>
                  MÁS INFO
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalNew;

ModalNew.propTypes = {
  show: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};
