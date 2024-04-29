import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {useFormik} from "formik";
import {useMutation, useQuery} from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import {toast} from "react-toastify";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
};

const AddTicket=({open, handleClose})=>{
    const {data:teams,error,isLoading}=useQuery({queryKey:["teams"],queryFn: ()=> axiosClient.get("/teams").then(({data})=>data.data)})
    const { mutate: addTicket, isLoading: ticketLoading } = useMutation({
        mutationFn: async (formData) => await axiosClient.post(`/ticket`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }),
        onSuccess: (data) => {
            console.log(data);
        },
        onError: () => {
            toast.error("An error occurred while adding the ticket!");
        }
    });

    const formik = useFormik({
        initialValues: {
            image: null,
            subject: "",
            team: "",
            body: ""
        },
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append('subject', values.subject);
            formData.append('team', values.team);
            formData.append('body', values.body);
            formData.append('image', values.image);
            addTicket(formData);
        }
    });
    if(isLoading) return 'loading..';

    return(<>
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
                            <form onSubmit={formik.handleSubmit}>
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal" htmlFor="subject">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            onChange={formik.handleChange}
                                        />
                                    </div> <div className="md:col-span-5">
                                    <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal" htmlFor="team">Team</label>
                                    <select
                                        id="team"
                                        name="team"
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        onChange={formik.handleChange}
                                    >
                                        <option value="">Select Team</option>
                                        {
                                            teams.map(team=>{
                                                return(<>
                                                    <option value={team.id}>{team.name}</option>
                                            </>  )
                                            })
                                        }
                                    </select>
                                </div>
                                    <div className="md:col-span-5">
                                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal" htmlFor="body">Body</label>
                                        <textarea
                                            id="body"
                                            name="body"
                                            className="border mt-1 rounded px-4 w-full bg-gray-50"
                                            onChange={formik.handleChange}
                                            value={formik.values.body}
                                        ></textarea>
                                    </div>

                                    <div className="md:col-span-5">
                                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal" htmlFor="image">Image</label>
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            accept="image/*"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            onChange={(event) => {
                                               console.log(event.currentTarget.files[0])
                                                formik.setFieldValue("image", event.currentTarget.files[0]);

                                            }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-start w-full">
                                        <button
                                            type="submit"
                                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                                        >
                                            Submit
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
    </>)
}


export  default AddTicket
