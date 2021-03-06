import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

import DishLogo from '../../imgs/dish.png';
import DrinkLogo from '../../imgs/drink.png';
import DialogueLogo from '../../imgs/dialogue.png';
import DinnerPartyPic from '../../imgs/dinnerparty.jpg';

const Home = () => {
	return (
		<section className='home'>
			<div className='home-cards-area'>
				<div className='dish-card'>
					<Link to='/dishes'>
						<img
							className='home-card-img-dish'
							src={DishLogo}
							alt='dish logo'
						/>
						<p className='home-card-title'>Dishes</p>
						<p className='home-card-text'>Dazzle your guests' tastebuds.</p>
					</Link>
				</div>
				<div className='drink-card'>
					<Link to='/drinks'>
						<img className='home-card-img' src={DrinkLogo} alt='drink logo' />
						<p className='home-card-title-drink'>Drinks</p>
						<p className='home-card-text'>Craft a delicious beverage.</p>
					</Link>
				</div>
				<div className='dialogue-card'>
					<Link to='/dialogue'>
						<img
							className='home-card-img'
							src={DialogueLogo}
							alt='dialogue logo'
						/>
						<p className='home-card-title'>Dialogue</p>
						<p className='home-card-text'>Keep the conversation flowing.</p>
					</Link>
				</div>
			</div>
			<div className='home-image-div'>

			<img className='home-image' src={DinnerPartyPic} alt='' />
			</div>
		</section>
	);
};

export default Home;
