import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

export const UsersInfoWrapper = styled.div`
  display: flex;
  width: 344px;
  height: 172px;
  margin: 28px 14px 18px 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  color: white;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 118px;
  height: 172px;
  justify-content: space-between;
`;

export const UserWrapper = styled.div`
  display: flex;
  width: 118px;
  height: 28px;
  padding: 2px;
  align-items: center;
  justify-content: space-between;
`;

export const UserImgWrapper = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export const UserImg = styled.img`
  width: 28px;
  height: 28px;
`;
enum TeamNameEnum {
  RED,
  BLUE,
}
interface TeamStatProps {
  team: TeamNameEnum;
}

export const UserName = styled.div<TeamStatProps>`
  display: flex;
  align-items: center;
  width: 82px;
  height: 14px;
  font-size: 14px;
  font-weight: 500;
  justify-content: ${(props) =>
    `${props.team === TeamNameEnum.RED ? 'none' : 'right'}`};
`;

export { TeamNameEnum as Team };
