import React, { useState, useEffect } from "react";
import './style.css';
import { imageLogin } from '../../utils/picture';
import { messageLoginPage, info } from '../../utils/text';
import { Alert } from '../../components/Alert/Alert'
import CircularProgress from '@mui/material/CircularProgress';
import {
    useNavigate,
    NavLink

} from "react-router-dom";
import Box from '@mui/material/Box';
const userData = {
    username: "admin",
    password: "admin"
}
export default function LoginPage() {
    const [inputs, setInputs] = useState({});
    const [messageErr, setMessageErr] = useState("");
    const [savedInfo, setSavedInfo] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        setMessageErr('');
    }

    const checkDataUser = () => {
        return inputs.username == userData.username && inputs.password == userData.password;
    }

    //lưu thông tin
    const handeSaveInfo = () => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            console.log(`foundUser: ${foundUser}`);
            setInputs(foundUser);
        }
    }

    const handleSubmit = async (event) => {
        console.log('save info', savedInfo);
        event.preventDefault();
        setIsSubmit(true);
        await setTimeout(() => {
            if (checkDataUser()) {
                //handle success
                localStorage.setItem("access_token", "123456");
                if (savedInfo) {
                    localStorage.setItem('user', JSON.stringify(inputs));
                }
                Alert(messageLoginPage.signin, info.success, "success", messageLoginPage.confirm);
                navigate('/dashboard');
            } else {
                //handle failure
                setMessageErr(messageLoginPage.errorMessage);
            }
            setIsSubmit(false);
        }, 1000)
    }

    const myStyle = {
        backgroundImage: `url(${imageLogin.bg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const styleCardLogin = {
        width: '60rem',
        borderRadius: '5px',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
        backgroundImage: `url(${imageLogin.backgroundCardLogin})`,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    }

    useEffect(() => {
        handeSaveInfo();
    }, []);

    return <div style={myStyle}>
        <div className="container wrapper">
            <div class="bg-card" style={styleCardLogin}>
                <div className="card-left">
                    <img src={imageLogin.logoOM2M} alt="logo om2m"/>
                </div>
                <div className="card form">
                    <div className="logo-box">
                        <img id="logo" src={imageLogin.logo} alt="logo đông á" />
                    </div>
                    <br />
                    <div id="error" className={messageErr ? "showMessage" : ""}>
                        <p id="error_message" >{messageErr}</p>
                    </div>
                    <form className="form-login" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="username">{messageLoginPage.userName}</label>
                            <input type="text" className="form-control input" id="username" name="username" placeholder={messageLoginPage.userName} value={inputs.username || ""} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label for="password">{messageLoginPage.password}</label>
                            <input type="password" className="form-control input" id="password" name="password" placeholder={messageLoginPage.password} value={inputs.password || ""} onChange={handleChange} required />
                        </div>
                        <div className="action_remember_forgot">
                            <div className="saved-info">
                                <input type="checkbox" id="remember" value={savedInfo} onChange={(e) => { setSavedInfo(e.target.checked) }} />
                                <label for="remember" style={{ fontWeight: 400 }}> {messageLoginPage.saveInfo}</label>
                            </div>
                            <NavLink
                                to="/forgot-password"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >{messageLoginPage.forgotPassword}</NavLink>
                        </div>
                        <br />
                        <button id="submit" type="submit" className="btn btn-primary" disabled={isSubmit ? "disabled" : ""}><Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p style={{ paddingRight: '7px' }}>{isSubmit ? info.loading : messageLoginPage.signin}</p>{isSubmit ? <CircularProgress size={'4.5%'} color='inherit' /> : ""}</Box></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}