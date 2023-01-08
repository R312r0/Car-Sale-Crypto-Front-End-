import styled from "styled-components";
import { Button, TextField } from "@mui/material";

export const LoginWrapper = styled.div`
	display: grid;
	grid-template-rows: 1.5fr 1fr 3fr;
	background: lightgray;
	justify-items: center;
	box-sizing: border-box;
	padding: 50px 50px;
`

export const ConnectWalletButton = styled(Button)`

	width: 20%;
	height: 50px;
	align-self: center;

`

export const LoginWindow = styled.div`

	background: white;
	width: 40%;
	border-radius: 10px;
	display: grid;
	grid-template-rows: 1fr 1.25fr 1.25fr 2fr;

	height: 500px;

	align-self: flex-start;

	box-sizing: border-box;
	padding: 25px;

	h1 {
		justify-self: center;
	}

`

export const LoginInput = styled(TextField)`

	width: 50%;
	place-self: center;

`

export const ButtonGroup = styled.div`

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-column-gap: 15px;

`

export const AuthButton = styled(Button)`

	display: grid;
	width: 200px;
	height: 50px;

	place-self: center;

	&:nth-child(1) {
		grid-column: 1/3;
	}

	&:nth-child(2) {
		justify-self: flex-end;
	}

	&:nth-child(3) {
		justify-self: flex-start;
	}

`