

import { Row, Card, Col, Button, Descriptions } from "antd";
export default function Profile() {
    return (
        <>

            <div className="flex flex-col items-center justify-center -m-[28px] ">
                <div className="w-full  mx-auto bg-white  shadow-md">
                    <div className="relative"> <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Background image" className="w-full h-40  object-cover"/>
                        <img src="/images/Ellipse.png" alt="Profile picture"
                             className="w-32 h-32 rounded-full absolute -bottom-[44%] border-solid border-4 border-[#26B893] border-opacity-50 border-10 left-10"/>
                    </div>
                    <div className="p-4 ml-44">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="text-lg font-semibold text-gray-700">Mobina Mirbagheri</div>
                            </div>

                        </div>
                        <div className="mt-1">
                            <p className="text-sm text-gray-500">Your account is ready, you can now apply for
                                advice.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="profile-nav-bg"
            />


            <Row gutter={[24, 0]}>
                <Col span={24} md={18} className="mb-24">
                    <Card
                        bordered={false}
                        className="header-solid h-full"
                        title={<h6 className="font-semibold m-0">Edit Profile</h6>}
                    >
                        <div className="px-6 py-4">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Profile</h1>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first-name" className="block text-gray-700 font-medium">First Name</label>
                                    <input type="text" id="first-name" name="first-name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="mobina" />
                                </div>
                                <div>
                                    <label htmlFor="surname" className="block text-gray-700 font-medium">Surname</label>
                                    <input type="text" id="surname" name="surname" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Mir" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Value" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label htmlFor="national-code" className="block text-gray-700 font-medium">National Code</label>
                                    <input type="text" id="national-code" name="national-code" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Value" />
                                </div>
                                <div>
                                    <label htmlFor="phone-number" className="block text-gray-700 font-medium">Phone Number</label>
                                    <div className="flex items-center">
                                        <span className="px-3 py-2 bg-gray-200 rounded-l-lg">+98</span>
                                        <input type="tel" id="phone-number" name="phone-number" className="w-full px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:border-blue-500" placeholder="9120000000" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="date-of-birth" className="block text-gray-700 font-medium">Date of birth</label>
                                <input type="text" id="date-of-birth" name="date-of-birth" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Value" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="education-level" className="block text-gray-700 font-medium">Education level</label>
                                <select id="education-level" name="education-level" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                    <option value="software">software</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="country" className="block text-gray-700 font-medium">Country</label>
                                <select id="country" name="country" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                    <option value="Select">Select</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="city" className="block text-gray-700 font-medium">City</label>
                                <select id="city" name="city" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                    <option value="software">software</option>
                                </select>
                            </div>
                            <div className="mt-6">
                                <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg w-full">Save</button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={24} md={6} className="mb-24">
                    <Card
                        bordered={false}
                        title={<h6 className="font-semibold m-0">Profile Information</h6>}
                        className="header-solid h-full card-profile-information"
                        extra={
                            <Button type="link">
                               icon
                            </Button>
                        }
                        bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
                    >
                        <p className="text-dark">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi quasi optio perspiciatis, quaerat dolor. Dolor odit quaerat numquam vitae sequi ea ducimus nulla vel? Quos tenetur beatae deleniti! Incidunt.
                        </p>
                        <hr className="my-25" />
                        <Descriptions title="personal data">
                            <Descriptions.Item label="Full Name" span={3}>
                                Hassan Jaraf
                            </Descriptions.Item>
                            <Descriptions.Item label="Mobile" span={3}>
                                +212 687065428
                            </Descriptions.Item>
                            <Descriptions.Item label="Email" span={3}>
                                HassanJaraf@mail.com
                            </Descriptions.Item>
                            <Descriptions.Item label="Location" span={3}>
                                SAFI
                            </Descriptions.Item>

                        </Descriptions>
                    </Card>
                </Col>


            </Row>



        </>
    );
}
