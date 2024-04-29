import {useFormik} from "formik";
import axiosClient from "../../apis/apiCient.js";

import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-toastify";
import * as React from "react";
import KeepMountedModal from "../../components/Departement/Model.jsx";

const Departement = () => {
    const [open, setOpen] = React.useState(false);
    const [idUser, setIdUSer] = React.useState(null);
    const handleOpen = (id) => {
        setIdUSer(id)
        setOpen(true)};
    const handleClose = () => {
        setIdUSer(null)
        setOpen(false)
    };


    const queryClient=useQueryClient()
    const {data:Departements,error,isLoading}=useQuery({queryKey:["departement"],queryFn: ()=> axiosClient.get("/departement").then(({data})=>data.data)})
    const {mutate:deleteDepartement,isLoading:deleteLoading} = useMutation({
        mutationFn: async (id) => await axiosClient.delete(`/departement/${id}`),
        onSuccess: () => {
            toast.success("User deleted!");
            queryClient.invalidateQueries(["departement"]);
        },
        onError: () => {
            toast.error("An error occurred while deleting the user!");
        }
    });    const {mutate:addDepartement,isLoading:addLoading} = useMutation({
        mutationFn: async (values) => await axiosClient.post(`/departement`,values),
        onSuccess: () => {
            toast.success("User deleted!");
            queryClient.invalidateQueries(["departement"]);
        },
        onError: () => {
            toast.error("An error occurred while deleting the user!");
        }
    });
    const formik=useFormik({
        initialValues:{
            name: "",
        },onSubmit: (values)=>{

             addDepartement(values);
        }})


    if(isLoading) return  "loading"

    return(<>

        <div className= "min-h-screen p-6 bg-white rounded shadow-lg">




            <div className= "grid gap-4 gap-y-4 text-sm grid-cols-1 lg:grid-cols-3">
                <div className= "text-gray-600">
                    <p className= "font-medium text-lg">Departement </p>
                    <p>Please fill out all the fields.</p>
                </div>

                <form onSubmit={formik.handleSubmit} className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                            <label htmlFor="role_name">Departement Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formik.values.role_name}
                                onChange={formik.handleChange}
                            />

                    </div>



                        <div className="md:col-span-5 text-right">
                            <div className="inline-flex items-end">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

             <div className={""}>
                 <p className={"font-medium text-md"}>List Of Departements</p>
             </div>
                <div className=" lg:col-span-2  ">
                    <div className="">
                        <table className="min-w-full bg-white shadow-md rounded-xl">
                            <thead>
                            <tr className="bg-blue-gray-100 text-gray-700">
                                <th className="py-3 px-4 text-left">id Departement</th>
                                <th className="py-3 px-4 text-left">Name</th>

                                <th className="py-3 px-4 text-left">Action</th>
                            </tr>
                            </thead>
                            <tbody className="text-blue-gray-900">
                            {
                                Departements.map((depatement)=>{
                                    return(
                                        <tr key={depatement.id} className="border-b border-blue-gray-200">
                                        <td className="py-3 px-4">{depatement.id}</td>
                                        <td className="py-3 px-4">{depatement.name}</td>

                                        <td className="py-3 flex gap-x-3 px-4">
                                            <button  onClick={()=>handleOpen(depatement.id)} className="">Edit</button>
                                            <button onClick={()=> deleteDepartement(depatement.id)}  className="">delete</button>
                                        </td>
                                    </tr>)
                                })
                            }




                            </tbody>
                        </table>

                    </div>
                </div>

            </div>





        </div>
        {idUser &&<KeepMountedModal id={idUser}   open={open} handleClose={handleClose} />  }

    </>)

}



export default Departement
