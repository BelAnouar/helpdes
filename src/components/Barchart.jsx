import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


const Barchart = ({completedStats, openedtedStats}) => {
    console.log(completedStats)
    const dateCompletedStats= completedStats.completed_tickets?.map(item=>item.date)
    const countsCompletedStats=completedStats.completed_tickets?.map(item=>item.total)
    const dateOpenedStats= openedtedStats.opened_tickets?.map(item=>item.date)
    const countsOnpenedStats=openedtedStats.opened_tickets?.map(item=>item.total)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    return (<>
            <Line
                data={{
                    datasets: [
                        {
                            label: 'created',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            data: countsOnpenedStats
                        },
                        {
                            label: 'closed',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            data: countsCompletedStats
                        }
                    ],
                    labels:[ ...new Set([...dateCompletedStats,...dateOpenedStats])]
                }}
                height={50}
                width={100}
            />
        </>

    )
}


export default Barchart
