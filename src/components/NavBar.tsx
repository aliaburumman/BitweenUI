import {NavLink} from "react-router-dom";
import React from "react";


const resolveClassName = ({isActive}: any) => {
    return isActive
        ? "px-3 py-1 md:p-6 block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-bold cursor-default shadow-b-4 shadow-teal-100 focus:outline-none"
        : "px-3 py-1 md:p-6 block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4 hover:text-white focus:outline-none";
}


const NavBar = () => {

    return (
        <nav
            className="flex flex-col bg-teal-500  w-full h-full shadow-l-lg">

            <div className="flex flex-col justify-center items-center  text-white pt-5">
                <span
                    className="font-semibold text-xl tracking-tight">I N F O L I N K</span>
            </div>

            {/*<div className="block lg:hidden">*/}
            {/*    <button*/}
            {/*        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">*/}
            {/*        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"*/}
            {/*             xmlns="http://www.w3.org/2000/svg"><title>Menu</title>*/}
            {/*            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*</div>*/}


            <div className="text-sm  flex flex-col">
                <NavLink to="/" className={resolveClassName}>Dashboard</NavLink>
                <NavLink to="/exchanges"
                         className={resolveClassName}>Exchanges</NavLink>
                <NavLink to="/subscriptions"
                         className={resolveClassName}>Subscriptions</NavLink>
                <NavLink to="/documents"
                         className={resolveClassName}>Documents</NavLink>
                <NavLink to="/partners"
                         className={resolveClassName}>Partners</NavLink>
                <NavLink to="/settings"
                         className={resolveClassName}>Settings</NavLink>

            </div>
        </nav>
    );
}

export default React.memo(NavBar)
