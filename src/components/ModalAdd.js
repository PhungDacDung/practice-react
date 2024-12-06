import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createUser } from './services/UserService';
import { toast } from 'react-toastify';

function ModalAdd(props) {
  const { show, handleClose, handleUpdateTable } = props
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSaveUser = async () => {

    let req = await createUser(name, job)

    if (req && req.id) {
      handleClose()
      setName("")
      setJob("")
      toast.success("Create user successed!")
      handleUpdateTable({email:"abc123@gmail.com",first_name:name, id:req.id, last_name:"Tony"})
    }
    else {
      //error
      toast.error("Failed!")
    }
  }


  
  return (
    <>
      <Modal show={show} onHide={handleClose} handleUpdateTable={handleUpdateTable} backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
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
          <Button variant="primary" onClick={() => handleSaveUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;