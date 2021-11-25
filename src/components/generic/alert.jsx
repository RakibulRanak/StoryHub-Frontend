import { Button, Modal } from 'react-bootstrap';

const Alert = (props) => {
    const handleClose = () => {
        props.close();
    };
    const handleYes = () => {
        props.close();
        props.confirm();
    };
    return (
        <>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body> Are you sure to perform this action?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleYes}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Alert;
