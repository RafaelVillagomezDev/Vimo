import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useController, Control, UseFormTrigger } from 'react-hook-form';
import { updateFormField } from '@src/slices/form/form-slice';
import * as S from '../form/styles/FormStyle';

interface Props {
    name: string;
    control: Control<any>;
    trigger: UseFormTrigger<any>; // Añadimos trigger para validación forzada
    label: string;
    component: React.ElementType;
    rules?: any; 
    [key: string]: any;
}

export const DebounceField = ({ 
    name, 
    control, 
    trigger, // Necesario para validar antes del dispatch
    label, 
    component: Component, 
    rules, 
    ...props 
}: Props) => {
    const dispatch = useDispatch();
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error }
    } = useController({
        name,
        control,
        rules,
        defaultValue: "",
    });

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newVal = e.target.value;
        
        // Actualizamos RHF inmediatamente para que el input sea fluido
        onChange(newVal);

        // Debounce
        if (timerRef.current) clearTimeout(timerRef.current);
        
        timerRef.current = setTimeout(async () => {
            // Forzamos la validación de este campo específico
            const isValid = await trigger(name);
            
            // Solo despachamos a Redux si los datos cumplen las reglas
            if (isValid) {
                dispatch(updateFormField({ field: name as any, value: newVal }));
            }
        }, 500);
    };

    const handleBlurAction = async () => {
        onBlur();
        // Validamos al salir para asegurar que Redux tenga el valor final si es correcto
        const isValid = await trigger(name);
        if (isValid) {
            dispatch(updateFormField({ field: name as any, value: value }));
        }
    };

    return (
        <S.FormBox>
            <S.FormLabel htmlFor={name}>{label}</S.FormLabel>
            <Component
                {...props}
                id={name}
                ref={ref} // Cambiado de inputRef a ref (estándar de RHF)
                value={value}
                onChange={handleChange}
                onBlur={handleBlurAction}
                $hasError={!!error}
            />
            {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
        </S.FormBox>
    );
};