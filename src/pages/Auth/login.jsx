
import {useFormik} from "formik";
import {loginShema} from "../../utils/validation.js";
import {useDispatch, useSelector} from "react-redux";
import {userLogin} from "../../redux/actions/loginActions.js";
import {useEffect} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {fetchUserInfo, selectUserInfo} from "../../redux/features/userSlice.js";

const Login = () => {


    const userInfo = useSelector(selectUserInfo);
    const dispatch = useDispatch()
    const navigate=useNavigate();
    useEffect(() => {
        if (!userInfo) {
            dispatch(fetchUserInfo());
        }else if (userInfo.user_role_id == 2) {
            navigate('/user/profile')
        }else {
            navigate('/dashboard')
        }
    },[dispatch, userInfo])




    console.log(userInfo)
const formik=useFormik({
    initialValues:{
        email:'',
        password:""
    },validationSchema:loginShema,onSubmit:values => {
      dispatch(userLogin(values))
    }
})


    console.log(formik.errors)
    return (
        <div className=" flex   p-5 items-center">
            <div className="md:block hidden  w-1/3">
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
            <div className="w-full md:w-1/2 px-8 mx-auto md:px-10">
                <h2 className="font-bold text-3xl text-[#0066CC] mb-4">Login</h2>
                <h3 className="font-bold text-xl mb-2">Create a new account</h3>
                <p className="text-gray-800 mb-4">
                    Start your free 14-day trial and begin collecting feedback.
                    Easily collect user feedback &amp; feature requests.
                </p>
                <a href="#"
                   className="bg-white border py-2 w-full rounded-xl flex justify-center items-center text-[#0066CC] hover:bg-gray-100 transition duration-300">
                    Login with Google
                </a>
                <div className="my-6 flex items-center">
                    <hr className="flex-grow border-gray-300"/>
                    <p className="mx-4 text-gray-500">OR</p>
                    <hr className="flex-grow border-gray-300"/>
                </div>
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                    <input onChange={formik.handleChange}
                        className="p-3 rounded-xl border w-full focus:outline-none focus:border-blue-500 transition duration-300"
                        type="email" name="email" placeholder="Email" value={formik.values.email}/>
                    {formik.errors.email && formik.touched.email && (
                        <p className="text-red-500">{formik.errors.email}</p>
                    )}
                    <div className="relative">
                        <input onChange={formik.handleChange}
                            className="p-3 rounded-xl border w-full focus:outline-none focus:border-blue-500 transition duration-300"
                            type="password" name="password" placeholder="Password" value={formik.values.password}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                             className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                             viewBox="0 0 16 16">

                        </svg>
                        {formik.errors.password && formik.touched.password && (
                            <p className="text-red-500">{formik.errors.password}</p>
                        )}
                    </div>
                    <button
                        className="bg-[#0066CC] rounded-xl text-white py-3 hover:bg-blue-700 transition duration-300">
                        Login
                    </button>
                </form>
                <div className="mt-5 flex justify-between  pb-4 text-[#0066CC]">
                    <Link to="/forgetpassword" >Forgot your password?</Link>
                    <Link to={"/register"} >Register
                </Link>
                </div>

            </div>


        </div>
    );
};

export default Login;
