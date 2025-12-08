
import {CardText , CardBox, CardBoxImage, CardBoxTitle, CardContainer, CardImage, CardSubtitle, LinkCard } from "./styles/cardSlide";

function CardSlide({data}:any) {

const {name,address,type_food}=data

return (
    <>
       {
        data.images.map((image: { url: string | undefined; },index :number) => (
           <LinkCard to={"restaurants/"+data.id}>
        <CardContainer key={index}>
           
              <CardBoxImage>
              <CardImage  src={image.url} loading="lazy"></CardImage>
            </CardBoxImage>
            <CardBox>
               <CardBoxTitle>{name}</CardBoxTitle>
               <CardText><CardSubtitle>{address}</CardSubtitle></CardText>
              <CardText><CardSubtitle>{type_food}</CardSubtitle></CardText>
            </CardBox>
            
           
            
            
        </CardContainer>
         </LinkCard>
       ))}
    
       
    </>
)

}


export default CardSlide;