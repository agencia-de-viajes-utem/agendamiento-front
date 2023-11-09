// App.jsx
//hola xDD
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/home'
import NotFound from './Pages/notFound'; // Página para manejar rutas no encontradas
import VerPaquetes from './Pages/verPaquetes'; // Página para manejar la lista de paquetes
import VerDetalle from './Pages/verDetalle'; // Página para manejar los detalles de un paquete

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ver-paquetes" element={<VerPaquetes />} />
        <Route path="/detalle" element={<VerDetalle />} />
      </Routes>
    </Router>
  );
};

export default App;
