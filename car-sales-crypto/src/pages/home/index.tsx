import React from 'react';
import CarList from '../../components/car-list';
import FilterBar from '../../components/filter-bar';
import { HomeWrapper } from './styles';


const Home = () => {

	return (
		<HomeWrapper>
			<FilterBar/>
			<CarList/>
		</HomeWrapper>
	)

}

export default Home;