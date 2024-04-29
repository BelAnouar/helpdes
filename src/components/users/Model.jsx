
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import {useFormik} from "formik";
import {toast} from "react-toastify";




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
};

export default function KeepMountedModal({id,open,handleClose}) {
    const queryClient=useQueryClient();






    const { data, error, isLoading } = useQuery({
        queryKey: ["userDataAndRoles", { id }],
        queryFn: async () => {
            const [userDataResponse, rolesResponse] = await Promise.all([
                axiosClient.get(`/user/${id}`).then(({ data }) => data.data),
                axiosClient.get("/role").then(({ data }) => data.roles)
            ]);
            return { userData: userDataResponse, roles: rolesResponse };
        }
    });

    const updateUserMutation = useMutation({
        mutationFn: async (values) => await axiosClient.put(`/user/${id}`, values),
        onSuccess: (data) => {
            console.log(data)
            toast.success("User updated!");
            queryClient.invalidateQueries(["data"]);
        },
        onError: () => {
            console.log("er")
            toast.error("An error occurred while updating the user!");
        }
    });
    const formik = useFormik({
        initialValues: {
            name:  "",
            email:  "",
            role: ""
        },
        onSubmit: (values) => {
            toast.success("User updated!");
            console.log("data")
            updateUserMutation.mutate(values);
        }
    });

    if (isLoading) return "Loading...";
    if (error) return `An error occurred: ${error.message}`;



    return (
        <>




            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div>
                            <div >

                                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Edit
                                    Details</h1>
                                <form onSubmit={formik.handleSubmit} >
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal" htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value={ formik.values.name || data.userData.name}
                                                onChange={formik.handleChange}
                                            />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal" htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value={formik.values.email || data.userData.email}
                                                onChange={formik.handleChange}
                                            />
                                        </div>



                                        <div className="md:col-span-5">
                                            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal" htmlFor="role">Role</label>

                                            <select name={"role"}  value={formik.values.role}
                                                    onChange={formik.handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            >
                                                {
                                                    data.roles.map((role) => (
                                                        <option key={role.id} value={role.id} selected={role.id === data.userData.user_role_id}>
                                                            {role.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>

                                        </div>

                                        <div className="flex items-center justify-start w-full">
                                            <button
                                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit
                                            </button>

                                        </div>
                                    </div>
                                </form>
                            </div>

                            <button
                                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                                onClick={handleClose} aria-label="close modal" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x"
                                     width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    );
}
