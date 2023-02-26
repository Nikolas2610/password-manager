import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import InputField, { INPUT } from '../ui/InputField';
import { onChangeValue } from '../../store/passwords/reducer/passwords.reducer';


export default function ModalForm({ isOpen, onSubmit, onModal, onUpdate }) {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const modalData = useSelector((state) => state.passwords.modal);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        modalData.selectedPassword
            ? onUpdate(modalData.selectedPassword, modalData.form)
            : onSubmit(modalData.form);
    }

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={() => onModal(false)}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {modalData.selectedPassword ? 'Edit password' : 'Create A Password'}</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit}>
                        <ModalBody pb={6}>
                            <InputField
                                title={'Title'}
                                placeholder={'Facebook'}
                                value={modalData.form.title}
                                type={INPUT.TEXT}
                                item={'title'}
                                onChangeData={(payload => dispatch(onChangeValue(payload)))}
                                errors={modalData.errors?.title}
                            />

                            <InputField
                                title={'Website'}
                                placeholder={'www.facebook.com'}
                                value={modalData.form.website}
                                type={INPUT.TEXT}
                                item={'website'}
                                onChangeData={(payload => dispatch(onChangeValue(payload)))}
                                errors={modalData.errors?.website}
                            />

                            <InputField
                                title={'Username'}
                                placeholder={'Iron Man'}
                                value={modalData.form.username}
                                type={INPUT.TEXT}
                                item={'username'}
                                onChangeData={(payload => dispatch(onChangeValue(payload)))}
                                errors={modalData.errors?.username}
                            />

                            <InputField
                                title={'Password'}
                                placeholder={'******'}
                                value={modalData.form.password}
                                type={!showPassword ? INPUT.PASSWORD : INPUT.TEXT}
                                item={'password'}
                                onChangeData={(payload => dispatch(onChangeValue(payload)))}
                                errors={modalData.errors?.password}
                                rightElementPassword={true}
                                showPassword={showPassword}
                                rightElementAction={() => setShowPassword(!showPassword)}
                            />

                            <InputField
                                title={'Notes'}
                                placeholder={'Example: Second step authentication'}
                                value={modalData.form.notes}
                                type={INPUT.TEXT}
                                item={'notes'}
                                onChangeData={(payload => dispatch(onChangeValue(payload)))}
                                errors={modalData.errors?.notes}
                            />
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                colorScheme='blue'
                                mr={3}
                                type={'submit'}
                                isLoading={modalData.form.loading}
                            >
                                Save
                            </Button>
                            <Button onClick={() => onModal(false)}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}
