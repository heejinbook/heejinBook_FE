import styled from '@emotion/styled';

type Props = {
  view: string;
};

export const LibraryBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  flex-grow: 1;
`;

export const LibraryBar = styled.div<Props>`
  display: flex;
  align-items: start;
  margin: 0;
  p {
    cursor: pointer;
    font-size: 20px;
    color: #503f15;
    margin: 0 0 5px 15px;
    font-weight: ${(props) => (props.view === 'list' ? 'bolder' : 'normal')};
    border-bottom: ${(props) => (props.view === 'list' ? '3px solid #503f15' : 'none')};
    &:nth-of-type(2) {
      font-weight: ${(props) => (props.view === 'review' ? 'bolder' : 'normal')};
      border-bottom: ${(props) => (props.view === 'review' ? '3px solid #503f15' : 'none')};
    }
  }
`;
