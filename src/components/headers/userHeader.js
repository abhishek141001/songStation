import React from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/UserAuth";

function Userheader() {
    const user = useSelector((state) => state.userAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleClickSignout = ()=>{
        dispatch(logout());
        navigate("/login")
    }
    return (
        <div className="userheader">
            <img className="userImg" src="/img/user.png" width={"25 px"} />
            <div class="dropdown-content">
                <a >{user.username}</a>
                <a onClick={handleClickSignout}>Signout</a>
              
            </div>
        </div>
    )
}
export default Userheader;