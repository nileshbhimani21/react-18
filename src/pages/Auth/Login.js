import React from 'react'
import Card from '../../components/Card'
import { useForm } from 'react-hook-form';
import { Input } from '../../components/FormField';
import { emailRegex, passwordRegex } from '../../utils/regex';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginApi } from './redux/authApi';
import { LogoIcon } from '../../components/Icons';

export default function Login() {
  const dispatch = useDispatch()
  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  const onSubmit = (formData) => {
    if (Object.keys(errors).length === 0) {
      dispatch(loginApi(formData))
      reset()
    }
  }
  return (
    <div className='max-w-[400px] w-full'>
      <Card>
      <div className="text-center text-primary">
                    <LogoIcon className="w-28 h-7 mx-auto mb-5"/>
                </div>
        <h4 className='text-center mb-5'>Sign In</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-5'>
            <Input name="email" placeholder="Email" register={register} validation={{ required: true, pattern: emailRegex }} />
            {errors.email && errors.email.type === "required" && <div className="text-sm text-red-500">Email is required</div>}
            {errors.email && errors.email.type === "pattern" && <div className="text-sm text-red-500">Email is not valid</div>}
          </div>
          <div className='mb-5'>
            <Input type="password" placeholder="Password" name="password" register={register} validation={{ required: true, pattern: passwordRegex }} />
            <Link to="/forgot-password" className='text-primary text-sm float-right'>Forgot Password ?</Link>
            {errors.password && errors.password.type === "required" && <div className="text-sm text-red-500">Password is required</div>}
            {errors.password && errors.password.type === "pattern" && <div className="text-sm text-red-500">Password At least one digit, one lowercase character,one uppercase character, one special character, 8 characters in length, but no more than 32.</div>}
          </div>
          <button className='btn-primary btn w-full mt-5'>Sign In</button>
        </form>
        <div className='flex justify-center items-center mt-5'>
          Not a Member yet?
          <Link to="/register" className='text-primary ms-2 text-sm'>Sign up</Link>
        </div>
      </Card>
    </div>
  )
}
