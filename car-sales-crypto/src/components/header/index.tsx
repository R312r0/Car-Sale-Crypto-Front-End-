import React from 'react';
import { HeaderWrapper, Title, UserPanel, LoginButton } from './styles';
import logo from '../../assets/icons/car-price.svg';
import notification from '../../assets/icons/notifications.svg';
import carlist from '../../assets/icons/list.svg';
import messages from '../../assets/icons/message.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Header = () => {

	const navigate = useNavigate();
	const {loggedIn} = useSelector((state: RootState) => state.auth);

	return (
		<HeaderWrapper>
			<Title onClick={() => navigate("/")}> 
				Car Sales Crypto
				<img src={logo}/>
			</Title>
			<UserPanel isLoggedIn={loggedIn}>
				{loggedIn ? 
					<>
						<img src={notification}/>
						<img src={messages} onClick={() => navigate("/messages")}/>
						<img src={carlist}/>
					</>
					:
					<LoginButton variant='contained' onClick={() => navigate("/login")}>Login</LoginButton>
				}
			</UserPanel>
		</HeaderWrapper>
	)

}

export default Header;