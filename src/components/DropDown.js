import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function DropDown({ text,menus, btnclassName }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button dangerouslySetInnerHTML={{ __html: text }} className={`inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none ${btnclassName}`} />
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="p-1 absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg  focus:outline-none">
          {menus.map((item, i) => {
            return <Menu.Item key={i}>
            {({ active }) => (
              <button
              onClick={item.onClick}
                className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                  } group flex w-full items-center px-2 py-2 rounded-md text-sm`}
              >
                {item.icon}
                {item.text}
              </button>
            )}
          </Menu.Item>
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


