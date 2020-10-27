import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Home/Header/Header';
import Home from '../Home/Home';

import DishCategories from '../Dishes/DishCategories'
import Dishes from '../Dishes/Dishes/Dishes'
import Recipe from '../Dishes/Dishes/Recipe/Recipe'

import DrinkCategories from '../Drinks/DrinkCategories'
import AlcoholicDrinks from '../Drinks/Drinks/AlcoholicDrinks'
import NonAlcoholicDrinks from '../Drinks/Drinks/NonAlcoholicDrinks'
import DrinkRecipe from '../Drinks/DrinkRecipe/DrinkRecipe'

import Dialogue from '../Dialogue/Dialogue';

function App() {
	const [dishCategories, setDishCategories] = useState([]);
	const [drinkCategories, setDrinkCategories] = useState([]);
	//const [convoCategories, setConvocategories] = useState([]);

	const dishCategoriesUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;
	const drinkCategoriesUrl = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

	const getDishCategories = () => {
		fetch(dishCategoriesUrl)
			.then((res) => res.json())
			.then((res) => {
				setDishCategories(res.categories);
			});
	};

	// const getDrinkCategories = () => {
	// 	fetch(drinkCategoriesUrl)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setDrinkCategories(res.drinks);
	// 		});
	// };


	useEffect(() => {
		getDishCategories();
		// getDrinkCategories();
	}, []);

	return (
		<div className='App'>
			<Header />
			<Route exact path='/' render={() => <Home />} />
			<main>
				<Route
					exact
					path='/dishes'
					render={() => <DishCategories dishCategories={dishCategories} />}
				/>
				<Route
					exact
					path='/dishes/:category'
					render={(routerProps) => {
						return (
							<Dishes
								dishCategories={dishCategories}
								setDishCategories={setDishCategories}
								match={routerProps.match}
							/>
						);
					}}
				/>
				<Route
					exact
					path='/dishes/:category/:id'
					render={(routerProps) => {
						return <Recipe match={routerProps.match} />;
					}}
				/>

				<Route exact path='/drinks' render={() => <DrinkCategories />} />

				<Route
					exact
					path='/drinks/alcoholic'
					render={() => <AlcoholicDrinks />}
				/>

				<Route
					exact
					path='/drinks/nonalcoholic'
					render={() => <NonAlcoholicDrinks />}
				/>
				<Route
					exact
					path='/drinks/:category/:id'
					render={(routerProps) => {
						return <DrinkRecipe match={routerProps.match} />;
					}}
				/>
				<Route path='/dialogue' render={() => <Dialogue />} />
			</main>
			<footer>
				<p>&copy;2020 LCR Labs</p>
			</footer>
		</div>
	);
}

export default App;
