import { LibraryBar } from '../../components/MyLibrary/LibraryBar/LibraryBar';
import { UserInfo } from '../../components/MyLibrary/UserInfo/UserInfo';
import { Header } from '../../components/common/Header/Header';
import * as S from './MyLibraryPage.styles';

export function MyLibraryPage() {
  return (
    <S.MyLibraryPage>
      <Header />
      <UserInfo />
      <LibraryBar />
    </S.MyLibraryPage>
  );
}
