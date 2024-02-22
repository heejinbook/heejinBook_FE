import styled from '@emotion/styled';
import spinner from '../../../assets/spinner.gif';

export function Loading() {
  return (
    <LoadingText>
      <img src={spinner} />
    </LoadingText>
  );
}

const LoadingText = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
