import React from 'react';
import '../Card/Card.css';
import { TiDelete } from 'react-icons/ti';

const Card = ({ people, handleDelete }) => {
	return (
		<>
			<section>
				{people.map((person) => {
					const { id, image, name, date } = person;
					return (
						<article className='card__content' key={person.id}>
							<div className='card__div'>
								<img src={image} alt={name} className='card__img' />
								<div className='card__info'>
									<p>{name}</p>
									<p>{date} years</p>
								</div>
							</div>
							<button className='card__btn' onClick={() => handleDelete(id)}>
								<TiDelete />
							</button>
						</article>
					);
				})}
			</section>
		</>
	);
};

export default Card;
