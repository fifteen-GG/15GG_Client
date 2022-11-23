import { HeaderWrapper, LogoWrapper } from './styles/header.s';
import gg_logo_full from '../../assets/svg/gg_logo_full.svg';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper src={gg_logo_full} />
    </HeaderWrapper>
  );
};
