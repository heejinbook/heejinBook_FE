import styled from '@emotion/styled';

export const UserInfoContainer = styled.div`
  border-bottom: 1px solid #b9b19c;
  padding: 10px 10px 80px 0;
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
`;

export const UserNameContainer = styled.div`
  height: auto;
  display: flex;
  align-items: end;
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
  margin-left: 8px;
  font-size: 24px;
  font-weight: 550;
`;
