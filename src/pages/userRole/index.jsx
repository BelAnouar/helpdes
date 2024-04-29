import {useFormik} from "formik";

import Switch from '@mui/material/Switch';
import axiosClient from "../../apis/apiCient.js";


const UserRole = () => {


const formik=useFormik({
    initialValues:{
        role_name: "",dashboard_access:false
    },onSubmit: (values)=>{
        axiosClient.post("role",values).then(data=>{
            console.log(data)
        });
    }})
    return(<>

        <div className= "min-h-screen p-6 bg-white rounded shadow-lg">




                        <div className= "grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className= "text-gray-600">
                                <p className= "font-medium text-lg">User Role</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <form onSubmit={formik.handleSubmit} className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label htmlFor="role_name">Role Name</label>
                                        <input
                                            type="text"
                                            id="role_name"
                                            name="role_name"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            value={formik.values.role_name}
                                            onChange={formik.handleChange}
                                        />
                                    </div>  <div className="md:col-span-5">
                                        <label htmlFor="role_name">Access Dashboard</label>
                                    <Switch
                                        checked={formik.values.dashboard_access}
                                        onChange={(event) => {
                                            formik.setFieldValue("dashboard_access", event.target.checked);
                                        }}
                                        name="dashboard_access"
                                        inputProps={{ 'aria-label': 'controlled' }}
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

                        </div>





        </div>
    </>)

}



export default UserRole
