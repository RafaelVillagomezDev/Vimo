import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateFormField } from '@src/slices/form/form-slice';
import * as S from '../form/styles/FormStyle';

interface Props {
    name: string;
    value: string;
    label: string;
    component: React.ElementType; 
    [key: string]: any;
}

export const DebounceField = ({ name, value: reduxValue, label, component: Component, ...props }: Props) => {
    const dispatch = useDispatch();
    const [localValue, setLocalValue] = useState(reduxValue);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);


    useEffect(() => {
        setLocalValue(reduxValue);
    }, [reduxValue]);

 
    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newVal = e.target.value;
        setLocalValue(newVal);

        // Limpiamos el timeout anterior antes de crear uno nuevo
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            dispatch(updateFormField({ field: name as any, value: newVal }));
        }, 500); // 500ms es el estándar ideal para no saturar Redux
    };

    const handleBlur = () => {
       
        if (timerRef.current) clearTimeout(timerRef.current);
        dispatch(updateFormField({ field: name as any, value: localValue }));
    };

    return (
        <S.FormBox>
            <S.FormLabel htmlFor={name}>{label}</S.FormLabel>
            <Component
                {...props}
                id={name}
                name={name}
                value={localValue}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </S.FormBox>
    );
};