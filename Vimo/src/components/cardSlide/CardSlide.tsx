
import { Card } from "@components/cardPost/styles/CardPostStyle";
import { CardText, CardBox, CardBoxImage, CardBoxTitle, CardContainer, CardImage, LinkCard, CardIcon, BuuttonLink } from "./styles/cardSlide";

function CardSlide({ data }: any) {

   const { name, address, type_food, web } = data

   return (
      <>
         {
            data.images.map((image: { url: string | undefined; }, index: number) => (

               <CardContainer key={index + "**" + data.id}>
                  <LinkCard to={"restaurants/" + data.id} key={index}>
                     <CardBoxImage>
                        <CardImage src={image.url} loading="lazy"></CardImage>
                     </CardBoxImage>
                  </LinkCard>
                  <CardBox>
                     <CardBoxTitle>{name}<CardIcon color="orange">workspace_premium</CardIcon></CardBoxTitle>
                     <CardText><CardIcon color="black">map</CardIcon>{address}</CardText>
                     <CardText><CardIcon color="black">flatware</CardIcon>{type_food}</CardText>
                     <CardText><LinkCard to={web}><CardIcon color="black">web_traffic</CardIcon>{web}</LinkCard></CardText>
                     <CardText><BuuttonLink to={"restaurants/" + data.id}>Ver más</BuuttonLink></CardText>
                  </CardBox>
               </CardContainer>

            ))}


      </>
   )

}


export default CardSlide;