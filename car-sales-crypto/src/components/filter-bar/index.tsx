import { InputLabel, MenuItem, Select, Slider, Button } from '@mui/material';
import React from 'react';
import { FilterWrapper, SelectFieldWrapper } from './styles';

const CAR_BRANDS = [
	"BMW"
]

const CAR_MODELS = [
	"535"
]

const CAR_GENERATIONS = [
	"F10/F11"
]

const FUEL_TYPE = [
	"Petrol",
	"Diesel",
	"Hybrid",
	"EV"
]

function valuetext(value: number) {
	return `${value} USDC`;
  }

const FilterBar = () => {

	const [value, setValue] = React.useState<number[]>([0, 1500]);

	const handleChange = (event: Event, newValue: number | number[]) => {
	  setValue(newValue as number[]);
	};

	return (
		<FilterWrapper>
			<span>Filter</span>
			<SelectFieldWrapper>
			<InputLabel>Brand</InputLabel>
				<Select value={"-"} label={"Brand"}>
					{CAR_BRANDS.map((brand, _ind) => {
						return (
							<MenuItem key={_ind}>{brand}</MenuItem>
						)
					})}
				</Select>
			</SelectFieldWrapper>

			<SelectFieldWrapper>
				<InputLabel>Model</InputLabel>
				<Select value={"-"} label={"Model"}>
					{CAR_MODELS.map((model, _ind) => {
						return (
							<MenuItem key={_ind}>{model}</MenuItem>
						)
					})}
				</Select>
			</SelectFieldWrapper>
			<SelectFieldWrapper>
				<InputLabel>Generation</InputLabel>
				<Select value={"-"} label={"Generation"}>
					{CAR_GENERATIONS.map((gen, _ind) => {
						return (
							<MenuItem key={_ind}>{gen}</MenuItem>
						)
					})}
				</Select>
			</SelectFieldWrapper>
			<SelectFieldWrapper>
				<InputLabel>Fuel Type</InputLabel>
				<Select value={"-"} label={"Generation"}>
					{FUEL_TYPE.map((fuel, _ind) => {
						return (
							<MenuItem key={_ind}>{fuel}</MenuItem>
						)
					})}
				</Select>
			</SelectFieldWrapper>
			<SelectFieldWrapper>
				<InputLabel>Price range</InputLabel>
				<span> From: {value[0]} USDC </span>
				<span> To: {value[1]} USDC</span>
				<Slider
					getAriaLabel={() => 'Temperature range'}
					value={value}
					step={500}
					min={0}
					max={100000}
					onChange={handleChange}
					valueLabelDisplay="auto"
					getAriaValueText={valuetext}
				/>
			</SelectFieldWrapper>
			<Button variant='contained'> Apply Filter </Button>
		</FilterWrapper>
	)

}


export default FilterBar;