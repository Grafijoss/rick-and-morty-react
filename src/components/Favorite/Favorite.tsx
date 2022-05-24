import { FavoriteContainer } from "./StyledComponents";
import Star from "../icons/Star";

interface Props {
  active?: boolean;
}

const Favorite = ({ active }: Props) => {
  return (
    <FavoriteContainer>
      <Star fill={active ? "#F2994A" : "#828282"} />
    </FavoriteContainer>
  );
};

export default Favorite;
