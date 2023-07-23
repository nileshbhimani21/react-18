export function Input({ register, name, validation, ...rest }) {
    return <input {...register(name, validation)} {...rest} className="w-full rounded-md px-4 py-2 border border-gray-300  focus:border-primary focus:outline-none" />;
}

export function Select({ register, options, name, validation, ...rest }) {
    return (
        <select {...register(name, validation)} {...rest} className="w-full rounded-md px-4 py-3 border border-gray-300  focus:border-primary focus:outline-none">
            {options.map((value, i) => (
                <option key={i} value={value}>{value}</option>
            ))}
        </select>
    );
}

export function CheckBox({value, label, onChange, checked}) {
    return <div className="flex items-center pl-3 text-sm font-medium text-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
    <input type="checkbox" onChange={onChange} checked={checked} value={value} className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded " />
    <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
</div>
}