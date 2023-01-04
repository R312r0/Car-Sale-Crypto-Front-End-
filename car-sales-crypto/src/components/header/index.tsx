import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { HeaderWrapper, RoutesList, RoutesListItem } from './styles';

const routes = [
	{name: "Home", path: "/"},
	{name: "Login", path: "/login"},
]

const Header = () => {

	const navigate = useNavigate();
	const location = useLocation();

	return (
		<HeaderWrapper>
			<h1>Car Sales Crypto</h1>
			<RoutesList>
				{routes.map((route, _ind) => {
					return (
						<RoutesListItem 
							selected={location.pathname === route.path}
							key={route.name + _ind}
							onClick={() => navigate(route.path)}
						>
							{route.name}
						</RoutesListItem>
					)									
				})}
			</RoutesList>
		</HeaderWrapper>
	)

}

export default Header