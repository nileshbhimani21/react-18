import React from "react";
import DropDown from "../components/DropDown";
import { Bars3Icon, Cog6ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const handleSidebar = () => {
        document.body.classList.toggle('NB_sidebarOpen');
    }
    return (<>
        <header>
            <button
                className="btn-link mr-3"
                type="button"
                onClick={handleSidebar}
            >
                <Bars3Icon className="h-6 w-6" />
            </button>
            <DropDown menus={[{ text: "Setting", icon: <Cog6ToothIcon className="h-6 w-6 mr-2" />, onClick: () => navigate('/setting') },{ text: "Logout", icon: <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-2" />, onClick: () => { } }]} text="<span>Admin</span>" btnclassName="bg-black"/>
        </header>
    </>)
}
export default Header;