import {Navigate, Outlet, useNavigate} from "react-router-dom";

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUserInfo} from "../redux/features/userSlice.js";


const UserProfileLayout=()=>{
    const userInfo = useSelector(selectUserInfo);
        const [showDropdown, setShowDropdown] = useState(true);
const dispatch=useDispatch()
        const handleLogout = () => {
            console.log('kk')
           dispatch(logout())
        };


        const navigate=useNavigate()
        const NavigateTOProfile=()=>{
           navigate('/user/profile')
        }

        const NavigateTOTicket=()=>{


            navigate('/user/ticket')
        }


    console.log(userInfo)
    return(
        <>
            <div className="antialiased" >
                <div className="h-14 flex items-center justify-between w-screen shadow-fb px-4 py-8">
                    <div className="flex">
                        <svg height="105.93849564248677" viewBox="0 0 369.66666666666663 104.09869897883911"
                             className="w-40 ">
                            <defs id="SvgjsDefs1684 "></defs>
                            <g id="SvgjsG1685"
                               transform="matrix(1.487503886948252,0,0,1.487503886948252,-4.835320358302862,14.476559645079067)"
                               fill="#00adb5"><title xmlns="http://www.w3.org/2000/svg">Call center</title>
                                <path xmlns="http://www.w3.org/2000/svg"
                                      d="M42,49l-12.6-6.84-.42.16-.22.1a8.65,8.65,0,0,0-3.2,2.77,29.11,29.11,0,0,1-8-9.28L17.1,35c-.14-.28-.29-.57-.42-.87a29.08,29.08,0,0,1-2.77-11.59A8.66,8.66,0,0,0,18,21.62a1.32,1.32,0,0,0,.2-.12l.4-.25L20.49,7.1l-.33-.35A9.66,9.66,0,0,0,18.1,5.07a9,9,0,0,0-8.75-.42A8.84,8.84,0,0,0,5,9.68l0,.1-.11.33c0,.14-.07.26-.09.34A40,40,0,0,0,7.69,39.79a40.12,40.12,0,0,0,22,19.7c.52.19,1,.37,1.54.52l.11,0a9.24,9.24,0,0,0,2.09.24,8.62,8.62,0,0,0,3.93-.94,8.93,8.93,0,0,0,4.84-7.43,9.41,9.41,0,0,0-.14-2.49ZM18.38,7.79,16.73,20a6.73,6.73,0,0,1-1.7.48l2-13.69A7.27,7.27,0,0,1,18.38,7.79ZM36.46,57.56a6.75,6.75,0,0,1-4.6.56c-.5-.16-1-.33-1.48-.51A38.15,38.15,0,0,1,9.47,38.89,38.06,38.06,0,0,1,6.7,11l.07-.24c0-.11.06-.22.13-.42a6.77,6.77,0,0,1,6.41-4.59A7,7,0,0,1,15.18,6L13,20.49l-1.1-.15v1.13a30.86,30.86,0,0,0,3,13.52c.15.31.3.63.46.94s.32.62.49.91a31.38,31.38,0,0,0,9.44,10.58l.93.65.53-1a.05.05,0,0,0,0,0L39.56,54.3A6.77,6.77,0,0,1,36.46,57.56Zm3.75-5.79c0,.19-.05.37-.08.55L27.94,45.41a6.32,6.32,0,0,1,1.35-1.06l10.88,5.91A8.45,8.45,0,0,1,40.21,51.77Z"></path>
                                <polygon xmlns="http://www.w3.org/2000/svg"
                                         points="39.86 21.23 41.23 21.23 41.23 29.22 39.86 29.22 39.86 32.24 45.58 32.24 45.58 29.22 44.21 29.22 44.21 21.23 45.58 21.23 45.58 18.2 39.86 18.2 39.86 21.23"></polygon>
                                <path xmlns="http://www.w3.org/2000/svg"
                                      d="M42.72,16.4a2.11,2.11,0,1,0-2.12-2.11A2.1,2.1,0,0,0,42.72,16.4Z"></path>
                                <path xmlns="http://www.w3.org/2000/svg"
                                      d="M42.63,6.43A16.25,16.25,0,0,0,28.18,30.09l-3.09,7.57,10.84-.2a16,16,0,0,0,6.7,1.44,16.24,16.24,0,1,0,0-32.47Zm0,30.47a14,14,0,0,1-6.06-1.35l-.22-.1-8.26.16L30.39,30l-.23-.42A14.24,14.24,0,1,1,42.63,36.9Z"></path>
                            </g>
                            <g id="SvgjsG1686"
                               transform="matrix(3.1116298268682296,0,0,3.1116298268682296,101.07078949250429,12.574874750026783)"
                               fill="#595959">
                                <path
                                    d="M6.62 20.12 c-0.46 0 -0.94 -0.06 -1.44 -0.16 c-1.48 -0.3 -2.92 -1.02 -4.18 -2.12 l-0.38 -0.34 l1.76 -2 l0.38 0.34 c0.92 0.8 1.94 1.34 2.94 1.54 l0.02 0 c0.3 0.06 0.6 0.1 0.9 0.1 c0.5 0 0.96 -0.1 1.34 -0.28 c0.48 -0.2 1.04 -0.64 1.04 -1.46 c0 -0.44 -0.22 -0.78 -0.68 -1.06 c-0.56 -0.34 -1.32 -0.52 -1.86 -0.62 c-0.24 -0.04 -2.28 -0.46 -3.22 -0.98 c-0.62 -0.38 -1.1 -0.86 -1.44 -1.42 c-0.34 -0.58 -0.5 -1.22 -0.5 -1.92 c0 -0.76 0.24 -1.52 0.7 -2.22 c0.44 -0.58 1.04 -1.06 1.76 -1.4 s1.52 -0.52 2.38 -0.52 c0.34 0 0.7 0.04 1.06 0.08 c1.32 0.24 2.62 0.84 3.76 1.8 l0.38 0.32 l-1.7 2.06 l-0.38 -0.32 c-1.3 -1.06 -2.42 -1.3 -3.14 -1.3 c-0.46 0 -0.88 0.1 -1.24 0.26 c-0.56 0.26 -0.92 0.74 -0.92 1.22 c0 0.44 0.16 0.72 0.54 0.98 s0.96 0.46 1.88 0.66 c0.12 0.02 0.28 0.06 0.44 0.1 c0.84 0.16 1.96 0.4 2.74 0.86 c0.68 0.36 1.2 0.86 1.56 1.44 s0.54 1.26 0.54 1.98 c0 0.9 -0.24 1.7 -0.72 2.38 c-0.42 0.58 -1.04 1.08 -1.86 1.48 c-0.7 0.36 -1.48 0.52 -2.46 0.52 z M17.98 20.22 c-1.16 0 -2.24 -0.42 -3.02 -1.2 c-0.82 -0.78 -1.26 -1.84 -1.26 -2.98 l0 -5.2 l2.52 0 l0 5.2 c0 0.94 0.78 1.7 1.76 1.7 s1.78 -0.76 1.78 -1.7 l0 -5.2 l2.52 0 l0 5.2 c0 1.12 -0.46 2.18 -1.28 2.98 c-0.8 0.78 -1.86 1.2 -3.02 1.2 z M29.26 10.66 c1.26 0 2.46 0.48 3.38 1.38 c0.9 0.92 1.4 2.12 1.4 3.38 s-0.5 2.46 -1.4 3.38 c-0.9 0.9 -2.1 1.38 -3.38 1.38 c-0.84 0 -1.6 -0.3 -2.26 -0.9 l-0.1 -0.08 l0 6.12 l-2.42 0 l0 -14.48 l2.42 0 l0 0.72 l0.1 -0.1 c0.72 -0.7 1.54 -0.8 2.26 -0.8 z M29.26 17.84 c1.28 0 2.36 -1.12 2.36 -2.42 c0 -1.32 -1.08 -2.42 -2.36 -2.42 s-2.36 1.1 -2.36 2.42 c0 1.3 1.08 2.42 2.36 2.42 z M40.42 10.66 c1.26 0 2.46 0.48 3.38 1.38 c0.9 0.92 1.4 2.12 1.4 3.38 s-0.5 2.46 -1.4 3.38 c-0.9 0.9 -2.1 1.38 -3.38 1.38 c-0.84 0 -1.6 -0.3 -2.26 -0.9 l-0.1 -0.08 l0 6.12 l-2.42 0 l0 -14.48 l2.42 0 l0 0.72 l0.1 -0.1 c0.72 -0.7 1.54 -0.8 2.26 -0.8 z M40.42 17.84 c1.28 0 2.36 -1.12 2.36 -2.42 c0 -1.32 -1.08 -2.42 -2.36 -2.42 s-2.36 1.1 -2.36 2.42 c0 1.3 1.08 2.42 2.36 2.42 z M51.26 20.22 c-1.24 0 -2.46 -0.5 -3.4 -1.4 c-0.9 -0.94 -1.4 -2.16 -1.4 -3.4 c0 -1.26 0.5 -2.48 1.4 -3.4 c0.92 -0.88 2.12 -1.38 3.4 -1.38 c1.32 0 2.52 0.5 3.38 1.38 c0.92 0.92 1.42 2.12 1.42 3.4 s-0.5 2.48 -1.42 3.4 c-0.9 0.9 -2.1 1.4 -3.38 1.4 z M51.26 12.92 c-1.34 0 -2.44 1.12 -2.44 2.5 s1.1 2.5 2.44 2.5 c1.36 0 2.46 -1.12 2.46 -2.5 s-1.1 -2.5 -2.46 -2.5 z M60.4 20 l-2.52 0 l0 -9.16 l2.52 0 l0 0.74 c0.72 -0.72 1.8 -0.96 2.52 -0.96 l0.6 0 l-0.6 2.5 l-0.38 0 c-1.18 0 -2.14 0.92 -2.14 2.02 l0 4.86 z M71.58 20 l-2.4 0 c-0.88 0 -1.7 -0.34 -2.3 -0.94 c-0.62 -0.62 -0.94 -1.42 -0.94 -2.3 l0 -3.8 l-1.28 0 l0 -2.06 l1.28 0 l0 -3.6 l2.38 0 l0 3.6 l2.66 0 l0 2.06 l-2.66 0 l0 3.76 c0 0.5 0.44 0.96 0.88 0.96 l1.74 0 z M86.32 20.02 l-3.26 0 l-3.7 -5.18 l-3.72 5.18 l-3.26 0 l5.34 -7.46 l-4.86 -6.78 l3.28 0 l3.22 4.48 l3.22 -4.48 l3.26 0 l-4.86 6.78 z"></path>
                            </g>
                        </svg>

                    </div>

                    <div className="flex space-x-24 items-center">
                        <div className="h-10 w-64 ml-2 bg-gray-200 flex items-center rounded-full  p-3">
                            <SearchIcon />
                            <input
                                className="text-fGrey ml-2 bg-inherit  focus:outline-none"
                                placeholder="Search "
                            />
                        </div>


                    </div>

                    <div
                        id="dropDown"
                        className="flex z-10 space-x-2 hover:bg-gray-100 p-2 rounded-full relative"
                        onClick={() => setShowDropdown(true)}

                    >  <button className="h-9 p-0.5 flex items-center rounded-full focus:outline-none">
                            <img
                                src="https://picsum.photos/id/1005/300"
                                className="rounded-full border w-9 border-fButton"
                                alt="profile"
                            />
                            <div className="text-fBlack font-medium ml-2 pr-3">
                                {userInfo.name}
                            </div>
                        </button>


                        <div className="w-10 bg-gray-100 flex items-center justify-center relative rounded-full">
                            <ArrowCircleDownIcon  />
                        </div>



                        {showDropdown && (
                            <div className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md">
                                <button
                                    className="cursor-pointer z-20 w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-200"
                                    onClick={handleLogout}
                                >
                                  <LogoutIcon color={"error"} />  Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>



            <div className=" shadow">
                <div className="relative h-96 rounded-b flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1516767784670-cfc730ed0f87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="object-cover w-full h-full rounded-b"
                        alt="cover"
                    />
                    <div className="absolute -bottom-6">
                        <img
                            src="https://picsum.photos/id/1005/1000"
                            className="object-cover border-4 border-white w-40 h-40 rounded-full"
                            alt="cover"
                        />
                    </div>
                </div>
                <div className="text-center mt-6 text-3xl font-bold text-fBlack">
                    {userInfo.name}
                </div>
                <div className="border border-fGrey mt-6 border-opacity-10" />
                <div className="flex justify-between px-8">
                    <div className="flex items-center">
                        <div onClick={NavigateTOProfile} className="px-4 cursor-pointer py-5 text-fBlue border-b-4 border-fBlue">
                           Profile
                        </div>

                        <div onClick={NavigateTOTicket} className="px-4 cursor-pointer py-5 text-fGrey">Mes Tickets</div>

                    </div>

                </div>
            </div>

                <Outlet  />
        </>
    )
}


export default UserProfileLayout
