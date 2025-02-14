import { useState } from 'react';
import { ContainerConfigurator } from './styles/ConfiguratorStyle';
import { CardSubtitle } from '../cardPost/styles/CardPostStyle';

function Configurator(){

    return (
        <>
          <ContainerConfigurator>
             <CardSubtitle>Tipo de comida</CardSubtitle>
          </ContainerConfigurator>
        </>
    )
}

export default Configurator;