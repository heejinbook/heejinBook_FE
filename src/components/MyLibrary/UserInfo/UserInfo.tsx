import { useEffect, useState } from 'react';
import * as S from './UserInfo.styles';
import { getMyInfo } from '../../../apis/user';
import IconNoImage from '../../../assets/svg/noImageUser.svg';
import IconPencil from '../../../assets/svg/pencil.svg';

export type UserType = {
  profileUrl: string | null;
  nickname: string;
};

export function UserInfo() {
  const [myInfo, setMyInfo] = useState<UserType>({
    profileUrl: null,
    nickname: '',
  });

  useEffect(() => {
    getMyInfo()
      .then((result) => {
        setMyInfo(result.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <S.UserInfoContainer>
      <S.EditIcon>
        <img src={IconPencil} />
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
  );
}
