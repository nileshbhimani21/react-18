import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUserApi } from '../Users/redux/userApi';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/FormField';
import { LogoIcon } from '../../components/Icons';
import Card from '../../components/Card'
import { emailRegex, passwordRegex, phoneRegex } from '../../utils/regex';

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors }, reset, watch } = useForm({
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
      delete formData.confirmPassword
      formData.userType = "user"
      dispatch(addUserApi(formData)).then((res) => {
        if (res?.type === "UPDATE_USER_SUCCESS") {
          reset()
          navigate("/")
        }
      })
    }
  }
  return (
    <div className='max-w-[600px] w-full'>
      <Card>
        <div className="text-center text-primary">
          <LogoIcon className="w-28 h-7 mx-auto mb-5" />
        </div>
        <h4 className='text-center mb-5'>Register</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className='mb-1'>
              <Input type="password" placeholder="Password" name="password" register={register} validation={{ required: true, pattern: passwordRegex }} />
              {errors.password && errors.password.type === "required" && <div className="text-sm text-red-500">Password is required</div>}
              {errors.password && errors.password.type === "pattern" && <div className="text-sm text-red-500">Password At least one digit, one lowercase character,one uppercase character, one special character, 8 characters in length, but no more than 32.</div>}
            </div>
            <div className='mb-1'>
              <Input type="password" placeholder="Confirm Password" name="confirmPassword" register={register} validation={{ required: true, validate: (value) => value === watch("password") || "Passwords do not match" }} />
              {errors.confirmPassword && errors.confirmPassword.type === "required" && <div className="text-sm text-red-500">Confirm Password is required</div>}
              {errors.confirmPassword && errors.confirmPassword.type === "validate" && <div className="text-sm text-red-500">Passwords do not match</div>}
            </div>
          </div>
          <button className='btn-primary btn w-full mt-5'>Sign Up</button>
        </form>
        <div className='flex justify-center items-center mt-5'>
        Already a member?
          <Link to="/" className='text-primary ms-2 text-sm'>Sign In</Link>
        </div>
      </Card>
    </div>
  )
}

