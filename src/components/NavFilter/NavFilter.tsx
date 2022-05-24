import {
  NavFilterContainer,
  NavFilterList,
  NavFilterBUtton
} from "./StyledComponents";

const NavFilter = () => {
  return (
    <NavFilterContainer>
      <NavFilterList>
        <NavFilterBUtton active>All</NavFilterBUtton>
        <NavFilterBUtton>Female</NavFilterBUtton>
        <NavFilterBUtton>Male</NavFilterBUtton>
        <NavFilterBUtton>Genderless</NavFilterBUtton>
        <NavFilterBUtton>Alive</NavFilterBUtton>
        <NavFilterBUtton>Dead</NavFilterBUtton>
        <NavFilterBUtton>Unknown</NavFilterBUtton>
      </NavFilterList>
    </NavFilterContainer>
  );
};

export default NavFilter;
