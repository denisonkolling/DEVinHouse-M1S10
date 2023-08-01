import { createContext, useState } from 'react';

export const MedicineContext = createContext();


export const MedicineContextProvider = ({ children }) => {

	const [list, setList] = useState([]);

  const AddMedicine = () => {

  }

  const favoriteMedicine = (id) => {

  }

	return (
		<MedicineContext.Provider value={{ list, setList }} favoriteMedicine={favoriteMedicine}>
			{children}
		</MedicineContext.Provider>
	);
};
