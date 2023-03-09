import React from "react";
import { useForm } from "react-hook-form";
import { Input, Select } from "./FormField";

export function Form() {
    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    const onSubmit = (formData) => {
        if (Object.keys(errors).length === 0) {
            alert(formData, 'formData')
            reset()
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="firstName" register={register} validation={{ required: { value: true, message: "Min Length required" }, minLength: { value: 10, message: "Min Length 10" } }} />
            {errors.firstName && <div className="text-sm text-red-500">{errors.firstName.message}</div>}
            <Input name="lastName" register={register} />
            <Select name="sex" options={["female", "male"]} register={register} />
            <button className='btn-primary btn'>Submit</button>
        </form>
    );
}


