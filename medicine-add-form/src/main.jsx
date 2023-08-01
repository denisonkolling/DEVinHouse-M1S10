import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import { MedicineContextProvider } from './context/MedicineContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<MedicineContextProvider>
		<App />
	</MedicineContextProvider>
);
