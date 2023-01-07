import React from 'react';
import { CarListItem, CarListUl, CarListWrapper } from './styles';
import bmw from '../../assets/images/bmw.jpeg';
import { useNavigate } from 'react-router-dom';

const CAR_LIST = [
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
	{
		name: "BMW 535i F10",
		img: bmw,
		price: 15000,
	},
]

const CarList = () => {

	const navigate = useNavigate();

	return (
		<CarListWrapper>
			<CarListUl>
				{CAR_LIST.map((car, _ind) => {
					return (
						<CarListItem key={_ind} onClick={() => navigate("/car/1")}>
							<span>{car.name}</span>
							<img src={car.img}/>
							<span> Price : {car.price} USDC</span>
						</CarListItem>
					)
				})}
			</CarListUl>
		</CarListWrapper>
	)

}

export default CarList;