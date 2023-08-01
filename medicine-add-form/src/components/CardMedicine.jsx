import React from 'react';

const CardMedicine = (props) => {
	return (
		<div class="card col-2 m-4">
			<div class="card-body">
			<h5 class="card-title">{props.name}</h5>
				<p>{props.laboratory}</p>
				<p>{props.price}</p>
				<p>{props.favorite.toString()}</p>
			</div>
		</div>
	);
};

export default CardMedicine;
