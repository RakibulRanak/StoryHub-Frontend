import { useColorModeValue } from '@chakra-ui/react';
import { Button, Modal } from 'react-bootstrap';

const Alert = (props) => {
    const color = useColorModeValue('bg-white', 'bg-dark');
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
                <Modal.Header closeButton className={color}>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body className={color}> Are you sure to perform this action?</Modal.Body>
                <Modal.Footer className={color}>
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
