import { LibraryBar } from '../../components/MyLibrary/LibraryBar/LibraryBar';
import { LibraryList } from '../../components/MyLibrary/LibraryList/LibraryList';
import { UserInfo } from '../../components/MyLibrary/UserInfo/UserInfo';
import * as S from './MyLibraryPage.styles';

export function MyLibraryPage() {
  return (
    <S.MyLibraryPage>
      <UserInfo />
      <LibraryBar />
      <LibraryList />
    </S.MyLibraryPage>
  );
}
