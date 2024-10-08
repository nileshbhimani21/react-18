import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsersApi, usersApi } from './redux/userApi'
import DataTable from '../../components/DataTable'
import { XMarkIcon, PencilSquareIcon, PlusIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import { Spiner } from '../../components/Spiner'
import Card from '../../components/Card'
import UserModal from './UserModal'
import SortArrow from '../../utils/SortArrow'
import UserRoleModal from './UserRoleModal'

export default function Users() {
  const dispatch = useDispatch()
  const { users, isLoading } = useSelector(state => state.user)
  const { user } = useSelector(state => state.auth)
  const [userModal, setUserModal] = useState(false)
  const [userRoleModal, setUserRoleModal] = useState(false)
  const [editData, setEditData] = useState(null)
  const [filter, setFilter] = useState({
    limit: 10,
    skip: 0,
    desc: true,
    key: "_id",
    search: ''
  })

  const column = () => {
    return [
      {
        title: <span className="cursor-pointer">ID</span>,
        render: (rowData) => {
          return <span>{rowData.id}</span>;
        },
      },
      {
        title: <span className="cursor-pointer flex items-center" onClick={() => handleSort("firstName")}>Full Name {SortArrow(filter, "firstName")}</span>,
        render: (rowData) => {
          return <span>{rowData.firstName} {rowData.lastName}</span>;
        },
      },
      {
        title: <span className="cursor-pointer flex items-cente" onClick={() => handleSort("email")}>Email {SortArrow(filter, "email")}</span>,
        render: (rowData) => {
          return <span>{rowData.email}</span>;
        },
      },
      {
        title: <span className="cursor-pointer flex items-cente" onClick={() => handleSort("phone")}>Phone {SortArrow(filter, "phone")}</span>,
        render: (rowData) => {
          return <span>{rowData.phone}</span>;
        },
      },
      {
        title: <span className="cursor-pointer">Status</span>,
        render: (rowData) => {
          return <span className='capitalize'>{rowData.status ? "Active" : "Inactive"}</span>;
        },
      },
      {
        title: 'Action',
        render: (rowData) => {
          return <div className="flex items-center">{user && (user?.userType === "admin" || user?.userType === "user") && <button className='btn btn-primary p-1 mr-1' onClick={handleRole(rowData)}><UserPlusIcon className="h-[20px]" /></button>}{user && user?.roles?.indexOf("userAdd") > -1 && <button className='btn btn-primary p-1 mr-1' onClick={handleEdit(rowData)}><PencilSquareIcon className="h-[20px]" /></button>}{user && user?.roles?.indexOf("userDelete") > -1 && <button className='btn btn-danger p-1' onClick={handleDelete(rowData)}><XMarkIcon className="h-[20px]" /></button>}</div>
        },
      },
    ];
  };

  useEffect(() => {
    dispatch(usersApi(filter))
  }, [dispatch, filter])

  const handleEdit = (item) => () => {
    setEditData(item)
    setUserModal(true)
  }
  const handleRole = (item) => () => {
    setEditData(item)
    setUserRoleModal(true)
  }
  const handleDelete = (item) => () => {
    dispatch(deleteUsersApi(item?._id)).then((res) => {
      if (res?.type === "UPDATE_USER_SUCCESS") {
        dispatch(usersApi(filter))
      }
    })
  }
  const handleSort = (item) => {
    if (item === filter?.key) {
      if (filter?.desc === true) {
        setFilter({ ...filter, key: "_id", desc: true })
      } else {
        setFilter({ ...filter, key: item, desc: true })
      }
    } else {
      setFilter({ ...filter, key: item, desc: false })
    }
  }
  const handleSearch = (e) => {
    setFilter({ ...filter, search: e.target.value })
  }
  const onBatchChange = (e) => {
    const newOffset = (e - 1) * filter?.limit;
    setFilter({ ...filter, skip: newOffset });
  };

  return (
    <>
      <Card>
        {isLoading && <Spiner />}
        <div className="flex justify-between">
          {user && user?.roles?.indexOf("userAdd") > -1 ? <button className='btn-primary btn flex' onClick={() => setUserModal(true)}><PlusIcon className='w-6 h-6 me-2' /> Add User</button>:<div> </div>}
          <input type="search" placeholder="Search" name="search" value={filter.search} onChange={handleSearch} />
        </div>
        {userModal && <UserModal isOpen={userModal}
          closeModal={() => {
            setUserModal(false)
            setEditData(null)
          }
          }
          filter={filter} editData={editData} />}
        {userRoleModal && <UserRoleModal isOpen={userRoleModal}
          closeModal={() => {
            setUserRoleModal(false)
            setEditData(null)
          }
          }
          filter={filter} editData={editData} />}
        <DataTable
          cols={column()}
          data={users !== null && users.users.map((x, i) => { return { ...x, id: i + filter?.skip + 1 } })}
          total={users !== null && users.total}
          filter={filter}
          onBatchChange={onBatchChange}
        />
      </Card>
    </>
  )
}
