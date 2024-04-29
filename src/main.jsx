import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider} from 'react-router-dom'

import router from '../routes/router'
import {ToastContainer} from "react-toastify";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>

            <RouterProvider router={router}/>

            <ToastContainer></ToastContainer>
        </QueryClientProvider></Provider>,
)
