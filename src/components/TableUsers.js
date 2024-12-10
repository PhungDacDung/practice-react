import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser} from "./services/UserService";
import ReactPaginate from "react-paginate";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import _, { debounce } from "lodash";
import ModalConfirm from "./ModalConfirm";
import "./TableUser.scss";




const TableUsers = () => {

  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [userEdit, setUserEdit] = useState({});
  const [userDelete, setUserDelete] = useState({});


  const [isShowModalAdd, setIsShowModalAdd] = useState(false)
  const [isShowModalEdit, setIsShowModalEdit] = useState(false)
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false)

  const[sortBy,setSortBy] = useState("asc")
  const[sortField,setSortField] = useState("id")


  const handleClose = () => {
    setIsShowModalAdd(false)
    setIsShowModalEdit(false)
    setIsShowModalConfirm(false)
  }

  useEffect(() => {
    getUsers(1)
  }, [])

  const getUsers = async (page) => {

    let res = await fetchAllUser(page);

    // check data
    if (res && res.data) {
      setListUsers(res.data)
      setTotalUsers(res.total)
      setTotalPages(res.total_pages)
    }
  }



  const handlePageClick = (event) => {
    getUsers(+event.selected + 1)
  }

  const handleUpdateTable = (newUser) => {
    setListUsers([newUser, ...listUsers])
  }


  const handleEditTable = (user) => {
    let listUserCopy = _.cloneDeep(listUsers)
    const indexUser = listUsers.findIndex(item => item.id === user.id)
    listUserCopy[indexUser].first_name = user.first_name
    listUserCopy[indexUser].last_name = user.last_name

    setListUsers(listUserCopy)
  }

  const handleDeleteTable = (user) => {
    let listUserNew = _.cloneDeep(listUsers)
    listUserNew = listUserNew.filter(item => item.id !== user.id)
    console.log(listUserNew);

    setListUsers(listUserNew)
  }



  const handleEdit = (user) => {
    setIsShowModalEdit(true)

    setUserEdit(user);

  }

  const handleDelete = async (user) => {
    setIsShowModalConfirm(true)
    setUserDelete(user)
    handleDeleteTable(user)
  }

  const handleSortBy = (fieldSort)=>{
    if(sortBy === "asc"){
      setSortBy("desc")
    }
    else{
      setSortBy("asc")
    }
    setSortField(fieldSort)
    console.log("check sort= ",sortBy,sortField);
    let listUserCopy = _.cloneDeep(listUsers)

    listUserCopy = _.orderBy(listUserCopy,[sortField],[sortBy]);
    setListUsers(listUserCopy)
  }

  const handleSearch = debounce((event)=>{
      let search = event.target.value;
      let listUserCopy = _.cloneDeep(listUsers)
      if(search){
        listUserCopy =listUserCopy.filter(item => item.email.includes(search));
       setListUsers(listUserCopy)

      }
      else{
        getUsers(1)
      }
  },500)


  return (
    <>
      <div className='d-flex add-new my-3 justify-content-between'>
        <span><b>List User: </b></span>
        <button className='btn btn-primary' onClick={() => { setIsShowModalAdd(true) }}>Add new</button>
      </div>

      <div className="my-2">
        <input type="text" className="" placeholder="Search" onChange={(event) =>{handleSearch(event)}} />
      </div>

      <ModalAdd show={isShowModalAdd} handleClose={handleClose} handleUpdateTable={handleUpdateTable} />

      <ModalEdit show={isShowModalEdit} handleClose={handleClose} handleEditTable={handleEditTable} user={userEdit} />

      <ModalConfirm show={isShowModalConfirm} handleClose={handleClose} handleDeleteTable={handleDeleteTable} user={userDelete} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID
              <i 
              className="fa-solid fa-sort ms-2 px-1 cursor-pointer"
              onClick={()=>{handleSortBy("id")}}
              ></i>
            </th>
            <th>Email</th>
            <th>
              First Name
              <i 
              className="fa-solid fa-sort ms-2 px-1 pe-auto"
              onClick={()=>{handleSortBy("first_name")}}
              ></i>
              </th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <button className="btn btn-warning mx-3" onClick={() => handleEdit(item)}>Edit</button>

                    <button className="btn btn-danger" onClick={() => handleDelete(item)}>Delete</button>
                  </td>
                </tr>
              )
            })}

        </tbody>
      </Table>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>


  )
}

export default TableUsers;