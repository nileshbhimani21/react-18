import React, { useState, useEffect } from "react";
import { Navigation } from "react-minimal-side-navigation";
import { useLocation, useNavigate } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { LogoIcon } from "../components/Icons";
// import { DashboardICon, LogoICon, SettingICon, UserICon } from "../Icons";

const perfectScrollbarOptions = {
    wheelSpeed: 2,
    wheelPropagation: false,
};

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [matchs, setMatchs] = useState(window.matchMedia("(max-width: 991px)").matches)

    useEffect(() => {
        const handler = (e) => setMatchs(e.matches);
        window.matchMedia("(max-width: 991px)").addListener(handler);
    }, []);
    return (
        <React.Fragment>
            <div className="NB_sidebar">
                <div className="NB_logo text-primary">
                    <LogoIcon />
                </div>
                <PerfectScrollbar
                    options={perfectScrollbarOptions}
                    style={{ maxHeight: "calc(100vh - 70px)" }}
                >
                    <Navigation
                        activeItemId={location.pathname}
                        onSelect={({ itemId }) => {
                            navigate(itemId);
                            if (matchs) { document.body.classList.toggle('NB_sidebarOpen') }
                        }}
                        items={[
                            {
                                title: "Dashboard",
                                itemId: "/",
                                // elemBefore: () => <DashboardICon />
                            },
                            {
                                title: "Setting",
                                itemId: "/setting",
                                // elemBefore: () => <SettingICon />
                            },
                            // {
                            //     title: "About",
                            //     itemId: "/about",
                            //     // elemBefore: () => <UserICon />,
                            //     subNav: [
                            //         {
                            //             title: "Members",
                            //             itemId: "/about/members",
                            //         }
                            //     ]
                            // }
                        ]}
                    />
                </PerfectScrollbar>
            </div>
        </React.Fragment >
    );
};
export default Sidebar;