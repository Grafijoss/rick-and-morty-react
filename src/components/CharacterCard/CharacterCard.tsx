import {
  Card,
  CardImage,
  CardInfo,
  IsAliveCircle,
  SpecieStatus,
  Label,
  Name,
  Location
} from "./StyledComponents";

import Favorite from "../Favorite";

interface Props {
  image: string;
  name: string;
  location: {
    name: string;
    url: string;
  };
  status: string;
  species: string;
}

const CharacterCard = ({ image, name, location, status, species }: Props) => {
  const bgStatus = status.toLowerCase() === "alive" ? "#27AE60" : "#EB5757";

  return (
    <Card>
      <CardImage image={image}>
        <Favorite />
      </CardImage>
      <CardInfo>
        <SpecieStatus>
          <IsAliveCircle bg={bgStatus} />
          <Label>
            {status} - {species}
          </Label>
        </SpecieStatus>
        <Name>{name}</Name>
        <Label>Location:</Label>
        <Location>{location.name}</Location>
      </CardInfo>
    </Card>
  );
};

export default CharacterCard;
