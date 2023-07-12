import React, { useEffect } from 'react'
import Modal from '../../components/Modal'
import { useForm } from 'react-hook-form';
import { CheckBox } from '../../components/FormField';
import { updateUsersApi, usersApi } from './redux/userApi';
import { useDispatch, useSelector } from 'react-redux';

export default function UserRoleModal({ isOpen, closeModal, filter, editData }) {
    const dispatch = useDispatch()
    const { userRoles } = useSelector(state => state.user)
    const { handleSubmit, setValue, formState: { errors }, reset, watch } = useForm({
        defaultValues: {
            roles: [],
        }
    });
    const onSubmit = (formData) => {
        if (Object.keys(errors).length === 0) {
            if (editData !== null) {
                dispatch(updateUsersApi(formData, editData._id)).then((res) => {
                    if (res?.type === "UPDATE_USER_SUCCESS") {
                        reset()
                        closeModal()
                        dispatch(usersApi(filter))
                    }
                })
            }
        }
    }
    useEffect(() => {
        if (editData !== null) {
            reset({
                roles: editData?.roles || [],
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editData])

    return (
        <Modal isOpen={isOpen} closeModal={() => {
            closeModal()
            reset()
        }} title="User Roles" width="max-w-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 mt-5">
                    {userRoles.length > 0 && userRoles.map((item, i) => {
                        return <CheckBox checked={watch().roles?.indexOf(item?.value) > -1} key={i} value={item?.value} label={item?.label} onChange={async () => {
                            let index = watch().roles?.indexOf(item?.value);
                            if (index > -1) {
                                await setValue("roles", watch().roles.filter(x => x !== item?.value))
                            } else {
                                if((item?.value === "userAdd" || item?.value === "userDelete") && watch().roles?.indexOf("userList") === -1){
                                    await setValue("roles", [...watch().roles, item?.value, "userList"])
                                } else {
                                    await setValue("roles", [...watch().roles, item?.value])
                                }
                            }
                        }} />
                    })}
                </div>
                <div className="mt-4 flex items-center justify-end">
                    <button
                        type="button"
                        className="me-3 btn btn-primary-outline"
                        onClick={() => {
                            closeModal()
                            reset()
                        }}
                    >
                        cancel
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </div>
            </form>
        </Modal>
    )
}
