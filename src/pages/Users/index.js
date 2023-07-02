import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersApi } from './redux/userApi'
import DataTable from '../../components/DataTable'
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { Spiner } from '../../components/Spiner'
import Card from '../../components/Card'

export default function Users() {
  const dispatch = useDispatch()
  const { users, isLoading } = useSelector(state => state.user)
  const [filter, setFilter] = useState({
    limit: 1,
    skip: 0,
    desc: false,
    key: "_id",
    search: ''
  })

  const tableConstants = ({ handleEdit, handleDelete, handleSort }) => {
    return [
      {
        title: <span className="cursor-pointer" onClick={handleSort("id")}>ID</span>,
        render: (rowData) => {
          return <span>{rowData.id}</span>;
        },
      },
      {
        title: <span className="cursor-pointer" onClick={handleSort("title")}>Fullname</span>,
        render: (rowData) => {
          return <span>{rowData.firstName} {rowData.lastName}</span>;
        },
      },
      {
        title: <span className="cursor-pointer" onClick={handleSort("category")}>Email</span>,
        render: (rowData) => {
          return <span>{rowData.email}</span>;
        },
      },
      {
        title: <span className="cursor-pointer" onClick={handleSort("price")}>Phone</span>,
        render: (rowData) => {
          return <span>{rowData.phone}</span>;
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

  useEffect(() => {
    dispatch(usersApi(filter))
  }, [dispatch, filter])

  const handleEdit = (item) => () => {
    alert(JSON.stringify(item))
  }
  const handleDelete = (item) => () => {
    alert(JSON.stringify(item))
  }
  const handleSort = (item) => () => {
    setFilter({ ...filter, key: item })
  }
  const handleSearch = (e) => {
    setFilter({ ...filter, search: e.target.value })
  }
  const onBatchChange = (e) => {
    console.log(e,'eeeeeeeee')
    const newOffset = (e - 1) * filter?.limit;
    setFilter({ ...filter, skip: newOffset });
  };

  return (
    <>
    <Card>
      {isLoading && <Spiner />}
      <DataTable
        cols={tableConstants({ handleEdit, handleDelete, handleSort })}
        data={users !== null && users.users.map((x, i) => {return {...x, id: i+filter?.skip + 1 }})}
        total={users !== null && users.total}
        filter={filter}
        handleSearch={handleSearch}
        onBatchChange={onBatchChange}
      />
    </Card>
    </>
  )
}
