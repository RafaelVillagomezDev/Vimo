import { createRoot } from 'react-dom/client';
import '../reset.css'; // Importa tu archivo de reset CSS
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingScreen from './pages/LoadingScreen';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const Home = lazy(() => import('./pages/Home'));
const Experience = lazy(() => import('./pages/Experience'));
const Destination = lazy(() => import('./pages/Destination'));
const History = lazy(() => import('./pages/History'));
const Restaurants = lazy(() => import('./pages/Restaurants'));
const Restaurant = lazy(() => import('./pages/Restaurant'));
const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement); // Crea un contenedor raíz

    // Definir las rutas utilizando createRoutesFromElements
    const routes = createRoutesFromElements(
        <>
            <Route path="/">
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="restaurants" element={<Restaurants />} />
                <Route path="restaurants/:id" element={<Restaurant />} />
                <Route path="history" element={<History />} />
                <Route path="experiences" element={<Experience />} />
                <Route path="destinations" element={<Destination />} />
            </Route>
        </>
    );

    // Crear el enrutador principal
    const router = createBrowserRouter(routes);

    root.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback={<LoadingScreen />}>
                    <RouterProvider router={router} />
                </Suspense>
            </PersistGate>
        </Provider>
    );
}
