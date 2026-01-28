import { useState } from 'react';
import { useSelector } from 'react-redux'; // Para traer los datos guardados
import StatusData from '@components/statusData/StatusData';
import * as S from './styles/FormStyle';
import { Form, FormStepThree, FormStepTwo } from '@components/form/Form';
import { useAppDispatch } from '@src/custom/hooks/call/useAppDispatch';
import { createRestaurant } from '@src/slices/form/form-api';
import { RootState } from '@src/store/store';


const STEPS_CONFIG = [
    { id: 1, text: "Completa el formulario con la información del sitio." },
    { id: 2, text: "Revisa y confirma los datos ingresados." },
    { id: 3, text: "Sube las imágenes del sitio " }
];

function FormData() {
    const [currentStep, setCurrentStep] = useState(1);
    const dispatch = useAppDispatch();

    // 1. Obtenemos todos los datos acumulados en Redux y el estado de carga
    const { loading, status, ...formData } = useSelector((state: RootState) => state.form);

    // 2. Función que maneja el click del botón principal
    const handleAction = () => {
        if (currentStep < 3) {
            // Si no es el último paso, simplemente avanzamos
            setCurrentStep(prev => prev + 1);
        } else {
            // Si estamos en el paso 3, ejecutamos el envío real
            dispatch(
                createRestaurant({
                    api_url: 'http://localhost:3000/api/v1/restaurant/create',
                    api_path: '',
                    body: formData, // Enviamos el objeto con los datos de los 3 pasos
                })
            );
        }
    };

    return (
        <S.FormContainer>
            <S.FormBox>
                <S.Title>Registrar un sitio</S.Title>
                <StatusData steps={STEPS_CONFIG} activeStep={currentStep} />

                <div style={{ overflow: 'hidden', width: '100%', padding: '5px' }}>
                    {currentStep === 1 && <S.StepAnimated><Form /></S.StepAnimated>}
                    {currentStep === 2 && <S.StepAnimated><FormStepTwo /></S.StepAnimated>}
                    {currentStep === 3 && <S.StepAnimated><FormStepThree /></S.StepAnimated>}
                </div>

                <S.ButtonContainer>
                    <S.FormButton
                        $secondary
                        type="button"
                        onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
                        disabled={currentStep === 1 || loading}
                    >
                        Atrás
                    </S.FormButton>

                    <S.FormButton
                        type="button"
                        onClick={handleAction} // Vinculamos la función aquí
                        disabled={loading}
                    >
                        {loading ? 'Enviando...' : currentStep === 3 ? 'Finalizar' : 'Siguiente'}
                    </S.FormButton>
                </S.ButtonContainer>

                {status === 'success' && <p style={{color: 'green', textAlign: 'center'}}>¡Sitio creado con éxito!</p>}
                {status === 'failed' && <p style={{color: 'red', textAlign: 'center'}}>Error al guardar el sitio.</p>}

            </S.FormBox>
        </S.FormContainer>
    );
}

export default FormData;