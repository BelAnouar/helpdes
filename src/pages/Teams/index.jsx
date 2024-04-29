
import * as React from "react";

import AddTeams from "../../components/Teams/addTeams.jsx";
import AddTeamMember from "../../components/Teams/addTeamMember.jsx";


const Teams=()=>{

    return(

        <>
            <div className= "min-h-screen p-6 bg-white rounded shadow-lg">


                <div className= "grid gap-4 gap-y-4 text-sm grid-cols-1 lg:grid-cols-3">
                    <AddTeams/>
                    <AddTeamMember/>
                </div>






            </div>

        </>
    )
}


export default Teams
