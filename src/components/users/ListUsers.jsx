import Button from "@mui/material/Button";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline.js";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import {toast} from "react-toastify";


const ListUsers = ({data, handleOpen}) => {
    const queryClient=useQueryClient();

    const {mutate:deleteUser,isLoading:deleteLoading} = useMutation({
        mutationFn: async (id) => await axiosClient.delete(`/user/${id}`),
        onSuccess: () => {
            toast.success("User deleted!");
            queryClient.invalidateQueries(["data"]);
        },
        onError: () => {
            toast.error("An error occurred while deleting the user!");
        }
    });
    return (<>
        <div className="p-6 px-0 overflow-scroll">
            <table className="w-full mt-4 text-left table-auto min-w-max">
                <thead>
                <tr>
                    <th
                        className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                        <p
                            className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Member
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                 stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                    </th>
                    <th
                        className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                        <p
                            className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Function
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                 stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                    </th>
                    <th
                        className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                        <p
                            className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Status
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                 stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                    </th>
                    <th
                        className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                        <p
                            className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Employed
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                 stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                        </p>
                    </th>
                    <th
                        className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                        <p
                            className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        </p>
                    </th>
                </tr>
                </thead>
                <tbody>

                {data.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                                        alt="John Michael"
                                        className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"/>
                                    <div className="flex flex-col">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            {user.name}
                                        </p>
                                        <p
                                            className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">

                                <p
                                    className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                    Organization
                                </p>

                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="w-max">
                                    <div
                                        className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                                        <span className="">online</span>
                                    </div>
                                </div>
                            </td>

                            <td className="p-4 border-b border-blue-gray-50">

                                <Button
                                    className="relative h-10 max-h-[20px] w-10 max-w-[20px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    onClick={()=>handleOpen(user.id)}>   <span
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             aria-hidden="true"
                                             className="w-4 h-4">

                                      <ModeEditOutlineIcon/>
                                    </svg>
                                        </span></Button> <Button onClick={()=> {
                                deleteUser(user.id)
                            }}  isLoading={deleteLoading}
                                className="relative h-10 max-h-[20px] w-10 max-w-[20px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            >   <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
<DeleteForeverIcon/>
                                        </span></Button>

                            </td>
                        </tr>
                    );
                })}


                </tbody>
            </table>
        </div>
        <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                Page 1 of 10
            </p>
            <div className="flex gap-2">
                <button
                    className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Previous
                </button>
                <button
                    className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Next
                </button>
            </div>
        </div>
    </>)
}


export default ListUsers
