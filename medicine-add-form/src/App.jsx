import CardMedicine from './components/CardMedicine';
import Header from './components/Header';
import NewMedicineForm from './components/NewMedicineForm';
import { MedicineContextProvider } from './context/MedicineContext';


function App() {
	return (
		<>
			<Header />
			<MedicineContextProvider>
				<NewMedicineForm />
				<CardMedicine props={{name: 'Centrum Vitamin', laboratory: 'clamed', price: '69,99', favorite: false}}/>
			</MedicineContextProvider>
		</>
	);
}

export default App;
