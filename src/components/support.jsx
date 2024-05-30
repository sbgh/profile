

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// const Support = () => {
// const Support = ({ isModalVisible }) => {

const Support = props => {
    const { show, onClose } = props;

    const close = () => {
        { onClose() }
    }

    return (
        <div>
            <Modal id="supportModal" show={show} onHide={onClose} centered  >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Support</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>You're doing great!</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={() => close()}>ok</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    )
}

export default Support