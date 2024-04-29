import {useFormik} from "formik";
import axiosClient from "../../apis/apiCient.js";
import {useQuery} from "@tanstack/react-query";
import {Skeleton, Stack} from "@mui/material";


const AddUsers=()=>{
    const {data,error,isLoading}=useQuery({queryKey:["roles"],queryFn: ()=> axiosClient.get("/role").then(({data})=>data.roles)})
    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: "",
            role: ""
        },
        onSubmit: (values) => {

           axiosClient.post('/register',values).then(({data})=>{
               console.log(data)

           });

        }
    });

    const loading=()=>{
        return(    <Stack spacing={1}>

            <Skeleton variant="rectangular" className="min-h-screen p-6 rounded shadow-lg" />

        </Stack>)
    }
    if(isLoading) return loading();

    return (
        <>
            <div className="min-h-screen p-6 bg-white rounded shadow-lg">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="text-gray-600">
                        <p className="font-medium text-lg">Add User </p>
                        <p>Please fill out all the fields.</p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="lg:col-span-2">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                            <div className="md:col-span-5">
                                <label htmlFor="userName">Name</label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    value={formik.values.userName}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className="md:col-span-5">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className="md:col-span-5">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className="md:col-span-5">
                                <label htmlFor="role">Role</label>

                                <select name={"role"}  value={formik.values.role}
                                          onChange={formik.handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                >
                                    {data.map((roles)=>{
                                        return(<>
                                            <option key={roles.id} value={roles.id}>{roles.name} </option></>);
                                    })}
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
                </div>
            </div>
        </>
    );
}



export default AddUsers
