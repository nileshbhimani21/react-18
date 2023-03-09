import React, { useState, useEffect } from 'react'
import DataTable from '../../components/DataTable'
import DropDown from '../../components/DropDown'
import Modal from '../../components/Modal'
import Switch from '../../components/Switch'
import Tab from '../../components/Tab'
import { getData } from '../../utils/fetch'
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { Form } from '../../components/Form'
import Card from '../../components/Card'

const tableConstants = ({ handleEdit, handleDelete, handleSort }) => {
  return [
    {
      title: <span className="cursor-pointer" onClick={handleSort("id")}>ID</span>,
      render: (rowData) => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      title: 'Thumbnail',
      render: (rowData) => {
        return <img src={rowData.thumbnail} className="w-[50px] h-[50px]" alt="" />;
      },
    },
    {
      title: <span className="cursor-pointer" onClick={handleSort("title")}>Title</span>,
      render: (rowData) => {
        return <span>{rowData.title}</span>;
      },
    },
    {
      title: <span className="cursor-pointer" onClick={handleSort("category")}>Category</span>,
      render: (rowData) => {
        return <span>{rowData.category}</span>;
      },
    },
    {
      title: <span className="cursor-pointer" onClick={handleSort("price")}>Price</span>,
      render: (rowData) => {
        return <span>{rowData.price}</span>;
      },
    },
    {
      title: <span className="cursor-pointer" onClick={handleSort("stock")}>Stock</span>,
      render: (rowData) => {
        return <span>{rowData.stock}</span>;
      },
    },
    {
      title: 'Action',
      render: (rowData) => {
        return <div className="flex items-center"><button className='btn btn-primary p-1 mr-1' onClick={handleEdit(rowData)}><PencilSquareIcon className="h-[20px]" /></button><button className='btn btn-danger p-1' onClick={handleDelete(rowData)}><XMarkIcon className="h-[20px]" /></button></div>
      },
    },
  ];
};

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

  // Table data sort, search, pagination
  const [dataFilter, setDataFilter] = useState({
    limit: 10,
    skip: 0,
    searchText: '',
    sort: '',
  })
  // console.log(dataFilter, 'dataFilter')
  const [newData, setNewData] = useState({})
  useEffect(() => {
    if (dataFilter.searchText !== "") {
      (async () => {
        const searchData = await getData({ url: `https://dummyjson.com/products/search?q=${dataFilter.searchText}` })
        setNewData(searchData)
      })();
    } else {
      (async () => {
        const searchData = await getData({ url: `https://dummyjson.com/products?limit=${dataFilter.limit}&skip=${dataFilter.skip}` })
        setNewData(searchData)
      })();
    }
  }, [dataFilter]);
  const handleEdit = (item) => () => {
    alert(JSON.stringify(item))
  }
  const handleDelete = (item) => () => {
    alert(JSON.stringify(item))
  }
  const handleSort = (item) => () => {
    setDataFilter({ ...dataFilter, sort: item })
  }
  const handleSearch = (e) => {
    setDataFilter({ ...dataFilter, searchText: e.target.value })
  }
  const onBatchChange = (e) => {
    const newOffset = e.selected * dataFilter?.limit % newData?.total;
    // console.log(`User requested page number ${e.selected}, which is offset ${newOffset}`);
    setDataFilter({ ...dataFilter, skip: newOffset });
  };

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
      <h6>Table</h6>
      <DataTable
        cols={tableConstants({ handleEdit, handleDelete, handleSort })}
        data={newData?.products}
        total={newData?.total}
        dataFilter={dataFilter}
        handleSearch={handleSearch}
        onBatchChange={onBatchChange}
      />
    </>
  )
}
