import {Button, Card, Col, Descriptions, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfo, selectUserInfo} from "../../redux/features/userSlice.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import {toast} from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const UserProfile = () => {
    const userInfo = useSelector(selectUserInfo);
    const dispatch=useDispatch();

    const initialValues = {
        firstName: userInfo.name.split(' ')[0] || '',
        surname: userInfo.name.split(' ')[1] || '',
        email: userInfo.email || '',
        nationalCode: '',
        phoneNumber: '',
        dateOfBirth: '',
    };


    const { mutate: updateUser } = useMutation({
        mutationFn: async ({values, id}) => axiosClient.put(`/user-profile/${id}`,values)  ,
        onSuccess: () => {
            toast.success("Profile updated!");
            dispatch(fetchUserInfo());
        },

    });
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await updateUser({ values, id: userInfo.id });

        } catch (error) {
            toast.error("An error occurred while updating the profile!");
        }
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}

            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="px-6 py-4">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Profile</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-gray-700 font-medium">First Name</label>
                                <Field type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                <ErrorMessage name="firstName" component="div" className="text-red-600" />
                            </div>
                            <div>
                                <label htmlFor="surname" className="block text-gray-700 font-medium">Surname</label>
                                <Field type="text" id="surname" name="surname" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                <ErrorMessage name="surname" component="div" className="text-red-600" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                            <Field type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" disabled />
                            <ErrorMessage name="email" component="div" className="text-red-600" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="nationalCode" className="block text-gray-700 font-medium">National Code</label>
                                <Field type="text" id="nationalCode" name="nationalCode" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                <ErrorMessage name="nationalCode" component="div" className="text-red-600" />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-gray-700 font-medium">Phone Number</label>
                                <Field type="tel" id="phoneNumber" name="phoneNumber" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                <ErrorMessage name="phoneNumber" component="div" className="text-red-600" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium">Date of Birth</label>
                            <Field type="date" id="dateOfBirth" name="dateOfBirth" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                            <ErrorMessage name="dateOfBirth" component="div" className="text-red-600" />
                        </div>
                        <div className="mt-6">
                            <button type="submit" disabled={isSubmitting} className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg w-full">
                                {isSubmitting ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default UserProfile;
