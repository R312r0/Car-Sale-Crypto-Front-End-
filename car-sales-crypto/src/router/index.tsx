import React from 'react';
import {
	createBrowserRouter, Route,
} from "react-router-dom";
import Layout from '../components/layout';
import CarPage from '../pages/car-page';
import Home from '../pages/home';
import Login from '../pages/login';
import Messages from '../pages/messages';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Layout/>,
	  children: [
		{
			path: "/",
			element: <Home/>
		},
		{
			path: "/login",
			element: <Login/>,
		},
		{
			path: "/messages",
			element: <Messages/>
		},
		{
			path: "/car/:carId",
			element: <CarPage/>
		}
	  ]
	},
]);


export default router;