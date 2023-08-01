import { useContext } from 'react';
import CardMedicine from './components/CardMedicine';
import Header from './components/Header';
import NewMedicineForm from './components/NewMedicineForm';
import { MedicineContext } from './context/MedicineContext';

function App() {

	const { listMedicine } = useContext(MedicineContext);

	return (
		<>
			<Header />
			<NewMedicineForm />
			<div className='container d-flex flex-wrap'>
			{listMedicine.map((medicine, index) => (
				<CardMedicine key={index} medicine={medicine} />
			))}
			</div>
		</>
	);
}

export default App;
