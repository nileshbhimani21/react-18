import React, { useState } from 'react'
import DropDown from '../../components/DropDown'
import Modal from '../../components/Modal'
import Switch from '../../components/Switch'
import Tab from '../../components/Tab'
import { Form } from '../../components/Form'
import Card from '../../components/Card'



export default function Ui() {
  // Switch
  const [enabled, setEnabled] = useState(false)

  // Modal
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  //Tab
  const categories = {
    Recent: 1,
    Popular: 2,
    Trending: 3,
  } 

  return (
    <>
      <Card>
        <h6>Switch</h6>
        <Switch checked={enabled} onChange={setEnabled} />
        <br /><br />
        <h6>DropDown</h6>
        <DropDown menus={[{ text: "Item 1", icon: "", onClick: () => { } }, { text: "Item 2", icon: "", onClick: () => { } }]} text="<span>Dropdown</span>" btnclassName="bg-black" />
        <br /><br />
        <h6>Modal</h6>
        <button type='button' onClick={openModal} className="btn btn-primary">Modal</button>
        <Modal isOpen={isOpen} closeModal={closeModal} title="Dialog Title">
          <div className="mt-2">
            <p>
              Your payment has been successfully submitted. We’ve sent
              you an email with all of the details of your order.
            </p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={closeModal}
            >
              Got it, thanks!
            </button>
          </div>
        </Modal>
      </Card>
      <Card>
      <h6>Tab</h6>
      <Tab categories={categories} />
      </Card>
      <Card>
      <h6>Form</h6>
      <Form />
      </Card>
      
    </>
  )
}
