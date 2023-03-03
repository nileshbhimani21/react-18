import React from 'react'
import { Switch as MySwitch } from '@headlessui/react'

export default function Switch({ checked, onChange }) {
    return (
        <MySwitch
            checked={checked}
            onChange={onChange}
            className={`${checked ? 'bg-primary' : 'bg-secondary'}
          relative inline-flex h-[36px] w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span
                aria-hidden="true"
                className={`${checked ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[32px] w-[32px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </MySwitch>
    )
}
