import Header from './components/Header';
import NewMedicineForm from './components/NewMedicineForm';
import { MedicineContextProvider } from './context/MedicineContext';

function App() {
	return (
		<>
			<Header />
			<MedicineContextProvider>
				<NewMedicineForm />
			</MedicineContextProvider>
		</>
	);
}

export default App;
