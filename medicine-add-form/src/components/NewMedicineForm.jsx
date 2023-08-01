import React, { useContext } from 'react';
import { useState } from 'react';
import { MedicineContext } from '../context/MedicineContext';

const NewMedicineForm = () => {
	
	const { AddMedicine } = useContext(MedicineContext);

	const [list, setList] = useState([]);

	const [medicine, setMedicine] = useState({
		id: '',
		name: '',
		laboratory: '',
		price: 0,
		favorite: false,
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setMedicine({ ...medicine, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		AddMedicine(medicine.name, medicine.laboratory, medicine.price);
		
		localStorage.setItem(medicine, JSON.stringify(medicine));
		setMedicine({name: '', laboratory: '', price: '',	});
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
		</div>
	);
};

export default NewMedicineForm;
