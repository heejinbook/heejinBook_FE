import * as S from './UserInfo.styles';
import IconNoImage from '../../../assets/svg/noImageUser.svg';
import IconPencil from '../../../assets/svg/pencil.svg';
import { userQuery } from '../../../querys/userQuery';

export type UserType = {
  profileUrl: string | null;
  nickname: string;
};

export function UserInfo() {
  const { data: myInfo } = userQuery();

  return (
    myInfo && (
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
    )
  );
}
