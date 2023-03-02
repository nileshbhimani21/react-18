import React from "react";
import DropDown from "../components/DropDown";
import { MenuIcon } from "../components/Icons";

const Header = () => {
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
                <MenuIcon />
            </button>
            <DropDown/>
        </header>
    </>)
}
export default Header;