import { useState} from "react";

import NotificationsIcon from '@mui/icons-material/Notifications';


import moment from 'moment';

const Notification = () => {

    const displayTimeDifference = (createdAt) => {
        if (!createdAt || !moment(createdAt).isValid()) {
            return 'Invalid date';
        }

        const differenceInMinutes = moment().diff(moment(createdAt), 'minutes');
        return `${differenceInMinutes} minutes ago`;
    };

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const notification=[]
    return(
        <>
            <div className="relative text-white">
                    <span
                        className="flex cursor-pointer text-xl  text-neutral-300 "
                        onClick={toggleNotification}
                    >
                        <NotificationsIcon/>
                    </span>
                {isNotificationOpen && (
                    <>
                        <div className='absolute z-10 text-left   max-w-sm mt-3 sm:right-0 sm:px-0 opacity-100 translate-y-0'>
                            <div className="overflow-hidden p-3  w-fit shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-8  bg-white "><h3
                                    className="text-black font-semibold">Notifications</h3>
                                    {notification?.datalist?.map(item => (
                                        <span key={item}
                                              className="flex p-2 pr-8 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 relative">
                                <div
                                    className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-8 h-8 sm:w-12 sm:h-12  ">
                                    <img className="absolute inset-0 w-full h-full object-cover rounded-full"
                                         src={`http://localhost:8000/storage/images/${item.riad.cover}`} alt="John Doe"/><span
                                    className="wil-avatar__name">J</span></div>
                                <div className="ml-3 sm:ml-4 space-y-1"><p
                                    className="text-sm font-medium text-gray-900 dark:text-gray-200">{item.riad.drriad.user.name}</p><p
                                    className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.message}</p>                                            <p
                                    className="text-xs text-gray-400 dark:text-gray-400">{displayTimeDifference(item.created_at)}</p>


                                </div>
                                <span
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></span></span>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Notification
