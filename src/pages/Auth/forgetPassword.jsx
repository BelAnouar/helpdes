




const ForgetPassword = () => {
  return(
      <section className="bg-gray-50 ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

              <div
                  className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  sm:p-8">
                  <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                      Verify your account
                  </h2>
                  <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" method="post">
                      <div>
                          <label htmlFor="email"
                                 className="block mb-2 text-sm font-medium text-gray-900 ">Your
                              email</label>
                          <input type="email" name="email" id="email"
                                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                                 placeholder="example@gmail or .com" required=""/>
                      </div>



                      <button type="submit"
                              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Reset
                          passwod
                      </button>
                  </form>
              </div>
          </div>
      </section>
  )
}


export default ForgetPassword
