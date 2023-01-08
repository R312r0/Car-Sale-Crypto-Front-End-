import { Button } from "@mui/material";
import styled from "styled-components";


export const HeaderWrapper = styled.div`

	background-color: aliceblue;
	box-sizing: border-box;
	padding: 2vh 1vw;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 2fr;

`

export const Title = styled.h1`

	cursor: pointer;
	font-weight: 400;
	letter-spacing: 0.25vw;
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr;
	img {
		margin-left: 15px;
		width: 35px;
		height: 35px;
	}

`

export const UserPanel = styled.div<{isLoggedIn: boolean}>`
	display: grid;
	grid-template-columns: ${props => props.isLoggedIn ? "repeat(3, 1fr)" : "1fr"};
	justify-self: flex-end;
	justify-items: center;
	width: 40%;
	img {
		cursor: pointer;
		width: 30px;
		height: 30px;
	}
`

export const LoginButton = styled(Button)`

	display: grid;
	width: 125px;
	justify-self: flex-end;

`