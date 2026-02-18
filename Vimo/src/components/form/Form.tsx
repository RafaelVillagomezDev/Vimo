import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/store/store';
import { DebounceField } from '@components/debounce/DebounceFile';
import { StepOneSchema, StepTwoSchema, StepThreeSchema } from '@src/schemas/validation-form-site';
import * as S from './styles/FormStyle';

// --- PASO 1 ---
export function FormStepOne({ onValidationChange }: { onValidationChange: (isValid: boolean) => void }) {
    const formData = useSelector((state: RootState) => state.form);
    const lastValidValue = useRef<boolean | null>(null); 

    const { control, trigger, formState: { isValid } } = useForm({
        resolver: zodResolver(StepOneSchema),
        mode: "onChange",
        defaultValues: formData as any
    });

    useEffect(() => {
        if (lastValidValue.current !== isValid) {
            lastValidValue.current = isValid;
            onValidationChange(isValid);
        }
    }, [isValid, onValidationChange]);

    return (
        <S.FormContainer>
            <S.Form>
                <S.FormBox>
                    <S.FormLabel htmlFor="name">Nombre del Sitio</S.FormLabel>
                    <DebounceField type="text" id="name" name="name" control={control} trigger={trigger} component={S.FormInput} placeholder="Ej: Café Exodus" label='' />
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="phone">Teléfono</S.FormLabel>
                    <S.InputWrapper>
                        <S.FlagContainer><span className="flag">🇪🇸</span><span className="prefix">+34</span></S.FlagContainer>
                        <DebounceField $hasFlag id="phone" name="phone" type="tel" control={control} trigger={trigger} component={S.FormInput} maxLength={9} placeholder="600 000 000" label='' />
                    </S.InputWrapper>
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="type_food">Categoría</S.FormLabel>
                    <DebounceField id="type_food" name="type_food" component={S.FormSelect} trigger={trigger} control={control} label=''>
                        <option value="" disabled>Seleccione una categoría</option>
                        <option value="restaurant">Restaurante</option>
                    </DebounceField>
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="email">Email</S.FormLabel>
                    <S.InputWrapper>
                        <S.FlagContainer><span className="flag">📥</span></S.FlagContainer>
                        <DebounceField $hasFlag id="email" name="email" type="email" placeholder="restaurante@gmail.es" component={S.FormInput} control={control} trigger={trigger} label='' />
                    </S.InputWrapper>
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="description">Descripción</S.FormLabel>
                    <DebounceField id="description" name="description" rows={4} placeholder="Breve descripción..." component={S.FormTextArea} control={control} trigger={trigger} label='' />
                </S.FormBox>
            </S.Form>
        </S.FormContainer>
    );
}

// --- PASO 2 ---
export function FormStepTwo({ onValidationChange }: { onValidationChange: (isValid: boolean) => void }) {
    const formData = useSelector((state: RootState) => state.form);
    const lastValidValue = useRef<boolean | null>(null);

    const { control, trigger, formState: { isValid } } = useForm({
        resolver: zodResolver(StepTwoSchema),
        mode: "onChange",
        defaultValues: formData as any
    });

    useEffect(() => {
        if (lastValidValue.current !== isValid) {
            lastValidValue.current = isValid;
            onValidationChange(isValid);
        }
    }, [isValid, onValidationChange]);

    return (
        <S.FormContainer>
            <S.Form>
                <S.FormBox>
                    <S.FormLabel htmlFor="address">Dirección</S.FormLabel>
                    <S.InputWrapper>
                        <span style={{ position: 'absolute', left: '12px', fontSize: '1.1rem', pointerEvents: 'none' }}>📍</span>
                        <DebounceField $hasIcon type="text" id="address" name="address" placeholder='Calle, Ciudad...' component={S.FormInput} control={control} trigger={trigger} label='' />
                    </S.InputWrapper>
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="web">Website</S.FormLabel>
                    <S.InputWrapper>
                        <span style={{ position: 'absolute', left: '12px', fontSize: '1.1rem', pointerEvents: 'none' }}>🌐</span>
                        <DebounceField $hasIcon type="url" id="web" name="web" placeholder='https://...' component={S.FormInput} control={control} trigger={trigger} label='' />
                    </S.InputWrapper>
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="type_food">Tipo de comida</S.FormLabel>
                    <DebounceField id="type_food" name="type_food" component={S.FormSelect} control={control} trigger={trigger} label=''>
                        <option value="" disabled>Seleccione un tipo</option>
                        <option value="china">China</option>
                        <option value="española">Española</option>
                        <option value="turca">Turca</option>
                        <option value="japonesa">Japonesa</option>
                    </DebounceField>
                </S.FormBox>
            </S.Form>
        </S.FormContainer>
    );
}

// --- PASO 3 ---
export function FormStepThree({ onImagesChange }: { onImagesChange: (files: File[], isValid: boolean) => void }) {
    const [fileName, setFileName] = useState("Ningún archivo seleccionado");
    const lastState = useRef({ isValid: false, filesCount: 0 });

    const { formState: { errors, isValid }, setValue, trigger, watch } = useForm({
        resolver: zodResolver(StepThreeSchema),
        mode: "onChange"
    });

    const images = watch("images");

    useEffect(() => {
        const filesArray = images instanceof FileList ? Array.from(images) : [];
    
        if (lastState.current.isValid !== isValid || lastState.current.filesCount !== filesArray.length) {
            lastState.current = { isValid, filesCount: filesArray.length };
            onImagesChange(filesArray, isValid);
        }
    }, [isValid, images, onImagesChange]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setFileName(files.length > 1 ? `${files.length} archivos` : files[0].name);
            setValue("images", files, { shouldValidate: true });
            await trigger("images");
        } else {
            setFileName("Ningún archivo seleccionado");
            setValue("images", null as any); 
            onImagesChange([], false);
        }
    };

    return (
        <S.FormContainer>
            <S.FileContainer>
                <S.FormLabel>Imágenes del Restaurante</S.FormLabel>
                <S.HiddenInput type="file" id="file-upload" multiple accept="image/*" onChange={handleFileChange} />
                <S.StyledDropZone htmlFor="file-upload" style={{ borderColor: errors.images ? 'red' : '#ccc' }}>
                    <span>📸 Haz clic para subir fotos</span>
                    <small>{fileName}</small>
                </S.StyledDropZone>
                {errors.images && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}>{errors.images.message as string}</span>}
            </S.FileContainer>
        </S.FormContainer>
    );
}