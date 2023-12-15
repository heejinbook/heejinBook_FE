import { useState } from 'react';
import { LibraryList } from '../LibraryList/LibraryList';
import { LibraryReview } from '../LibraryReview/LibraryReview';
import * as S from './LibraryBar.styles';

export function LibraryBar() {
  const [view, setView] = useState('list');

  return (
    <S.LibraryBarContainer>
      <S.LibraryBar view={view}>
        <p onClick={() => setView('list')}>책장</p>
        <p onClick={() => setView('review')}>리뷰</p>
      </S.LibraryBar>
      {view === 'list' ? <LibraryList /> : <LibraryReview />}
    </S.LibraryBarContainer>
  );
}
