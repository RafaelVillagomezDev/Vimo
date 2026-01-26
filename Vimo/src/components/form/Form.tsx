import { useState } from 'react';
import * as S from './styles/FormStyle';

export function Form() {


 
    return (
        <S.FormContainer>
            <S.Form>

                <S.FormBox>
                    <S.FormLabel htmlFor="name">Nombre del Sitio</S.FormLabel>
                    <S.FormInput type="text" id="name" name="name"  autoComplete='true'  placeholder="Ej: Café Exodus" />
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="phone">Teléfono</S.FormLabel>
                    <S.InputWrapper>
                        <S.FlagContainer>
                            <span className="flag">🇪🇸</span>
                            <span className="prefix">+34</span>
                        </S.FlagContainer>
                        <S.FormInput
                            $hasFlag
                            id="phone"
                            name="phone"
                            type="tel"
                            maxLength={9}
                            autoComplete='true'
                            placeholder="600 000 000"
                        />
                    </S.InputWrapper>
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="siteType">Categoría</S.FormLabel>
                    <S.FormSelect id="siteType" name="siteType" defaultValue="">
                        <option value="" disabled>Seleccione una categoría</option>
                        <option value="restaurant">Restaurante</option>
                        <option value="museum">Museo</option>
                        <option value="park">Parque</option>
                    </S.FormSelect>
                </S.FormBox>
                <S.FormBox>
                    <S.FormLabel htmlFor="email">Email</S.FormLabel>
                    <S.InputWrapper>
                        <S.FlagContainer>
                            <span className="flag">📥</span>
                        </S.FlagContainer>
                        <S.FormInput
                            $hasFlag
                            id="email"
                            name="email"
                            type="email"
                            placeholder="test@yandydev.cloud"
                            autoComplete='true'
                        />
                    </S.InputWrapper>
                </S.FormBox>

                <S.FormBox>
                    <S.FormLabel htmlFor="description">Descripción</S.FormLabel>
                    <S.FormTextArea id="description" name="description" rows={4} placeholder="Breve descripción del sitio..." />
                </S.FormBox>
            </S.Form>
        </S.FormContainer>
    );
}

export function FormStepTwo() {

    const [fileName, setFileName] = useState("Ningún archivo seleccionado");

    const handleFileChange = (e:any) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };
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
                        <S.FormInput
                            $hasIcon
                            type="text"
                            id="address"
                            name="address"
                            placeholder='Calle, Ciudad, Código Postal...'
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
                        <S.FormInput
                            $hasIcon
                            type="url"
                            id="web"
                            name="web"
                            placeholder='url del sitio web...'
                        />
                    </S.InputWrapper>
                </S.FormBox>
                   <S.FormBox>
                    <S.FormLabel htmlFor="type_food">Tipo de comida</S.FormLabel>
                    <S.FormSelect id="type_food" name="type_food" defaultValue="">
                        <option value="" disabled>Seleccione un tipo de comida</option>
                        <option value="china">China</option>
                        <option value="española">Española</option>
                        <option value="turca">Turca</option>
                    </S.FormSelect>
                </S.FormBox>
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
