import React from "react";
import DropDown from "../components/DropDown";
import { Bars3Icon, ArrowLeftOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../pages/Auth/redux/authApi";
import { useDispatch } from "react-redux";

const Header = ({ collapsed, setCollapsed }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (<>
        <header>
            <button
                className="btn-link mr-3"
                type="button"
                onClick={() => setCollapsed(!collapsed)}
            >
                <Bars3Icon className="h-6 w-6" />
            </button>
            <DropDown menus={[{ text: "Profile", icon: <UserIcon className="h-6 w-6 mr-2" />, onClick: () => navigate('/profile') }, { text: "Logout", icon: <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-2" />, onClick: () => { dispatch(logoutApi()) } }]} text="<span>Admin</span>" btnclassName="bg-black" />
        </header>
    </>)
}
export default Header;