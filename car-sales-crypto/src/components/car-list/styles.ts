import styled from "styled-components";


export const CarListWrapper = styled.div`

	box-sizing: border-box;
	padding: 25px 25px;
	background: lightgray;
	overflow: auto;
`

export const CarListUl = styled.ul`

	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-column-gap: 10px;
	grid-row-gap: 25px;
	justify-items: center;

`


export const CarListItem = styled.li`

	display: grid;
	grid-template-rows: 1fr auto 2fr;
	justify-items: center;
	background: aliceblue;
	border-radius: 10px;
	width: 250px;
	height: 300px;

	img {
		width: 200px;
		height: 175px;
	}

`