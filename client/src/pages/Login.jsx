import {Link, useNavigate} from "react-router-dom";
import {assets} from "../assets/assets.js";
import {useContext, useState} from "react";
import axios from "axios";
import {AppContext} from "../context/AppContext.jsx";
import {toast} from "react-toastify";

const Login = () => {
    const [isCreateAccount, setIsCreateAccount] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {backendURL, setIsLoggedIn, getUserData} = useContext(AppContext);
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        setLoading(true);
        try {
            if (isCreateAccount) {
                //register API
                const response = await axios.post(`${backendURL}/register`, {name, email, password});
                if (response.status === 201) {
                    const response1 = await axios.post(`${backendURL}/login`, {email, password});
                    if (response1.status === 200) {
                        setIsLoggedIn(true);
                        getUserData();
                        navigate("/email-verify");
                        toast.success("Please verify your email...");
                    }
                } else {
                    toast.error("Email already exists");
                }
            } else {
                const response = await axios.post(`${backendURL}/login`, {email, password});
                if (response.status === 200) {
                    setIsLoggedIn(true);
                    getUserData();
                    navigate("/");
                    toast.success("LoggedIn successfull.");
                } else {
                    toast.error("Email/Password incorrect");
                }
            }
        }catch(error) {
                if (error.response) {
                const backendError = error.response.data;
                if(backendError.status===500){
                    toast.error("Validation Failed: Password must be atleast 6 characters");
                    return;
                }
                // show backend message if available
                if (backendError.message) {
                    toast.error(backendError.message);
                } else {
                    toast.error(`Error: ${error.response.status}`);
                }
                } 
                else if (error.request) {
                toast.error("Server is down. Please try again later.");
                } 
                else {
                toast.error("Unexpected error occurred.");
              }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="position-relative min-vh-100 d-flex justify-content-center align-items-center"
            style={{background: "linear-gradient(90deg, #6a5af9, #8268f9)", border: "none"}}>

            <div style={{position: "absolute", top: "20px", left: "30px", display: "flex", alignItems: "center"}}>

                <Link to="/" style={{
                    display: "flex",
                    gap: 5,
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: "24px",
                    textDecoration: "none",
                }}>
                    <img src={assets.logo} alt="logo" height={32} width={32} />
                    <span className="fw-bold fs-4 text-light">Authify</span>
                </Link>

            </div>
            <div className="card p-4" style={{maxWidth: "400px", width: "100%"}}>
                <h2 className="text-center mb-4">
                    {isCreateAccount ? "Create Account" : "Login"}
                </h2>
                <form onSubmit={onSubmitHandler}>
                    {
                        isCreateAccount && (
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                        )
                    }
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Id</label>
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            placeholder="Enter email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="************"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <Link to="/reset-password" className="text-decoration-none">
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? "Loading..." : isCreateAccount ? "Sign Up" : "Login"}
                    </button>
                </form>

                <div className="text-center mt-3">
                    <p className="mb-0">
                        {isCreateAccount ?
                            (
                                <>
                                    Already have an account?{" "}
                                    <span
                                        onClick={() => setIsCreateAccount(false)}
                                        className="text-decoration-underline" style={{cursor: "pointer"}}>
                                    Login here
                                </span>
                                </>
                            ): (
                                <>
                                    Don&apos;t have an account?{" "}
                                    <span
                                        onClick={() => setIsCreateAccount(true)}
                                        className="text-decoration-underline" style={{cursor: "pointer"}}>
                                        Sign up
                                    </span>
                                </>
                            )
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;