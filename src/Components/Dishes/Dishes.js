import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './dishes.scss'

const Dishes = ({ match, dishCategories, setDishCategories }) => {
	
	useEffect(() => {
		const category = match.params.category;
		const dishUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

		fetch(dishUrl)
			.then((res) => res.json())
			.then((res) => {
                setDishCategories(res.meals);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!dishCategories) {
		return null;
	}

	return (
		<div>
			<h1>{match.params.category} Dishes</h1>
			<div className='dish-container'>
				{dishCategories.map((dish) => {
					return (
						<div key={dish.idMeal}>
							<div>
								<Link to={`/dishes/${match.params.category}/${dish.idMeal}`}>
									<img src={dish.strMealThumb} alt={dish.idMeal} />
									<h3>{dish.strMeal}</h3>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dishes;
