import ReplyIcon from '@mui/icons-material/Reply';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SellIcon from '@mui/icons-material/Sell';

import IconButtonMenu from "../../components/Ticketing/IconButtonMenu.jsx";

import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import { toast } from "react-toastify";
import TicketDetails from "../../components/Ticketing/TicketDetails.jsx";

const TicketViewer = () => {

    const { idTicket } = useParams();

    const { data, error, isLoading } = useQuery({
        queryKey: ["fetchData"],
        queryFn: async () => {
            const [singleTicket, priorite, statues] = await Promise.all([
                axiosClient.get(`/ticket/${idTicket}`).then(({ data }) => data),
                axiosClient.get(`/priorite`).then(({ data }) => data),
                axiosClient.get(`/statue`).then(({ data }) => data)
            ]);
            return { singleTicket, priorite, statues };
        }
    });



    const assignerPriorite = useMutation({
        mutationFn: async (values) => await axiosClient.patch("/ticket/priorite/"+idTicket, values),
        onSuccess: (data) => {
            toast.success("Assigned priorite!");
        }
    });

    const assignerStatue = useMutation({
        mutationFn: async (values) => await axiosClient.patch("/ticket/statue/"+idTicket, values),
        onSuccess: (data) => {
            toast.success("Assigned statue!");
        }
    });





    if (isLoading) return "loading..";

    return (
        <>
            <div className="">
                <div className="mt-10 py-4 px-4 bg-white shadow overflow-hidden sm:rounded-md">
                    <div className="bg-white flex-1 relative">
                        <div className="flex flex-col relative ">
                            <div className="flex-auto  px-3 pb-6 w-20 flex justify-between items-center ">
                                <IconButtonMenu
                                    icon={AssistantPhotoIcon}
                                    color="text-blue-500"
                                    buttonText="priorite"
                                    menuItemText={data.priorite}
                                    assignerMutation={assignerPriorite}
                                />
                                <IconButtonMenu
                                    icon={DeleteOutlineIcon}
                                    color="text-red-500"
                                    buttonText="Delete Outline"
                                    menuItemText="Delete Outline"
                                />
                                <IconButtonMenu
                                    icon={Diversity2Icon}
                                    color="text-yellow-500"
                                    buttonText="Diversity 2"
                                    menuItemText={data?.singleTicket.team.users}
                                />
                                <IconButtonMenu
                                    icon={SellIcon}
                                    color="text-purple-500"
                                    buttonText="statues"
                                    menuItemText={data.statues}
                                    assignerMutation={assignerStatue}
                                />
                            </div>
                          <TicketDetails data={data} idTicket={idTicket} />
                        </div>
                    </div>
                </div>s
            </div>
        </>
    );
};

export default TicketViewer;
