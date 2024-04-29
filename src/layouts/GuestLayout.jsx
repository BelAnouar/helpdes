import {Outlet} from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";


const GuestLayout = () => {
    return (<>

            <Header/>
            <Outlet/>
            <Footer/>

        </>

    )
}


export default GuestLayout;
