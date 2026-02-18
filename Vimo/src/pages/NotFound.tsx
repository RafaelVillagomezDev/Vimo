import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const NotFound = () => {
    const navigate = useNavigate();
    const error = useRouteError(); // Captura el error de la ruta

    // Lógica para personalizar el texto según el tipo de error
    let title = "¡Ups! Página no encontrado";
    let message = "Parece que la página que buscas no está disponible o la dirección ha cambiado.";
    let code = "404";

    if (isRouteErrorResponse(error)) {
        // Errores de navegación (404, 401, etc.)
        code = String(error.status);
        if (error.status === 404) {
            title = "Página no encontrada";
        } else if (error.status === 500) {
            title = "Error en la cocina";
            message = "Nuestro servidor ha tenido un problema. Intenta refrescar el menú.";
        }
    } else if (error !== undefined && error !== null) {
        // Errores de código (JS crashes, fallos de renderizado)
        title = "Algo salió mal";
        message = "Hubo un error al preparar esta sección. ¡Estamos trabajando en ello!";
        code = "ERR";
        console.error(error); // Útil para debugging
    }

    return (
        <S.Container>
            <S.Content>
                <S.ErrorCode>{code}</S.ErrorCode>
                <S.Illustration>
                    <span className="material-symbols-outlined">
                        {code === "404" ? "bomb" : "warning"}
                    </span>
                    <S.BrokenCircle />
                </S.Illustration>
                <S.Title>{title}</S.Title>
                <S.Message>{message}</S.Message>
                <S.HomeButton onClick={() => navigate('/restaurants')}>
                    <span className="material-symbols-outlined">home</span>
                    Volver a inicio
                </S.HomeButton>
            </S.Content>
        </S.Container>
    );
};

export default NotFound;


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const S = {
    Container: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f9f9f9;
        padding: 20px;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        overflow: hidden;
    `,
    Content: styled.div`
        position: relative;
        max-width: 500px;
        animation: ${fadeIn} 0.6s ease-out forwards;
        z-index: 2;
    `,
    ErrorCode: styled.h1`
        font-size: clamp(5rem, 15vw, 10rem);
        margin: 0;
        color: #e0e0e0;
        font-weight: 900;
        line-height: 1;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        z-index: -1;
        opacity: 0.6;
        user-select: none;
    `,
    Illustration: styled.div`
        position: relative;
        font-size: 5rem;
        color: #000;
        margin-bottom: 2rem;
        
        span {
            font-size: 5rem;
            display: block;
        }
    `,
    BrokenCircle: styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        width: 120px;
        height: 120px;
        border: 4px dashed #000;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ${spin} 15s linear infinite;
        opacity: 0.15;
    `,
    Title: styled.h2`
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;
        font-weight: 700;
    `,
    Message: styled.p`
        color: #666;
        line-height: 1.6;
        margin-bottom: 2.5rem;
        padding: 0 20px;
    `,
    HomeButton: styled.button`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 14px 35px;
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);

        &:hover {
            background-color: #333;
            transform: translateY(-2px);
            box-shadow: 0 15px 25px rgba(0,0,0,0.15);
        }

        span {
            font-size: 1.2rem;
        }
    `
};