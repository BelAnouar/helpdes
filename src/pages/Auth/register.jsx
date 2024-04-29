
import {useFormik} from "formik";
import { registerShema} from "../../utils/validation.js";

import {useDispatch, useSelector} from "react-redux";

import {registerUser} from "../../redux/actions/registerActions.js";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Register = () => {

   const navigate=useNavigate()
    const { loading, userInfo, error, success } =useSelector((state)=>state.userAuth)

    const dispatch = useDispatch()
    useEffect(() => {

        if (success) navigate('/login')


    }, [navigate, userInfo, success])


    const formik=useFormik({
        initialValues:{
            userName:"",
            email:'',
            password:"",

        },validationSchema:registerShema,onSubmit:async values => {

            console.log(values)
            dispatch(registerUser({...values,role:1}))

        }
    })


        return (
        <div className=" flex   p-5 items-center">
            <div className="md:block hidden w-1/3">
                <div className="relative z-[10] shadow-lg h-full overflow-hidden rounded-3xl">
                    <div className="  z-[3] flex h-full w-[90vh] min-w-[600px]">
                        <img
                            className=" aspect-square w-[90vh] min-w-[600px] rounded-2xl object-cover object-left-top"
                            src="/images/customer.webp"
                        />
                    </div>

                    <div className="absolute -left-[20%] top-[5%] z-[2] aspect-square w-[40vh] rounded-full bg-pink-500/15 blur-[80px]"></div>
                    <div className="absolute -bottom-[10%] -left-[20%] z-[2] aspect-square w-[30vh] rounded-full bg-purple-500/bg-pink-500/15 blur-[80px]"></div>
                    <div className="absolute -bottom-[10%] -right-[10%] z-[2] aspect-square w-[25vh] rounded-full bg-pink-500/15 blur-[80px]"></div>
                    <div className="absolute -bottom-[20%] -left-[20%] z-[4] aspect-square w-[30vh] rounded-full  bg-purple-500/bg-pink-500/15 blur-[80px]"></div>
                    <div className="absolute -bottom-[10%] -right-[10%] z-[4] aspect-square w-[25vh] rounded-full bg-pink-500/15 blur-[80px]"></div>
                    <div className="absolute -right-[10%] -top-[10%] z-[4] aspect-square w-[25vh] rounded-full  bg-purple-500/bg-pink-500/15 blur-[80px]"></div>
                </div>
            </div>{" "}
            <div className="md:w-1/2 px-8 mx-auto md:px-10">
                <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
                <h3 className="font-bold mb-2">Create a new account</h3>
                <p className="text-black mb-4">
                    Start your free 14-day trial and start collecting feedback.
                    Easy to collect user feedback &amp; feature requests.
                </p>
                <a href={"http://localhost/api/auth/google"} className="bg-white border py-2 w-full rounded-xl flex justify-center items-center text-[#002D74] hover:bg-gray-100 transition duration-300">

                    Login with Google
                </a>
                <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                    <hr className="border-gray-400" />
                    <p className="text-center text-sm">OR</p>
                    <hr className="border-gray-400" />
                </div>
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                    <input
                        className={`p-2 mt-8 rounded-xl border w-full ${formik.errors.userName && formik.touched.userName ? "border-red-500" : ""}`}
                        type="text"
                        name="userName"
                        placeholder="Username"
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                    />
                    {formik.errors.userName && formik.touched.userName && (
                        <p className="text-red-500">{formik.errors.userName}</p>
                    )}
                    <input
                        className={`p-2 rounded-xl border w-full ${formik.errors.email && formik.touched.email ? "border-red-500" : ""}`}
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p className="text-red-500">{formik.errors.email}</p>
                    )}
                    <div className="relative">
                        <input
                            className={`p-2 rounded-xl border w-full ${formik.errors.password && formik.touched.password ? "border-red-500" : ""}`}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />

                        {formik.errors.password && formik.touched.password && (
                            <p className={"text-red-500"}>{formik.errors.password}</p>
                        )}
                    </div>
                    <button  className="bg-[#0066CC] rounded-xl text-white py-3 hover:bg-blue-700 transition duration-300">
                    Register
                    </button>
                </form>
                <div className="mt-5 flex justify-end py-4 text-[#002D74]">

                    <Link to={"/login"} >
                         Login
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Register;
