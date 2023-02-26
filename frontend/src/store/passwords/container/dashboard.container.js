import {  useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import Dashboard from "../../../pages/protected/Dashboard";
import { addNewPasswordRules } from '../../../utils/validation/rules/addNewPassword'
import { validateObject } from "../../../utils/validation/validation";
import { addNewPassword, deletePassword, fetchUserPasswords, setErrors, setValuesToModal, toggleDeleteModal, toggleModal, toggleSubmit, updatePassword } from "../actions/passwords.actions";

function DashboardContainer() {
    const dispatch = useDispatch();
    const toast = useToast();
    
    const handleAddNewPassword = (data) => {
        const rules = addNewPasswordRules;
        const errors = validateObject(data, rules);

        dispatch(toggleSubmit(true));

        if (Object.keys(errors).length === 0) {
            dispatch(addNewPassword(data))
                .then((data) => {
                    if (!data?.error) {
                        toast({
                            title: 'Password created',
                            status: 'success',
                            duration: 7000,
                            isClosable: true,
                            position: 'top-right',
                        });
                        dispatch(toggleModal(false));
                        dispatch(fetchUserPasswords());
                    }
                });
        } else {
            dispatch(setErrors(errors));
        }
    }

    const onDelete = (id) => {
        dispatch(deletePassword(id))
            .then((data) => {
                if (!data?.error) {
                    toast({
                        title: 'Password deleted',
                        status: 'success',
                        duration: 7000,
                        isClosable: true,
                        position: 'top-right',
                    });
                    dispatch(toggleDeleteModal(false));
                    dispatch(fetchUserPasswords());
                }
            });
    }

    const onModal = (data) => {
        dispatch(toggleModal(data));
    }

    const onDeleteModal = (modal, id) => {
        dispatch(toggleDeleteModal(modal, id));
    }

    const onEditModal = (data) => {
        dispatch(setValuesToModal(data));
    }

    const onUpdate = (id, data) => {
        dispatch(updatePassword({ id, item: data })).then((data) => {
            if (!data?.error) {
                toast({
                    title: 'Password updated',
                    status: 'success',
                    duration: 7000,
                    isClosable: true,
                    position: 'top-right',
                });
                dispatch(toggleModal(false));
                dispatch(fetchUserPasswords());
            }
        });
    }

    return (
        <Dashboard
            onSubmit={handleAddNewPassword}
            onDeleteModal={onDeleteModal}
            onModal={onModal}
            onDelete={onDelete}
            onEditModal={onEditModal}
            onUpdate={onUpdate}
        />
    )
}

export default DashboardContainer;
