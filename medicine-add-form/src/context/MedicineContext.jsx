import { createContext, useState } from 'react';

export const MedicineContext = createContext();

export const MedicineContextProvider = ({ children }) => {

	const [listMedicine, setListMedicine] = useState(JSON.parse(localStorage.getItem('listMedicine')) || []);

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
    localStorage.setItem('listMedicine', JSON.stringify(newListMedicine))
		setListMedicine(newListMedicine);
		console.log(newListMedicine);
		alert('Medicine added successfuly!');
	};

  const FavoriteMedicine = (id) => {
    const list = listMedicine.map((item) => {
      if (item.id == id) {
        item.favorite = !item.favorite;
      }

      return item;
    });
  
    setListMedicine(list);
  };
  
  
	return (
		<MedicineContext.Provider
			value={{ listMedicine, AddMedicine, FavoriteMedicine }}>
			{children}
		</MedicineContext.Provider>
	);
};

