import {useFormik} from "formik";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import {toast} from "react-toastify";
import React from "react";


const BlogDashboard = () => {

    const { data: Blogs, error, isLoading } = useQuery({
        queryKey: ["blog"],
        queryFn: () => axiosClient.get("/blog").then(({ data }) => data.data)
    });

    const queryClient = useQueryClient();

    const { mutate: addBlog, isLoading: addLoading } = useMutation({
        mutationFn: async (values) => await axiosClient.post(`/blog`, values),
        onSuccess: () => {
            toast.success("Blog added!");
            queryClient.invalidateQueries(["blog"]);
        },
        onError: () => {
            toast.error("An error occurred while adding the blog!");
        }
    });

    const { mutate: deleteBlog, isLoading: deleteLoading } = useMutation({
        mutationFn: async (id) => await axiosClient.delete(`/blog/${id}`),
        onSuccess: () => {
            toast.success("Blog deleted!");
            queryClient.invalidateQueries(["blog"]);
        },
        onError: () => {
            toast.error("An error occurred while deleting the blog!");
        }
    });

    const { mutate: editBlog, data: blogData } = useMutation({
        mutationFn: async (id) => await axiosClient.get(`/blog/${id}`),
        onSuccess: ({ data }) => {
            return data.data;
        },
        onError: () => {
            toast.error("An error occurred while fetching the blog data!");
        }
    });

    const { mutate: updateBlogMutation } = useMutation({
        mutationFn: async ({values, id}) => axiosClient.put(`/blog/${id}`,values)  ,
        onSuccess: () => {
            toast.success("Blog updated!");
            queryClient.invalidateQueries(["blog"]);
        },
        onError: () => {
            toast.error("An error occurred while updating the blog!");
        }
    });


    const formik = useFormik({
        initialValues: {
            image: "",
            title: "",
            tag: "",
            description: ""
        },
        onSubmit: (values) => {
            if (blogData) {
                let request = {
                    values: values,
                    id: blogData.data.data.id
                };

                updateBlogMutation(request);
            } else {
                addBlog(values);
            }
        }
    });

    if(isLoading) return  "loading"

    return (
        <>
            <section className='w-70 md:col-span-2 relative lg:h-[60vh] h-[15vh] m-3 p-7 border rounded-lg bg-white '>
                <form onSubmit={formik.handleSubmit} encType={"multipart/form-data"}>
                    <div className="grid lg:grid-cols-3 w-6/7 gap-5 ">
                        <div className="input-type">
                            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="image">
                                Image
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                className="border w-full px-4 py-3 focus:outline-none rounded-md"
                                placeholder="Image"
                                onChange={formik.handleChange}
                                value={ formik.values.image}
                            />
                        </div>
                        <div className="input-type">
                            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border w-full px-4 py-3 focus:outline-none rounded-md"
                                placeholder="Title"
                                onChange={formik.handleChange}
                                value={formik.values.title || blogData?.data.data.title }
                            />
                        </div>
                        <div className="input-type">
                            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="tag">
                                Tag
                            </label>
                            <input
                                type="text"
                                id="tag"
                                name="tag"
                                className="border w-full px-4 py-3 focus:outline-none rounded-md"
                                placeholder="Tag"
                                onChange={formik.handleChange}
                                value={blogData?.data.data.tag || formik.values.tag}
                            />
                        </div>
                        <div className="input-type col-span-3 ">
                            <label className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
                                   htmlFor="description">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className=" border w-full px-4 py-3 focus:outline-none rounded-md"
                                placeholder="Description"
                                onChange={formik.handleChange}
                                value={blogData?.data.data.description ||formik.values.description}
                            > </textarea>
                        </div>
                    </div>
                    <div className={" w-full"}>
                        {
                           blogData ? <button type="submit"
                                              className=" justify-center text-md w-2/6 py-2 mt-[2.5rem] bg-green-500 text-white border rounded-md hover:text-black hover:bg-gray-50 hover:border-green-500 ">
                               edit
                           </button> :
                               <button type="submit"
                                       className=" justify-center text-md w-2/6 py-2 mt-[2.5rem] bg-green-500 text-white border rounded-md hover:text-black hover:bg-gray-50 hover:border-green-500 ">
                                   Add
                               </button>
                        }

                    </div>
                </form>
            </section>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    mt-10  '>
                    {
                        Blogs.map(blog=>{
                            return(
                                <div key={blog.id} className='m-4 cursor-pointer rounded-2xl hover:shadow-sm relative'>

                                    <img src='/images/bmg.jpg' className='w-full shadow-sm rounded-2xl object-cover h-[200px]'/>
                                    <div className="absolute top-0 right-0 mt-2 mr-2">
                                        <button onClick={()=>editBlog(blog.id)}
                                            className="text-slate-800 hover:text-blue-600 text-sm bg-transparent hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
               stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
    </svg>
    </span>
                                            <span>Edit</span>
                                        </button>
                                        <button onClick={()=>deleteBlog(blog.id)}
                                            className="text-slate-800 hover:text-blue-600 text-sm bg-transparent hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
             stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
        </svg>
    </span>
                                            <span>Delete</span>
                                        </button>

                                    </div>

                                    <div className={"py-5 px-2"}>
                                        <a className='font-semibold  text-[#012635]  '>{blog.title}</a>
                                    </div>
                                    <span
                                        className='text-green-500 px-2 bg-green-500/10 rounded-full  py-1 uppercase  text-[13px] text-center'>{blog.tag}</span>
                                    <h3 className='line-clamp-3 px-2 text-gray-400 mt-3'>{blog.description}</h3>
                                    <div className='flex px-2 items-center mt-5'>
                                        <div className='ml-2 mb-2'>
                                            <h3 className='text-gray-500 text-[10px]'>24 Sept 2024</h3>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }


                </div>
            </div>
        </>
    );
}


export default BlogDashboard
