import styled from '@emotion/styled';
import IconInfo from './info.svg';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export function InfoToolTip() {
  return (
    <Container>
      password
      <img
        src={IconInfo}
        data-tooltip-content="8 ~ 20자 사이 영문, 숫자"
        data-tooltip-id="password"
      />
      <Tooltip
        id="password"
        place="bottom"
        style={{ backgroundColor: '#503f15', color: 'white', fontWeight: 'bold' }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  img {
    margin-left: 3px;
    width: 16px;
    height: 16px;
  }
`;
