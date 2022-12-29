import React from 'react';
import {
	createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Layout from '../components/layout';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Layout/>,
	  children: [
		{
			path: "/app",
			element: <App />,
		  },
	  ]
	},
]);


export default router;