import styled from "styled-components";


export const HeaderWrapper = styled.div`

	display: grid;
	grid-template-columns: 1fr 5fr;

	align-items: center;

	padding: 2rem;
	box-sizing: border-box;

`

export const RoutesList = styled.ul`
	justify-self: flex-end;
	width: 25%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
`

export const RoutesListItem = styled.li<{selected: boolean}>`

	cursor: pointer;
	transition: 0.3s all;
	color: ${props => props.selected ? "cyan" : "black"};
	&:hover {
		color: lightcyan;
	}

`