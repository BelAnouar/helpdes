import AddTicket from "../../components/Ticketing/AddTicket.jsx";
import * as React from "react";
import {useQuery} from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import {Link} from "react-router-dom";
import dashboard from "../dashboard/index.jsx";

const Ticketing = () => {
    const {data,error,isLoading}=useQuery({queryKey:["ticket"],queryFn: ()=> axiosClient.get("/ticket").then(({data})=>data)})

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {

        setOpen(true)};
    const handleClose = () => {

        setOpen(false)
    };
    if(isLoading)return  "loading.."

    return (
        <div className="relative flex-1">
            <div>
                <div className="md:flex md:items-center md:justify-between py-4">
                    <div className="flex-1 min-w-0">
                        <h1 className="py-0.5 text-2xl font-semibold text-gray-900">Tickets</h1>
                    </div>
                    <div className="mt-4 flex md:mt-0 md:ml-4">
                        <button
                            className="bg-blue-500 py-2 px-5 text-white font-semibold shadow-sm rounded-md mr-4"
                            onClick={handleOpen}
                        >
                            Create ticket
                        </button>
                    </div>
                </div>
                <div className="w-full bg-white shadow-xl rounded-lg flex  custom-scrollbar p-4">
                <div className=" " >

                    <div className="bg-gray-100 mb-6">
                        <ul>
                            {data && data.map((ticket, index) => (
                             <Link to={`/dashboard/ticket/${ticket.id}`}>   <li key={index} className="flex items-center border-y hover:bg-gray-200 px-4">
                                    <input type="checkbox" className="focus:ring-0 border-2 border-gray-400"/>
                                    <div className="w-full flex items-center justify-between p-1 my-1 cursor-pointer">
                                        <div className="flex items-center">
                                            <span className="w-56 pr-2 truncate">{ticket.user.name}</span>
                                            <span className="w-56 truncate">{ticket.subject}</span>
                                            <span className="mx-1">-</span>
                                            <span className="w-72 text-gray-600 text-sm truncate">{ticket.ticket_replies[0].body}</span>
                                        </div>
                                        <div className="w-36 flex items-center justify-end">
                                            <div className="flex items-center space-x-2" >
                                                <span >
                                                    <p>{ticket.prioritie?.name || "not"}</p>
                                                </span>
                                                <span >
                                                    <p>{ticket.statue?.name || 'not'}</p>
                                                </span>

                                                <button title="Snooze">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 hover:text-gray-900 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <span className="text-sm text-gray-500">
                        {new Date(ticket.created_at).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                    </span>
                                        </div>
                                    </div>
                                </li></Link>
                            ))}
                        </ul>


                    </div>
                </div>
                </div>

                {open && <AddTicket  open={open} handleClose={handleClose}/>}
            </div>

        </div>
);
}


export default Ticketing
