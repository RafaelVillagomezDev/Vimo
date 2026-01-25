import { useState } from 'react';
import StatusData from '@components/statusData/StatusData';
import * as S from './styles/FormStyle';
import { Form, FormStepTwo } from '@components/form/Form';


const STEPS_CONFIG = [
    { id: 1, text: "Completa el formulario con la información del sitio." },
    { id: 2, text: "Revisa y confirma los datos ingresados." },
    { id: 3, text: "Confirma los datos ingresados." },
];

function FormData() {

    const [currentStep, setCurrentStep] = useState(1);

    return (
        <S.FormContainer>
            <S.FormBox>
                <S.Title>Registrar un sitio</S.Title>
                <StatusData
                    steps={STEPS_CONFIG}
                    activeStep={currentStep}
                />

                <div style={{ overflow: 'hidden', width: '100%', padding: '5px' }}>
                    
                    {currentStep === 1 && (
                        <S.StepAnimated>
                            <Form />
                        </S.StepAnimated>
                    )}
                    
                    {currentStep === 2 && (
                        <S.StepAnimated>
                            <FormStepTwo />
                        </S.StepAnimated>
                    )}
                    
                    {currentStep === 3 && (
                        <S.StepAnimated>
                            <Form />
                        </S.StepAnimated>
                    )}
                    
                </div>

                <S.ButtonContainer>
                    <S.FormButton
                        $secondary
                        type="button"
                        onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
                        disabled={currentStep === 1}
                    >
                        Atrás
                    </S.FormButton>

                    <S.FormButton
                        type="button"
                        onClick={() => setCurrentStep(prev => Math.min(prev + 1, 3))}
                    >
                        {currentStep === 3 ? 'Finalizar' : 'Siguiente'}
                    </S.FormButton>
                </S.ButtonContainer>

            </S.FormBox>




        </S.FormContainer>
    );
}

export default FormData;