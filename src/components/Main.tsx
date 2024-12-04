import Portfolio from './Portfolio.js';
import Servicios from './Servicios.js';
import Presentacion from './Presentacion.js';
import EducacionHabilidades from './EducacionHabilidades.jsx';
import AcercaDeMI from './AcercaDeMi.js';
import Contactame from './Contactame.js';

const Main = () => {
    return (
        <div className="absolute w-9/12 h-full min-h-screen overflow-auto right-0">
            <Presentacion />
            <AcercaDeMI />          
            <EducacionHabilidades />
            <Portfolio />
            <Servicios />
            <Contactame />
        </div>
    )
}

export default Main;