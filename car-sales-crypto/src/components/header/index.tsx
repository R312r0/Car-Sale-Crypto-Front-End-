import React from 'react';
import { HeaderWrapper, Title, UserPanel } from './styles';
import logo from '../../assets/icons/car-price.svg';
import notification from '../../assets/icons/notifications.svg';
import carlist from '../../assets/icons/list.svg';
import messages from '../../assets/icons/message.svg';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {

	const navigate = useNavigate();

	return (
		<HeaderWrapper>
			<Title onClick={() => navigate("/")}> 
				Car Sales Crypto
				<img src={logo}/>
			</Title>
			<UserPanel>
				<img src={notification}/>
				<img src={messages} onClick={() => navigate("/messages")}/>
				<img src={carlist}/>
				<Button variant='contained' onClick={() => navigate("/login")}>Login</Button>
			</UserPanel>
		</HeaderWrapper>
	)

}

export default Header;