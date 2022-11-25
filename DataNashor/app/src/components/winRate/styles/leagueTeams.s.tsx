import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';
import Teams from '../../../assets/svg/nashor_teams_reversed.svg';

export const TeamsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 328px;
  height: 22px;
  margin-top: 18px;
  background-image: url(${Teams});
`;
