
// import './App.scss';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import About from './components/About';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="manage-user" element={<TableUsers />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login/>} />
          </Routes>

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
