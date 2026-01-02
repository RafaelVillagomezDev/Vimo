
import { CardText, CardBox, CardBoxImage, CardBoxTitle, CardContainer, CardImage, LinkCard } from "./styles/cardSlide";

function CardSlide({ data }: any) {

   const { name, address, type_food } = data

   return (
      <>
         {
            data.images.map((image: { url: string | undefined; }, index: number) => (
               <LinkCard to={"restaurants/" + data.id} key={index}>
                  <CardContainer key={index + "**" + data.id}>

                     <CardBoxImage>
                        <CardImage src={image.url} loading="lazy"></CardImage>
                     </CardBoxImage>
                     <CardBox>
                        <CardBoxTitle>{name}</CardBoxTitle>
                        <CardText>{address}</CardText>
                        <CardText>{type_food}</CardText>
                     </CardBox>
                  </CardContainer>
               </LinkCard>
            ))}


      </>
   )

}


export default CardSlide;