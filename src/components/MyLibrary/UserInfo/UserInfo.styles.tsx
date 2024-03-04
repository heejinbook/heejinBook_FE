import styled from '@emotion/styled';

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 300px;
  border-bottom: 1px solid #b9b19c;
  padding: 10px 10px 0 0;
`;

export const EditIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 40px;
  img {
    cursor: pointer;
    width: 24px;
    height: 24px;
    stroke: #503f15;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-bottom: 10px;
`;

export const UserNameContainer = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  p {
    height: auto;
    margin: 0;
    align-items: end;
    font-size: 18px;
    font-weight: normal;
  }
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  font-size: 24px;
  font-weight: 550;
`;
