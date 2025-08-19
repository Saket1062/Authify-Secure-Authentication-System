import {assets} from "../assets/assets.js";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";

const Header = () => {
    const {userData} = useContext(AppContext);
    const navigate = useNavigate();

    const handleLoginSignUp = () => {
        navigate("/login");
    };

    const handleGoToDSASheet = () => {
        navigate("/product");
    };

    return (
        <div className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-3" style={{minHeight: "80vh"}}>
            <img src={assets.header} alt="header" width={120} className="mb-4" />

            {/* Conditional Content Based on userData */}
            {userData ? (
                <>
                    {/* Logged In Content */}
                    <h1 className="fw-bold display-4 mb-3" style={{color: "#6a5af9"}}>
                        Welcome, {userData.name}! <span role="img" aria-label="wave">👋</span>
                    </h1>
                    <h3 className="fw-semibold mb-3">DSA Practice Platform</h3>
                    <p className="text-muted fs-5 mb-4" style={{maxWidth: "600px", lineHeight: "1.6"}}>
                        Master Data Structures and Algorithms with our curated collection of 50 essential problems. 
                        Practice coding challenges from top companies like Google, Amazon, and Microsoft. 
                        Track your progress, improve your problem-solving skills, and ace your technical interviews!
                    </p>
                    <button 
                        className="btn btn-primary rounded-pill px-5 py-3 fs-5 fw-semibold"
                        onClick={handleGoToDSASheet}
                        style={{
                            backgroundColor: "#6a5af9",
                            borderColor: "#6a5af9",
                            boxShadow: "0 4px 15px rgba(106, 90, 249, 0.3)"
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#5a4ae9";
                            e.target.style.borderColor = "#5a4ae9";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = "#6a5af9";
                            e.target.style.borderColor = "#6a5af9";
                        }}
                    >
                        Start Practicing Now 🚀
                    </button>
                </>
            ) : (
                <>
                    {/* Not Logged In Content */}
                    <h2 className="fw-semibold mb-3">
                        Hey Developer <span role="img" aria-label="wave">👋</span>
                    </h2>
                    <h4 className="text-danger fw-bold mb-3">
                        You are not logged in
                    </h4>
                    <p className="text-muted fs-5 mb-4" style={{maxWidth: "500px"}}>
                        Please log in and have access to DSA sheet with 50 essential coding problems 
                        to improve your programming skills and ace technical interviews.
                    </p>
                    <button 
                        className="btn rounded-pill px-4 py-2 fs-6"
                        onClick={handleLoginSignUp}
                        style={{
                            borderColor: "#6a5af9",
                            color: "#6a5af9",
                            backgroundColor: "transparent",
                            border: "2px solid #6a5af9",
                            transition: "all 0.3s ease"
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#6a5af9";
                            e.target.style.color = "white";
                            e.target.style.transform = "translateY(-2px)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#6a5af9";
                            e.target.style.transform = "translateY(0px)";
                        }}
                    >
                        Login/SignUp
                    </button>
                </>
            )}
        </div>
    )
}

export default Header;
