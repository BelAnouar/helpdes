


const RestPassword=()=>{
    return(
        <section className="bg-white ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div
                    className="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md  sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Change Password
                    </h2>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" method="post">

                        <div>
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900 ">New
                                Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                   className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   "
                                   required=""/>
                        </div>
                        <div>
                            <label htmlFor="confirm-password"
                                   className="block mb-2 text-sm font-medium text-gray-900 ">Confirm
                                password</label>
                            <input type="confirm-password" name="confirm-password" id="confirm-password"
                                   placeholder="••••••••"
                                   className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   "
                                   required=""/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="newsletter" aria-describedby="newsletter" type="checkbox"
                                       className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-primary-300 "
                                       required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="newsletter" className="font-light text-gray-500 ">I
                                    accept the <a
                                        className="font-medium text-primary-600 hover:underline "
                                        href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit"
                                className="w-full bg-gray-50  hover:bg-primary-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Reset
                            passwod
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}


export  default  RestPassword
