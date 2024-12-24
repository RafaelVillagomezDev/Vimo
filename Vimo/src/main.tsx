import { createRoot } from 'react-dom/client';
import '../reset.css'; // Importa tu archivo de reset CSS
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';

const LoadingScreen = lazy(() => import('./pages/LoadingScreen'));
const Home = lazy(() => import('./pages/Home'));
const Experience = lazy(() => import('./pages/Experience'));
const Destination = lazy(() => import('./pages/Destination'));
const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement); // Crea un contenedor raíz

    // Definir las rutas utilizando createRoutesFromElements
    const routes = createRoutesFromElements(
        <>
            <Route path="/">
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="experiences" element={<Experience />} />
                <Route path="destinations" element={<Destination />} />
            </Route>
        </>
    );

    // Crear el enrutador principal
    const router = createBrowserRouter(routes);

    root.render(
        <Suspense fallback={<LoadingScreen />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}
