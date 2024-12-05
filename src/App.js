
// import './App.scss';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import { Bounce, ToastContainer, toast } from 'react-toastify';


function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Container>
          <TableUsers />

        </Container>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />


    </>
  );
}

export default App;
