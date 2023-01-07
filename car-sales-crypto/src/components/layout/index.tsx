import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import { LayoutWrapper } from './styles';



const Layout = () => {

	return (
		<LayoutWrapper>
			<Header/>
			<Outlet/>
		</LayoutWrapper>
	)

}

export default Layout;