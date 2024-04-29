
import TicketDetails from "../../components/Ticketing/TicketDetails.jsx";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";


const TicketView=()=>{

    const { idTicket } = useParams();

    const { data, error, isLoading } = useQuery({
        queryKey: ["fetchData"],
        queryFn: async () => {
            const [singleTicket] = await Promise.all([
                axiosClient.get(`/ticket/${idTicket}`).then(({ data }) => data),

            ]);
            return { singleTicket };
        }
    });

    if (isLoading) return "loading..";
    return(
        <>
            <div className="">
                <div className="mt-10 py-4 px-4 bg-white shadow overflow-hidden sm:rounded-md">
                    <div className="bg-white flex-1 relative">
                        <div className="flex flex-col relative ">
                            <TicketDetails data={data}  idTicket={idTicket} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default  TicketView
