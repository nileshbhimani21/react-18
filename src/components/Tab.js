import React from 'react'
import { Tab as MyTab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Tab({categories}) {
  return (
    <MyTab.Group>
      <MyTab.List className="flex space-x-1 border-b-2 border-gray-400">
        {Object.keys(categories).map((category) => (
          <MyTab
            key={category}
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm font-medium leading-5 -mb-[2px]',
                'focus:outline-none ',
                selected
                  ? 'border-b-2 border-primary'
                  : 'border-b-2 border-transparent'
              )
            }
          >
            {category}
          </MyTab>
        ))}
      </MyTab.List>
      <MyTab.Panels className="mt-2">
        {Object.values(categories).map((posts, idx) => (
          <MyTab.Panel
            key={idx}
            className={classNames(
              'focus:outline-none'
            )}
          >
            Content {posts}
          </MyTab.Panel>
        ))}
      </MyTab.Panels>
    </MyTab.Group>
  )
}
