import React from 'react'
import Card from '../../components/Card'
import { useForm } from 'react-hook-form';
import { Input } from '../../components/FormField';
import { passwordRegex } from '../../utils/regex';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPasswordApi } from './redux/authApi';
import { LogoIcon } from '../../components/Icons';

export default function ResetPassword() {
  const dispatch = useDispatch()
  const { token } = useParams()
  const { handleSubmit, register, formState: { errors }, reset, watch } = useForm();

  const onSubmit = (formData) => {
    if (Object.keys(errors).length === 0) {
      dispatch(resetPasswordApi(formData, token))
      reset()
    }
  }
  return (
    <div className='max-w-[400px] w-full'>
      <Card>
        <div className="text-center text-primary">
          <LogoIcon className="w-28 h-7 mx-auto mb-5" />
        </div>
        <h4 className='text-center mb-5'>Reset Password</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <div className='mb-1'>
              <Input type="password" placeholder="Password" name="password" register={register} validation={{ required: true, pattern: passwordRegex }} />
              {errors.password && errors.password.type === "required" && <div className="text-sm text-red-500">Password is required</div>}
              {errors.password && errors.password.type === "pattern" && <div className="text-sm text-red-500">Password At least one digit, one lowercase character,one uppercase character, one special character, 8 characters in length, but no more than 32.</div>}
            </div>
            <div className='mb-1'>
              <Input type="password" placeholder="Confirm Password" name="confirmPassword" register={register} validation={{ required: true, validate: (val) => watch('password') === val || "Confirm Password do not match" }} />
              {errors.confirmPassword && errors.confirmPassword.type === "required" && <div className="text-sm text-red-500">Confirm Password is required</div>}
              {errors.confirmPassword && errors.confirmPassword.type === "validate" && <div className="text-sm text-red-500">{errors.confirmPassword.message}</div>}
            </div>
          </div>
          <button className='btn-primary btn w-full mt-5'>Submit</button>
        </form>
        <div className='flex justify-center items-center mt-5'>
          <Link to="/" className='text-primary text-sm'>Sign In</Link>
        </div>
      </Card>
    </div>
  )
}
