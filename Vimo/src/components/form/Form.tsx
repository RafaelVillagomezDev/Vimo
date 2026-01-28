import { useState } from 'react';
import * as S from './styles/FormStyle';
import { RootState } from '../../../src/store/store';
import { DebounceField } from '@components/debounce/DebounceFile';
import { useSelector } from 'react-redux';
import { FormSiteSchema } from '@src/schemas/validation-form-site';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
export function Form() {


    const formData = useSelector((state: RootState) => state.form);

    const { control, trigger } = useForm({
        resolver: zodResolver(FormSiteSchema),
        mode: "onChange",
        defaultValues: formData as any
    });

    return (
        <S.FormContainer>
            <S.Form>

                <S.FormBox>
                    <S.FormLabel htmlFor="name">Nombre del Sitio</S.FormLabel>
                    <DebounceField type="text" id="name" name="name" autoComplete='true' placeholder="Ej: Café Exodus"
                        control={control}
                        label=''
                        trigger={trigger}
                        component={S.FormInput}
                       
                    />
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="phone">Teléfono</S.FormLabel>
                    <S.InputWrapper>
                        <S.FlagContainer>
                            <span className="flag">🇪🇸</span>
                            <span className="prefix">+34</span>
                        </S.FlagContainer>
                        <DebounceField
                            $hasFlag
                            id="phone"
                            name="phone"
                            type="tel"
                            label={''}
                            control={control}
                            trigger={trigger}
                            component={S.FormInput}
                            maxLength={9}
                            autoComplete='true'
                            placeholder="600 000 000"
                        

                        />
                    </S.InputWrapper>
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="type_food">Categoría</S.FormLabel>
                    <DebounceField
                        id="type_food"
                        name="type_food"
                        value={formData.type_food}
                        component={S.FormSelect}
                        label={''}
                        trigger={trigger}
                        control={control}

                    >
                        <option value="" disabled>Seleccione una categoría</option>
                        <option value="restaurant">Restaurante</option>
                        <option value="museum">Museo</option>
                        <option value="park">Parque</option>

                    </DebounceField>


                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="email">Email</S.FormLabel>
                    <S.InputWrapper>
                        <S.FlagContainer>
                            <span className="flag">📥</span>
                        </S.FlagContainer>
                        <DebounceField
                            $hasFlag
                            id="email"
                            name="email"
                            type="email"
                            placeholder="test@yandydev.cloud"
                            autoComplete='true'
                            component={S.FormInput}
                            label={''}
                            control={control}
                            trigger={trigger}
                      

                        />
                    </S.InputWrapper>
                </S.FormBox>

                <S.FormBox>
                    <S.FormLabel htmlFor="description">Descripción</S.FormLabel>
                    <DebounceField id="description" name="description" rows={4} placeholder="Breve descripción del sitio..."
                         component={S.FormTextArea} label={''}
                        control={control} trigger={trigger} />
                </S.FormBox>
            </S.Form>
        </S.FormContainer>
    );
}

export function FormStepTwo() {


    const formData = useSelector((state: RootState) => state.form);

    const { control, trigger} = useForm({
        resolver: zodResolver(FormSiteSchema),
        mode: "onChange",
        defaultValues: formData as any
    });

    return (
        <S.FormContainer>
            <S.Form>
                <S.FormBox>
                    <S.FormLabel htmlFor="address">Dirección</S.FormLabel>
                    <S.InputWrapper>
                        <span style={{
                            position: 'absolute',
                            left: '12px',
                            fontSize: '1.1rem',
                            pointerEvents: 'none'
                        }}>
                            📍
                        </span>
                        <DebounceField
                            $hasIcon
                            type="text"
                            id="address"
                            name="address"
                            placeholder='Calle, Ciudad, Código Postal...'
                         
                            component={S.FormInput}
                            label={''}
                            control={control}
                            trigger={trigger}   
                        />
                    </S.InputWrapper>
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="web">Website</S.FormLabel>
                    <S.InputWrapper>
                        <span style={{
                            position: 'absolute',
                            left: '12px',
                            fontSize: '1.1rem',
                            pointerEvents: 'none'
                        }}>
                            🌐
                        </span>
                        <DebounceField
                            $hasIcon
                            type="url"
                            id="web"
                            name="web"
                            placeholder='url del sitio web...'
                           
                            component={S.FormInput}
                            label={''}
                            control={control}
                            trigger={trigger}

                        />
                    </S.InputWrapper>
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="type_food">Tipo de comida</S.FormLabel>
                    <DebounceField id="type_food" name="type_food" component={S.FormSelect} label={''}
                        control={control} trigger={trigger}>
                        <option value="" disabled>Seleccione un tipo de comida</option>
                        <option value="china">China</option>
                        <option value="española">Española</option>
                        <option value="turca">Turca</option>
                    </DebounceField>
                </S.FormBox>
            </S.Form>
        </S.FormContainer>
    );
}

export function FormStepThree() {

    const [fileName, setFileName] = useState("Ningún archivo seleccionado");

    const handleFileChange = (e: any) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };
    return (
        <S.FormContainer>
            <S.Form>
                <S.FileContainer>
                    <S.FormLabel>Imágenes del Restaurante</S.FormLabel>
                    <S.HiddenInput
                        type="file"
                        id="file-upload"
                        multiple

                        onChange={handleFileChange}

                    />
                    <S.StyledDropZone htmlFor="file-upload">
                        <span>Haz clic o arrastra tus fotos</span>
                        <small>{fileName}</small>
                    </S.StyledDropZone>
                </S.FileContainer>

            </S.Form>
        </S.FormContainer>
    );
}