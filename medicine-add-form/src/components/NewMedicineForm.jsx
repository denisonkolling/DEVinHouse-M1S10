import React from 'react';
import { useState } from 'react';

const NewMedicineForm = () => {

  const [list, setList] = useState([])

	const [medicine, setMedicine] = useState({
		name: '',
		laboratory: '',
		price: '',
	});

	const handleChange = (e) => {
	};

	const handleSubmit = (e) => {
	};

	return (
		<div className="container mt-4">
			<form className="row d-flex" onSubmit={(e) => handleSubmit(e)}>
				<div className="col">
					<label>Name</label>
					<input
						type="text"
						name="name"
						className="form-control"
						onChange={(e) => handleChange(e)}
						value={medicine.name}
					/>
				</div>
				<div className="col">
					<label>Laboratory</label>
					<input
						type="text"
						name="laboratory"
						className="form-control"
						onChange={(e) => handleChange(e)}
						value={medicine.laboratory}
					/>
				</div>
				<div className="col">
					<label>Price</label>
					<input
						type="number"
						name="price"
						className="form-control"
						onChange={(e) => handleChange(e)}
						value={medicine.price}
					/>
				</div>
				<div className="col p-3">
					<button className="btn btn-primary m-2 ">Add</button>
				</div>
			</form>
			<span>{medicine.name}</span>
			<span>{medicine.laboratory}</span>
			<span>{medicine.price}</span>
		</div>
	);
};

export default NewMedicineForm;
