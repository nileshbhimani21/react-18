import React, { useEffect } from 'react'
import Modal from '../../components/Modal'
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../../components/FormField';
import { emailRegex, passwordRegex, phoneRegex } from '../../utils/regex';
import { addUserApi, updateUsersApi, usersApi } from './redux/userApi';
import { useDispatch } from 'react-redux';
import Switch from '../../components/Switch';

export default function UserModal({ isOpen, closeModal, filter, editData }) {
    const dispatch = useDispatch()
    const { handleSubmit, register, formState: { errors }, reset, watch, control } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            status: true,
            password: "",
            confirmPassword: "",
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
            } else {
                delete formData.confirmPassword
                formData.userType = "user"
                dispatch(addUserApi(formData)).then((res) => {
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
                firstName: editData?.firstName,
                lastName: editData?.lastName,
                phone: editData?.phone,
                email: editData?.email,
                status: editData?.status,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editData])
    return (
        <Modal isOpen={isOpen} closeModal={() => {
            closeModal()
            reset()
        }} title="Add User" width="max-w-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    <div className='mb-5'>
                        <Input name="firstName" placeholder="First Name" register={register} validation={{ required: true }} />
                        {errors.firstName && errors.firstName.type === "required" && <div className="text-sm text-red-500">First Name is required</div>}
                    </div>
                    <div className='mb-5'>
                        <Input name="lastName" placeholder="Last Name" register={register} validation={{ required: true }} />
                        {errors.lastName && errors.lastName.type === "required" && <div className="text-sm text-red-500">Last Name is required</div>}
                    </div>
                    <div className='mb-5'>
                        <Input name="phone" type="number" placeholder="Phone" register={register} validation={{ required: true, pattern: phoneRegex }} />
                        {errors.phone && errors.phone.type === "required" && <div className="text-sm text-red-500">Phone Number is required</div>}
                        {errors.phone && errors.phone.type === "pattern" && <div className="text-sm text-red-500">Phone Number is not valid</div>}
                    </div>
                    <div className='mb-5'>
                        <Input name="email" placeholder="Email" register={register} validation={{ required: true, pattern: emailRegex }} />
                        {errors.email && errors.email.type === "required" && <div className="text-sm text-red-500">Email is required</div>}
                        {errors.email && errors.email.type === "pattern" && <div className="text-sm text-red-500">Email is not valid</div>}
                    </div>
                    {editData === null && <><div className='mb-5'>
                        <Input type="password" placeholder="Password" name="password" register={register} validation={{ required: true, pattern: passwordRegex }} />
                        {errors.password && errors.password.type === "required" && <div className="text-sm text-red-500">Password is required</div>}
                        {errors.password && errors.password.type === "pattern" && <div className="text-sm text-red-500">Password At least one digit, one lowercase character,one uppercase character, one special character, 8 characters in length, but no more than 32.</div>}
                    </div>
                        <div className='mb-5'>
                            <Input type="password" placeholder="Confirm Password" name="confirmPassword" register={register} validation={{ required: true, validate: (value) => value === watch("password") || "Passwords do not match" }} />
                            {errors.confirmPassword && errors.confirmPassword.type === "required" && <div className="text-sm text-red-500">Confirm Password is required</div>}
                            {errors.confirmPassword && errors.confirmPassword.type === "validate" && <div className="text-sm text-red-500">Passwords do not match</div>}
                        </div></>}
                        
                    <div className='mb-5 flex items-center'>
                        <label className='me-2'>Status: </label>
                        <Controller
                            control={control}
                            name="status"
                            render={({ field: { onChange, value } }) => (
                                <Switch checked={value} value={value} onChange={(e) => onChange(e)} />
                            )}
                        />
                    </div>
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
