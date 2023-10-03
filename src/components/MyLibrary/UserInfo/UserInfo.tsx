import * as S from './UserInfo.styles';

export type UserType = {
  image: string;
  name: string;
};

export function UserInfo() {
  const user: UserType = {
    image: 'src/assets/user.png',
    name: 'heejin',
  };
  return (
    <S.UserInfoContainer>
      <S.EditIcon>
        <img src="src/assets/svg/pencil.svg" />
      </S.EditIcon>
      <S.UserInfo>
        <S.UserImage src={user.image} />
        <S.UserNameContainer>
          <S.UserName>{user.name}</S.UserName>
          <p>의 서재</p>
        </S.UserNameContainer>
      </S.UserInfo>
    </S.UserInfoContainer>
  );
}
