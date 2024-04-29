



const OTP=()=>{
    return(
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#222831] py-12">
                <div
                    className="bg-[#D9ACF5] relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl ">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16  ">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl text-primary-100">
                                <p>Email Verification</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                                <p>We have sent a code to your email ba**@dipainhouse.com</p>
                            </div>
                        </div>

                        <div>
                            <form method="post">
                                <div className="flex flex-col space-y-16">
                                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                        <div className="w-16 h-16 ">
                                            <input
                                                   className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-primary-300 focus:bg-bg-300 focus:ring-1 ring-blue-700"
                                                   type="text" name="pass1" id=""/>
                                        </div>
                                        <div className="w-16 h-16 ">
                                            <input
                                                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-primary-300 focus:bg-bg-300 focus:ring-1 ring-blue-700"
                                                type="text" name="pass2" id=""/>
                                        </div>
                                        <div className="w-16 h-16 ">
                                            <input max="1"
                                                   className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-primary-300 focus:bg-bg-300 focus:ring-1 ring-blue-700"
                                                   type="text" name="pass3" id=""/>
                                        </div>
                                        <div className="w-16 h-16 ">
                                            <input max="1"
                                                   className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-primary-300 focus:bg-bg-300 focus:ring-1 ring-blue-700"
                                                   type="text" name="pass4" id=""/>
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-5">
                                        <div>
                                            <button type="submit"
                                                    className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-primary-200 border-none text-text-100 text-sm shadow-sm">
                                                Verify Account
                                            </button>
                                        </div>

                                        <div
                                            className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-text-100">
                                            <p>Didn't receive code?</p> <a
                                            className="flex flex-row items-center text-accent-100" href="http://"
                                            target="_blank" rel="noopener noreferrer">Resend</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



export  default  OTP
