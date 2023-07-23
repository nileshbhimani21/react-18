import React from 'react'
import Card from '../../components/Card'
import { useForm } from 'react-hook-form';
import { Input } from '../../components/FormField';
import { emailRegex } from '../../utils/regex';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forgotPasswordApi } from './redux/authApi';
import { LogoIcon } from '../../components/Icons';

export default function ForgotPassword() {
  const dispatch = useDispatch()
  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  const onSubmit = (formData) => {
    if (Object.keys(errors).length === 0) {
      console.log(formData)
      dispatch(forgotPasswordApi(formData))
      reset()
    }
  }
  return (
    <div className='max-w-[400px] w-full'>
      <Card>
      <div className="text-center text-primary">
                    <LogoIcon className="w-28 h-7 mx-auto mb-5"/>
                </div>
        <h4 className='text-center mb-5'>Forgot password</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-5'>
            <Input name="email" placeholder="Email" register={register} validation={{ required: true, pattern: emailRegex }} />
            {errors.email && errors.email.type === "required" && <div className="text-sm text-red-500">Email is required</div>}
            {errors.email && errors.email.type === "pattern" && <div className="text-sm text-red-500">Email is not valid</div>}
          </div>
          
          <button className='btn-primary btn w-full mt-5'>Submit</button>
        </form>
        <div className='flex justify-center items-center mt-5'>          
          <Link to="/" className='text-primary text-sm'>Login</Link>
        </div>
      </Card>
    </div>
  )
}
