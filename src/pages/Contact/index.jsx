const Contact = () => {
    return (<>
            <main className={"bg-[#f7f8fc] py-8"}>
                <section className="bg-white w-[90%] mx-auto rounded-2xl">
                    <div className="container px-6 py-12 mx-auto">
                        <div className="text-center ">
                            <h1 className="font-bold md:text-4xl text-[#012635] ">Contact us</h1>

                            <h2 className="mt-2 text-2xl font-medium text-gray-800 md:text-xl ">We’d love to
                                hear from you</h2>


                        </div>

                        <img className="object-cover w-11/12 mx-auto h-64 mt-10 rounded-lg lg:h-96"
                             src="/images/caontact.jpg"
                             alt=""/>


                    </div>
                </section>
                <div className=" container px-6 mt-10 mx-auto  ">

                    <section
                        className="relative z-10 overflow-hidden   py-20 lg:py-[120px]"
                    >
                        <div className="container mx-auto">
                            <div className="flex flex-wrap items-center -mx-4 lg:justify-between">
                                <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                                    <img src={"/images/personal_information.png"} className={'bg-transparent'} alt={"contactus"}/>
                                </div>
                                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                    <div
                                        className="relative p-8 rounded-lg border shadow-lg  sm:p-12"
                                    >
                                        <form>
                                            <div className="mb-6">
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    className="border-stroke  dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <input
                                                    type="email"
                                                    placeholder="Your Email"
                                                    className="border-stroke  dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <input
                                                    type="text"
                                                    placeholder="Your Phone"
                                                    className="border-stroke  dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                                                />
                                            </div>
                                            <div className="mb-6">
                     <textarea
                         rows="6"
                         placeholder="Your Message"
                         className="border-stroke  dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                     ></textarea>
                                            </div>
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full p-3  transition border rounded border-primary  hover:bg-opacity-90"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </main>
        </>
    )
}


export default Contact
