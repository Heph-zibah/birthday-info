import React, { useState } from 'react';
import data from '../src/data';
import Card from './Card/Card';
import './Card/Card.css';
import { AiFillDelete } from 'react-icons/ai';
import { FiRefreshCcw } from 'react-icons/fi';

function App() {
	const [people, setPeople] = useState(data);

	const handleDelete = (id) => {
		const newPeople = people.filter((person) => person.id !== id);
		setPeople(newPeople);
	};

	return (
		<>
			<main className='birth__card'>
				<div className='card'>
					<h1>{people.length} birthday today</h1>
					<Card people={people} handleDelete={handleDelete} />
					<div className='btns'>
						<button className='btn' onClick={() => setPeople([])}>
							<AiFillDelete />
						</button>
						<button onClick={() => setPeople(data)} className='btn__ref'>
							<FiRefreshCcw />
						</button>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
