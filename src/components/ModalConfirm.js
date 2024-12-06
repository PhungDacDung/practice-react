import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from './services/UserService';
import { toast } from 'react-toastify';

function ModalConfirm(props) {
  const { show, handleClose,user } = props
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

    const handleConfirm = async ()=>{
        let req = await deleteUser(user.id)
        console.log(req);
        if(req && +req.statusCode === 204){
            handleClose()
            toast.success("Delete successed!")
        }
        else{
            toast.error("Delete Failed!")
        }
    }
    
    

  return (
    <>
      <Modal show={show} onHide={handleClose} user = {user} backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          Arr you sure to delete this user?
          <br/>
          <b>{user.first_name} {user.last_name}</b>
          <br/>
          <b>{user.email}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" className='btn btn-danger' onClick={() => handleConfirm()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm;