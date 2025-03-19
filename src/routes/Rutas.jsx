import { useRoutes } from 'react-router';
import Cobertura from '../pages/Cobertura';
import Contacto from '../pages/Contacto';
import FormacionDeportiva from '../pages/FormacionDeportiva';
import Historia from '../pages/Historia';
import Inicio from '../pages/Inicio';
import Ludicas from '../pages/Ludicas';
import ManualConvivencia from '../pages/ManualConvivencia';
import MisionVision from '../pages/MisionVision';
import Modalidades from '../pages/Modalidades';
import NoEncontrado from '../pages/NoEncontrado';
import PerfilesCCC from '../pages/PerfilesCCC';
import PQRS from '../pages/PQRS';

const Rutas = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Inicio />,
    },
    {
      path: '/cobertura',
      element: <Cobertura />,
    },
    {
      path: '/contacto',
      element: <Contacto />,
    },
    {
      path: '/formacion-deportiva',
      element: <FormacionDeportiva />,
    },
    {
      path: '/historia',
      element: <Historia />,
    },
    {
      path: '/ludicas',
      element: <Ludicas />,
    },
    {
      path: '/manual-convivencia',
      element: <ManualConvivencia />,
    },
    {
      path: '/mision-vision',
      element: <MisionVision />,
    },
    {
      path: '/modalidades',
      element: <Modalidades />,
    },
    {
      path: '/perfiles-ccc',
      element: <PerfilesCCC />,
    },
    {
      path: '/pqrs',
      element: <PQRS />,
    },
    {
      path: '/*',
      element: <NoEncontrado />,
    },
  ]);
  return routes;
};

export default Rutas;