import styled from 'styled-components';

export const ContainerConfigurator = styled.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    max-height: 900px;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const MenuContainer = styled.ul`
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
`;

export const MenuItem = styled.li<{ open: boolean }>`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => (props.open ? '#fff' : 'inherit')};
    transition: background-color 0.3s ease-in-out;
`;

export const SubMenu = styled.ul<{ open: boolean }>`
    list-style: none;
    max-height: ${(props) => (props.open ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #fff;
    padding-left: 10px;
    margin: 0;
`;

export const SubMenuItem = styled.li`
    padding: 10px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        transform: scale(1.05);
    }
`;

export const Checkbox = styled.input`
    width: 15px; /* Tamaño más grande */
    height: 15px; /* Tamaño más grande */
    margin-right: 5px;
    cursor: pointer;
    appearance: none; /* Elimina el estilo por defecto del checkbox */
    border-radius: 4px; /* Borde redondeado */
    border: 2px solid #2c3e50; /* Borde de color */
    background-color: #fff; /* Fondo blanco */
    position: relative;

    &:checked {
        background-color: black; /* Color de fondo cuando está marcado */
        border-color: gray; /* Cambio de color del borde cuando está marcado */
    }

    &:checked::after {
        content: '✔'; /* Símbolo del visto */
        position: absolute;
        top: 50%;
        left: 50%;
        color: white; /* Color del check */
        font-size: 16px; /* Tamaño del check */
        transform: translate(-50%, -50%); /* Centra el check dentro del checkbox */
    }

    &:hover {
        border-color: black; /* Color de borde al pasar el mouse */
    }
`;

export const Arrow = styled.span<{ open: boolean }>`
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0)')};
`;
