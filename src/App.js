
// import './App.scss';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import ModalAdd from './components/ModalAdd';
import { useState } from 'react';



function App() {
  const [isShowModalAdd, setIsShowModalAdd] = useState(false)

  const handleClose = ()=>{
      setIsShowModalAdd(false)
  }
  return (
    <div className="App">
        <Header/>
        <Container>
          <div className='d-flex add-new my-3 justify-content-between'>
            <span><b>List User: </b></span>
            <button className='btn btn-primary' onClick={()=>{setIsShowModalAdd(true)}}>Add new</button>
          </div>
          <TableUsers/> 

        </Container>
      <ModalAdd show={isShowModalAdd} handleClose={handleClose}/>
    </div>
  );
}

export default App;
