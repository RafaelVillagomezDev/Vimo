import { createRoot } from 'react-dom/client';
import '../reset.css'; 
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
import { ThemeProvider } from 'styled-components';
import { theme, ThemeType } from './styles/themeProvider';
import NotFound from './pages/NotFound'; // Importación estática (Síncrona)

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}

const Home = lazy(() => import('./pages/Home'));
const Experience = lazy(() => import('./pages/Experience'));
const Destination = lazy(() => import('./pages/Destination'));
const Restaurants = lazy(() => import('./pages/Restaurants'));
const Restaurant = lazy(() => import('./pages/Restaurant'));
const Register = lazy(() => import('./pages/Register'));

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);

   const routes = createRoutesFromElements(
        <Route 
            path="/" 
            errorElement={<NotFound />} 
        >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="restaurants/:id" element={<Restaurant />} />
            <Route path="experiences" element={<Experience />} />
            <Route path="destinations" element={<Destination />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    );

    const router = createBrowserRouter(routes);

    root.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Suspense fallback={<LoadingScreen />}>
                        <RouterProvider router={router} />
                    </Suspense>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}