import Portfolio from './Portfolio.js';
import Servicios from './Servicios.js';
import Presentacion from './Presentacion.js';
import EducacionHabilidades from './EducacionHabilidades.jsx';
import AcercaDeMI from './AcercaDeMi.js';
import Contactame from './Contactame.js';

const Main = () => {
    return (
        <div className="flex-1 px-5 lg:px-0">
            <div className="flex flex-col justify-start lg:items-center lg:justify-center">
                <Presentacion />
                <AcercaDeMI />
                <EducacionHabilidades />
                <Portfolio />
                <Servicios />
                <Contactame />
            </div>
        </div>
    );
}

export default Main;
