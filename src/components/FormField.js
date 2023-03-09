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