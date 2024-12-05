import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createUser,updateUser } from './services/UserService';
import { toast } from 'react-toastify';

function ModalEdit(props) {
  const { show, handleClose, handleEditTable, user } = props;
  const [name, setName] = useState(user.first_name);
  const [job, setJob] = useState(user.last_name);


  useEffect(()=>{
    if(show){
      setName(user.first_name)
      setJob(user.last_name)
    }
  },[user])
  

  const handleUpdateUser = async (user) => {
    
    let req = await updateUser(user.id,name,job)
    
    if (req && req.updatedAt) {
      handleClose()
      setName("")
      setJob("")
      toast.success("Update user successed!")
      handleEditTable({
        id:user.id,
        first_name:name,
        last_name:job
      })
    }
    else {
      //error
      toast.error("Failed!")
    }
  }


  
  return (
    <>


      <Modal show={show} onHide={handleClose} handleEditTable={handleEditTable} user={user}>
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <form>
            <div className="form-group">
              <label >Name</label>
              <input type="text"
                className="form-control"
                value={name}
                onChange={(event) => { setName(event.target.value) }}
              />
            </div>
            <div className="form-group">
              <label >Job</label>
              <input type="text"
                className="form-control"
                value={job}
                onChange={(event) => { setJob(event.target.value) }}
              />
            </div>

          </form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdateUser(user)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;