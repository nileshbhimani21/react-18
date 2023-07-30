import React from 'react'
import { useForm } from 'react-hook-form';
import { updateProfileApi } from '../Auth/redux/authApi';
import { Input } from '../../components/FormField';
import Card from '../../components/Card';
import { emailRegex, phoneRegex } from '../../utils/regex';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { UserIcon } from '../../components/Icons';
import { useState } from 'react';

export default function Profile() {
  const dispatch = useDispatch()
  const [profilePic, setProfilePic] = useState(null)
  const { user } = useSelector(state => state.auth)
  const { handleSubmit, register, formState: { errors }, reset, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      profilePic: ''
    }
  });
  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      let body = new FormData()
      body.append("firstName", data?.firstName)
      body.append("lastName", data?.lastName)
      body.append("phone", data?.phone)
      body.append("email", data?.email)
      body.append("profilePic", data?.profilePic[0])
      dispatch(updateProfileApi(body, user._id))
    }
  }
  useEffect(() => {
    if (user !== null) {
      reset({
        firstName: user?.firstName,
        lastName: user?.lastName,
        phone: user?.phone,
        email: user?.email,
        profilePic: user?.profilePic || ""
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return (
    <div className='max-w-[600px] w-full'>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-1 mx-auto table'>
            <lable className="profilepPic">
              {profilePic !== null ? <img src={URL.createObjectURL(profilePic)} alt="Profile Pic" /> : watch().profilePic !== "" ? <img src={process.env.REACT_APP_IMAGE_URL + watch().profilePic.filename} alt="Profile Pic" /> : <UserIcon />}
              <Input name="profilePic" type="file" onChange={(e) => setProfilePic(e.target.files[0])} register={register} />
            </lable>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className='mb-1'>
              <Input name="firstName" placeholder="First Name" register={register} validation={{ required: true }} />
              {errors.firstName && errors.firstName.type === "required" && <div className="text-sm text-red-500">First Name is required</div>}
            </div>
            <div className='mb-1'>
              <Input name="lastName" placeholder="Last Name" register={register} validation={{ required: true }} />
              {errors.lastName && errors.lastName.type === "required" && <div className="text-sm text-red-500">Last Name is required</div>}
            </div>
            <div className='mb-1'>
              <Input name="phone" type="number" placeholder="Phone" register={register} validation={{ required: true, pattern: phoneRegex }} />
              {errors.phone && errors.phone.type === "required" && <div className="text-sm text-red-500">Phone Number is required</div>}
              {errors.phone && errors.phone.type === "pattern" && <div className="text-sm text-red-500">Phone Number is not valid</div>}
            </div>
            <div className='mb-1'>
              <Input name="email" placeholder="Email" register={register} validation={{ required: true, pattern: emailRegex }} />
              {errors.email && errors.email.type === "required" && <div className="text-sm text-red-500">Email is required</div>}
              {errors.email && errors.email.type === "pattern" && <div className="text-sm text-red-500">Email is not valid</div>}
            </div>
          </div>
          <button className='btn-primary btn w-full mt-5'>Save</button>
        </form>
      </Card>
    </div>
  )
}
