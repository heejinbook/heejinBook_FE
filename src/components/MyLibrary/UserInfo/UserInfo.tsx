import * as S from './UserInfo.styles';
import IconNoImage from '../../../assets/svg/noImageUser.svg';
import IconPencil from '../../../assets/svg/pencil.svg';
import { userQuery } from '../../../querys/userQuery';
import { useState } from 'react';
import EditNickname from './EditNickname/EditNickname';

export type UserType = {
  profileUrl: string | null;
  nickname: string;
};

export function UserInfo() {
  const [editModal, setEditModal] = useState<boolean>(false);

  const { data: myInfo } = userQuery();

  const modalOpenHandler = () => {
    setEditModal(true);
  };

  const modalCloseHandler = () => {
    setEditModal(false);
  };

  return (
    myInfo && (
      <>
        <EditNickname
          currentNickname={myInfo.nickname}
          editModal={editModal}
          modalClose={modalCloseHandler}
          originalNickname={myInfo.nickname}
        />
        <S.UserInfoContainer>
          <S.EditIcon>
            <img src={IconPencil} onClick={modalOpenHandler} />
          </S.EditIcon>
          <S.UserInfo>
            {myInfo.profileUrl === null ? (
              <S.UserImage src={IconNoImage} />
            ) : (
              <S.UserImage src={myInfo.profileUrl} />
            )}
            <S.UserNameContainer>
              <S.UserName>{myInfo.nickname}</S.UserName>
              <p>의 서재</p>
            </S.UserNameContainer>
          </S.UserInfo>
        </S.UserInfoContainer>
      </>
    )
  );
}
