import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';

export default function DeleteModal({ isOpen, onDelete, onModal }) {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const deletedItem = useSelector((state) => state.passwords.delete.deletedItem);

    const handleSubmit = (e) => {
        e.preventDefault();
        onDelete(deletedItem);
    }

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={() => onModal(false, null)}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete password</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit}>
                        <ModalBody pb={6}>
                            <Text>Are you sure to delete this password?</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='red' mr={3} type={'submit'}>
                                Delete
                            </Button>
                            <Button onClick={() => onModal(false, null)}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}
