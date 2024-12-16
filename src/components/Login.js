import { useEffect, useState } from "react"
import { loginApi } from "./services/UserService";
import { toast } from "react-toastify";
import './Login.scss';
import { useNavigate } from "react-router-dom";




const Login = () => {
    const [emailLogin,setEmailLogin] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()


    useEffect(()=>{
        let token = localStorage.getItem("token")
        if(token){
            navigate("/")
        }
    },[])

    const handleLogin = async ()=>{
        if(!emailLogin || !password){
            toast.error("Email/ Password is requied!")
        }
       /*  else if(password.length < 6){
            toast.error("Password min 6 characters")
        } */
        else{
            setLoading(true)
            let res = await loginApi(emailLogin,password)
            
            if(res && res.token){
                 localStorage.setItem("token",res.token)
                 navigate("/")
            }
            else{
                if(res && res.status === 400){
                    toast.error(res.data.error)
                }
            }
            setLoading(false)
        }


    }

    return (
        <>
            <div className="container col-4 mt-5">
                <h3 className="text-center mb-4">Login</h3>
                <form>
                    <div  className="form-outline mb-4">
                        <label className="form-label">Email address</label>
                        <input type="email"  className="form-control"
                         value={emailLogin}
                         onChange={(event) => { setEmailLogin(event.target.value) }} />
                    </div>


                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form2Example2">Password</label>
                        <input type="password"  className="form-control"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                        />
                    </div>


                    <div className="row mb-4">
                        {/* <div className="col d-flex justify-content-center">

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <label className="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div> */}

                        {/* <div className="col">

                            <a href="#!">Forgot password?</a>
                        </div> */}
                    </div>

                    <div className="text-center">
                        <button type="button" data-mdb-button-init data-mdb-ripple-init 
                        className="btn btn-block btn-primary mb-4 btn-login"
                        disabled={emailLogin && password ? false : true}    
                        onClick={()=>{handleLogin()}}
                        >{loading && <i class="fas fa-sync fa-spin me-1"></i>}   Sign in</button>

                    </div>


                   {/*  <div className="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                        </button>
                    </div> */}
                </form>
            </div>

        </>
    )

}
export default Login;