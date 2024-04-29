
import {Link, Outlet, useLocation} from 'react-router-dom'

import WidgetsIcon from '@mui/icons-material/Widgets';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import AllInboxIcon from '@mui/icons-material/AllInbox';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import Notification from "../components/Notification/index.jsx";
import SettingsIcon from '@mui/icons-material/Settings';
function DashboardeLayout() {

    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';



    const getPageName = () => {
        switch (location.pathname) {
            case '/dashboard':
                return { name: 'Dashboard', icon: <WidgetsIcon /> };
            case '/dashboard/tickets':
                return { name: 'Ticket', icon: <AllInboxIcon /> };
            case '/departement':
                return { name: 'Departements', icon: <MapsHomeWorkIcon /> };
            case '/users':
                return { name: 'Users', icon: <PersonIcon /> };
            case '/user-roles':
                return { name: 'Users roles', icon: <GroupIcon /> };
            case '/blogs':
                return { name: 'Blogs', icon: <GroupIcon /> };
            case '/teams':
                return { name: 'Teams', icon: <GroupIcon /> };
            default:
                return { name: 'Page not found', icon: '' };
        }
    };

    const { name, icon } = getPageName();


    return (<>

        <section className="text-gray-800 font-inter">
            <div className="fixed left-0 top-0 w-64 h-full bg-gray-100/5 p-4 z-50 sidebar-menu border shadow-xl transition-transform">
                <Link to="/" className="flex items-center pb-4 border-b border-b-gray-800">
                    <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover"/>
                    <span className="text-lg font-bold text-white ml-3">Logo</span>
                </Link>
                <ul className="mt-4">
                    <li className={`mb-1 group ${isActive('/dashboard')} `}>
                        <Link to="/dashboard" className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <WidgetsIcon />
                            <span className="text-sm px-2 font-medium">Dashboard</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/dashboard/tickets')}`}>
                        <Link to="/dashboard/tickets" className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <AllInboxIcon />
                            <span className="text-sm px-2 font-medium">Ticket</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/departement')}`}>
                        <Link to="/departement" className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <MapsHomeWorkIcon />
                            <span className="text-sm px-2 font-medium">Departements</span>
                            <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                        </Link>
                        <ul className={`pl-7 mt-2 hidden ${isActive('/departement')}`}>
                            <li className="mb-4">
                                <Link to="/manage-users" className="text-customGray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Manage Users</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`mb-1 group ${isActive('/users')}`}>
                        <Link to="/users" className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <PersonIcon />
                            <span className="text-sm px-2 font-medium">Users</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/user-roles')}`}>
                        <Link to="/user-roles" className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <GroupIcon />
                            <span className="text-sm px-2 font-medium">Users roles</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/blogs')}`}>
                        <Link to="/blogs" className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <GroupIcon />
                            <span className="text-sm px-2 font-medium">Blogs</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/teams')}`}>
                        <Link to="/teams" className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <GroupIcon />
                            <span className="text-sm px-2 font-medium">Teams</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/profile')}`}>
                        <Link to="/profile" className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <SettingsIcon />
                            <span className="text-sm px-2 font-medium">Profile</span>
                        </Link>
                    </li>
                </ul>


            </div>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
            <div
                className="py-2 px-6 bg-white flex justify-between items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
                <div className={"flex items-center gap-1"}>
                    <button type="button"
                            className="text-lg text-gray-600 border px-2 pb-1 rounded-lg  sidebar-toggle">
                        <KeyboardBackspaceIcon stroke={"currentColor"} viewBox="0 0 24 24"

                                               fontSize="small"/>
                    </button>

                    <div
                        className="flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap">

                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-2 overflow-hidden">
                                <div className="flex items-center gap-2.5 flex">
                                    <li className="flex items-center space-x-2" tabIndex="-1">
                                        <div className="flex flex-wrap items-center gap-2.5 flex">
                                            <div className="flex cursor-default items-center gap-2.5">
                                                <div className="flex h-5 w-5 items-center justify-center overflow-hidden">
                                                    {icon}
                                                </div>
                                                <div className="relative line-clamp-1 block max-w-[150px] overflow-hidden truncate">{name}</div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Notification/>
                </div>
            </div>
            <div className={"h-full w-full overflow-hidden"}>
                <div className={"relative h-full w-full overflow-x-hidden overflow-y-scroll"}>
                    <div
                        className={"space-y-7 p-7 bg-zinc-90 h-full w-full flex flex-col overflow-y-auto vertical-scrollbar scrollbar-lg"}>

                         <Outlet/>

                </div>
            </div>
        </div>
    </main>
    </section>
</>)
}

export default DashboardeLayout
