import React from 'react';


const AddMedicine = (e) => {
  e.preventDefault();
};


const NewMedicineForm = () => {
	return (
		<div className="container mt-4">
			<form className="row d-flex" onSubmit={(e)=> AddMedicine(e)}>
				<div className="col">
					<label>Name</label>
					<input type="text" name="name" className="form-control" />
				</div>
				<div className="col">
					<label>Laboratory</label>
					<input type="text" name="laboratory" className="form-control" />
				</div>
				<div className="col">
					<label>Price</label>
					<input type="number" name="price" className="form-control" />
				</div>

				<div className="col p-3">
					<button className="btn btn-primary m-2 ">Add</button>
				</div>
			</form>
		</div>
	);
};

export default NewMedicineForm;
