
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { MedicineContext } from '../context/MedicineContext';

const CardMedicine = ({ medicine }) => {

	const {FavoriteMedicine} = useContext(MedicineContext)

	return (
		<div className="card col-2 m-4">
			<div className="card-body">
			<button className={ medicine.favorite ? 'btn text-danger' : 'btn text-muted'} onClick={() => FavoriteMedicine(medicine.id)}>
			<FontAwesomeIcon icon={faHeart} /></button>
				<img
					className="card-img-top"
					src="https://araujo.vteximg.com.br/arquivos/ids/4204882-1000-1000/07891045042741.jpg?v=638119987241930000"
					alt="Card image cap"></img>
				<h5 className="card-title text-center">{medicine.name}</h5>
				<p className="text-center">{medicine.laboratory}</p>
				<p className="text-center">$ {medicine.price}</p>
				<p className="text-center">{medicine.favorite.toString()}</p>
			</div>
		</div>
	);
};

export default CardMedicine;
