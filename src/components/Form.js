import React from "react";
import { useForm } from "react-hook-form";

export function Form({ defaultValues, children, onSubmit }) {
    const { handleSubmit, register, formState: { errors }, reset } = useForm({ defaultValues });
    console.log(errors, 'errors')
    return (
        <form onSubmit={handleSubmit(() => {
            if (Object.keys(errors).length === 0) {
                onSubmit()
                reset()
            }
        })}>
            {Array.isArray(children)
                ? children.map((child) => {
                    return child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register,
                                key: child.props.name
                            }
                        })
                        : child;
                })
                : children}
        </form>
    );
}

export function Input({ register, name, validation, ...rest }) {
    return <input {...register(name, validation)} {...rest} className="w-full rounded-md px-4 py-3 border border-gray-400  focus:border-primary focus:outline-none" />;
}

export function Select({ register, options, name, validation, ...rest }) {
    return (
        <select {...register(name, validation)} {...rest} className="w-full rounded-md px-4 py-3 border border-gray-400  focus:border-primary focus:outline-none">
            {options.map((value, i) => (
                <option key={i} value={value}>{value}</option>
            ))}
        </select>
    );
}
