import { createContext, useState } from 'react';

export const MedicineContext = createContext();

export const MedicineContextProvider = ({ children }) => {
	const [listMedicine, setListMedicine] = useState([]);

	const AddMedicine = (name, laboratory, price) => {
		if (name.length == '' || laboratory.length == '' || price == 0) {
			alert('Preencha todas as informações para cadastrar o medicamento!');
			return;
		}

		const newMedicine = {
			id: listMedicine.length + 1,
			name: name,
			laboratory: laboratory,
			price: price,
			favorite: false,
		};

		const newListMedicine = [...listMedicine, newMedicine];

		setListMedicine(newListMedicine);
		console.log(newListMedicine);
		alert('Medicine added successfuly!');
	};

	const favoriteMedicine = (id) => {
		//Função favoritar medicamento
	};

	return (
		<MedicineContext.Provider
			value={{ listMedicine, AddMedicine }}
			favoriteMedicine={favoriteMedicine}>
			{children}
		</MedicineContext.Provider>
	);
};
