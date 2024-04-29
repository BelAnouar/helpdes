
import {useQuery} from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import {useFormik} from "formik";


const AddTeams=()=>{
    const {data:Departements,error,isLoading}=useQuery({queryKey:["departement"],queryFn: ()=> axiosClient.get("/departement").then(({data})=>data.data)})
    const formik=useFormik({
        initialValues:{
            name: "",
            departement:""
        },onSubmit: (values)=>{
            console.log(values)
            axiosClient.post("/teams",values)
        }})

    if(isLoading) return "Loading"
    console.log(Departements)
    return(<>

            <div className= "text-gray-600">
                <p className= "font-medium text-lg">Teams </p>
                <p>Please fill out all the fields.</p>
            </div>

            <form onSubmit={formik.handleSubmit} className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                        <label htmlFor="role_name">Team Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={formik.values.role_name}
                            onChange={formik.handleChange}
                        />

                    </div>  <div className="md:col-span-5">
                    <label htmlFor="Departement">Departement</label>
                    <select
                        onChange={formik.handleChange}
                        name="departement"  value={formik.values.departement}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    >
                        <option disabled>Choose department</option>
                        {Departements.map((item, index) => (
                            <option key={index} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>




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




        </>)
}


export default AddTeams
