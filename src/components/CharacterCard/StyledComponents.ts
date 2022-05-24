import styled from "styled-components";
import { P } from "../commons/html";
import { FavoriteContainer } from "../Favorite";

const Card = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  height: 140px;
  overflow: hidden;
  width: 100%;
`;

const CardImage = styled.div`
  background-image: ${({ image }) => `url('${image}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  float: left;
  height: 140px;
  position: relative;
  width: 140px;

  ${FavoriteContainer} {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;

const CardInfo = styled.div`
  float: left;
  height: 100%;
  padding: 20px 15px;
  width: calc(100% - 140px);
`;

const SpecieStatus = styled.div`
  line-height: 10px;
  p {
    display: inline-block;
    vertical-align: middle;
  }
`;

const IsAliveCircle = styled.span`
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  display: inline-block;
  height: 6px;
  margin-right: 5px;
  vertical-align: middle;
  width: 6px;
`;

const Label = styled(P)`
  font-size: 10px;
`;

const Name = styled(P)`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Location = styled(P)`
  font-size: 12px;
`;

export {
  Card,
  CardImage,
  CardInfo,
  IsAliveCircle,
  SpecieStatus,
  Label,
  Name,
  Location
};
