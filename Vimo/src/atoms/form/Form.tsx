import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import StatusData from '@components/statusData/StatusData';
import * as S from './styles/FormStyle';
import { FormStepOne, FormStepThree, FormStepTwo } from '@components/form/Form';
import { useAppDispatch } from '@src/custom/hooks/call/useAppDispatch';
import { createRestaurant, createImages } from '@src/slices/form/form-api';
import { RootState } from '@src/store/store';
import { FullFormSchema } from '@src/schemas/validation-form-site';

const STEPS_CONFIG = [
    { id: 1, text: "Completa el formulario con la información del sitio." },
    { id: 2, text: "Revisa y confirma los datos ingresados." },
    { id: 3, text: "Sube las imágenes del sitio " }
];

function FormRegister() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isStepValid, setIsStepValid] = useState(false); // Estado para habilitar/deshabilitar botón
    const [localImages, setLocalImages] = useState<File[]>([]);

    const dispatch = useAppDispatch();
    const { loading, status, ...formData } = useSelector((state: RootState) => state.form);

    // Handle para los pasos 1 y 2
    const handleStepValidation = useCallback((isValid: boolean) => {
        setIsStepValid(isValid);
    }, []);

    // Handle para el paso 3 (Imágenes)
    const handleImages = useCallback((files: File[], isValid: boolean) => {
        setLocalImages(files);
        setIsStepValid(isValid);
    }, []);

    const handleAction = async () => {
        if (currentStep < 3) {
            setCurrentStep(prev => prev + 1);
            setIsStepValid(false); // Resetear al cambiar de paso hasta que el nuevo hijo valide
        } else {

            const result = FullFormSchema.safeParse({ ...formData, images: localImages });

            if (!result.success) {
                alert("Por favor, revisa que todos los campos sean correctos.");
                return;
            }

            try {

                const restaurantResponse = await dispatch(
                    createRestaurant({
                        api_url: 'http://localhost:3000/api/v1/restaurant/create',
                        api_path: "",
                        body: formData,
                    })
                ).unwrap();

                //  Si el restaurante se creó, subir imágenes (FormData)
                const { id } = restaurantResponse?.data || {};

                if (id && localImages.length > 0) {
                    const imgFormData = new FormData();
                    localImages.forEach(file => imgFormData.append('images', file));


                    await createImages({
                        api_url: `http://localhost:3000/api/v1/image/create/restaurant/${id}`,
                        api_path: "",
                        body: imgFormData
                    })

                }

                return restaurantResponse;
            } catch (error) {
                console.error("Error en el registro:", error);
            }
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <FormStepOne onValidationChange={handleStepValidation} />;
            case 2:
                return <FormStepTwo onValidationChange={handleStepValidation} />;
            case 3:
                return <FormStepThree onImagesChange={handleImages} />;
            default:
                return null;
        }
    };

    return (
        <S.FormContainer>
            <S.FormBox>
                <S.Title>Registrar un sitio</S.Title>
                <StatusData steps={STEPS_CONFIG} activeStep={currentStep} />

                <div style={{ overflow: 'hidden', width: '100%', padding: '5px' }}>
                    {renderStep()}
                </div>

                <S.ButtonContainer>
                    <S.FormButton
                        $secondary
                        type="button"
                        onClick={() => {
                            setCurrentStep(prev => Math.max(prev - 1, 1));
                            setIsStepValid(true); // Al volver atrás, asumimos que el paso previo ya era válido
                        }}
                        disabled={currentStep === 1 || loading}
                    >
                        Atrás
                    </S.FormButton>

                    <S.FormButton
                        type="button"
                        onClick={handleAction}
                        disabled={loading || !isStepValid} // Aquí bloqueamos el flujo
                    >
                        {loading ? 'Procesando...' : currentStep === 3 ? 'Finalizar' : 'Siguiente'}
                    </S.FormButton>
                </S.ButtonContainer>

                {status === 'success' && <p style={{ color: 'green', textAlign: 'center' }}>¡Guardado correctamente!</p>}
                {status === 'failed' && <p style={{ color: 'red', textAlign: 'center' }}>Error en el servidor.</p>}
            </S.FormBox>
        </S.FormContainer>
    );
}

export default FormRegister;