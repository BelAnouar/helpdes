import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./features/userSlice.js"
import {authApi} from "./middleware/TokenUser.js";

export default configureStore({
    reducer: {
        "userAuth": userReducer

    }});
