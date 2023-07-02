import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import PerfectScrollbar from "react-perfect-scrollbar";
import { LogoIcon } from "../components/Icons";
import { Squares2X2Icon, UsersIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from "react-router-dom";

const perfectScrollbarOptions = {
    wheelSpeed: 2,
    wheelPropagation: false,
};

export default function SidebarMenu({ collapsed, setCollapsed }) {
    const location = useLocation();
    return (
        <React.Fragment>
            <Sidebar className="bg-white" toggled={collapsed} collapsed={collapsed} onBackdropClick={() => setCollapsed(false)} breakPoint="md" >
                <div className="NB_logo text-primary">
                    <LogoIcon className="w-28 h-7"/>
                </div>
                <PerfectScrollbar
                    options={perfectScrollbarOptions}
                    style={{ maxHeight: "calc(100vh - 70px)" }}
                >
                    <Menu>
                        <MenuItem className={location.pathname === "/" && "bg-primary text-white"} active={location.pathname === "/"} onClick={() => setCollapsed(false)} component={<Link to="/" />} icon={<Squares2X2Icon className="h-6 w-6 inline-flex mr-2" />}>Dashboard</MenuItem>
                        <MenuItem className={location.pathname === "/users" && "bg-primary text-white"} active={location.pathname === "/users"} onClick={() => setCollapsed(false)} component={<Link to="/users" />} icon={<UsersIcon className="h-6 w-6 inline-flex mr-2" />}>Users</MenuItem>
                        <MenuItem className={location.pathname === "/ui" && "bg-primary text-white"} active={location.pathname === "/ui"} onClick={() => setCollapsed(false)} component={<Link to="/ui" />} icon={<UsersIcon className="h-6 w-6 inline-flex mr-2" />}>Ui</MenuItem>
                    </Menu>
                </PerfectScrollbar>
            </Sidebar>
        </React.Fragment >
    );
};