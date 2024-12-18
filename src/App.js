
// import './App.scss';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { UserContext } from './components/context/UserContext';
import AppRoutes from './components/routes/AppRoutes';


function App() {

  const { user, login } = useContext(UserContext);

  console.log("check user", user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      login(localStorage.getItem("email"), localStorage.getItem("token"))
    }
  }, [])

  return (
    <>
      <div className="App">
        <Header />
        <Container>
          <AppRoutes />
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
