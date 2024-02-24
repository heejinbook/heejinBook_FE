import styled from '@emotion/styled';

export const LoadingContainer = styled.div`
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

export const LoadingText = styled.span<{ delay: number }>`
  font-size: 45px;
  font-weight: bold;
  color: #503f15;
  display: inline-block;
  animation: loading 1.5s infinite;
  animation-delay: ${(props) => props.delay}s;
  @keyframes loading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
