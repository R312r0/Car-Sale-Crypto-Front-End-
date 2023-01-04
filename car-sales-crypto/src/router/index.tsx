import React from 'react';
import {
	createBrowserRouter, Route,
} from "react-router-dom";
import Layout from '../components/layout';
import Login from '../components/login';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Layout/>,
	  children: [
		{
			path: "/login",
			element: <Login />,
		  },
	  ]
	},
]);


export default router;