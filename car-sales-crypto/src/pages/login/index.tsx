import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ConnectWalletButton, LoginInput, LoginWindow, LoginWrapper, ButtonGroup, AuthButton } from './styles';
import { signIn } from '../../redux/auth/auth-slice';
import { useNavigate } from 'react-router-dom';

enum AUTH_STATE  {
	"Login",
	"Register"
}

const Login = () => {

	const [authState, setAuthState] = useState(AUTH_STATE[0]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const login = () => {
		dispatch(signIn())
		navigate("/")
	}

	return (
		<LoginWrapper>
			<ConnectWalletButton variant='contained'>Connect Wallet</ConnectWalletButton>
			<h1> OR </h1>
			<LoginWindow>
				<h1> {authState} </h1>
				<LoginInput type="text" label="Email" variant='outlined'/>
				<LoginInput type="password" label="Password" variant='outlined'/>
				<ButtonGroup>
					<AuthButton onClick={() => login()} variant='contained'>{authState}</AuthButton>
					<AuthButton onClick={() => setAuthState(AUTH_STATE[0])} disabled={authState === AUTH_STATE[0]} variant='text'> Sign in </AuthButton>
					<AuthButton onClick={() => setAuthState(AUTH_STATE[1])} disabled={authState === AUTH_STATE[1]} variant='text'> Sign up </AuthButton>
				</ButtonGroup>
			</LoginWindow>
		</LoginWrapper>
	)

}


export default Login;