import React from 'react';

const CardMedicine = ({ medicine }) => {
	return (
		<div class="card col-2 m-4">
			<div class="card-body">
				<h5 class="card-title text-center">{medicine.name}</h5>
				<img
					class="card-img-top"
					src="https://araujo.vteximg.com.br/arquivos/ids/4204882-1000-1000/07891045042741.jpg?v=638119987241930000"
					alt="Card image cap"></img>
				<p className="text-center">{medicine.laboratory}</p>
				<p className="text-center">$ {medicine.price}</p>
				<p className="text-center">{medicine.favorite ? 'Favorite' : ' '}</p>
			</div>
		</div>
	);
};

export default CardMedicine;
