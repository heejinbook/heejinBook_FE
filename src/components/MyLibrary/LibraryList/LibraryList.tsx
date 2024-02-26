import * as S from './LibraryList.styles';
import IconX from '../../../assets/svg/circleX.svg';
import { useGetLibraryBook } from '../../../querys/bookQuery';
import { useDeleteBook } from '../../../querys/bookMutation';
import { useState } from 'react';
import { DeleteModal } from '../../DeleteModal/DeleteModal';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../common/Loading/Loading';

export type LibraryBookType = {
  bookId: number;
  bookTitle: string;
  bookAuthor: string;
  bookThumbnail: string;
};

export function LibraryList() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  const navigate = useNavigate();

  const { data: libraryBook, isLoading } = useGetLibraryBook();
  const { deleteBookMutate } = useDeleteBook();

  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  if (isLoading) return <Loading />;

  return (
    libraryBook && (
      <S.LibraryListContainer>
        <p>전체 {libraryBook.length}</p>
        {libraryBook.length > 0 ? (
          <S.LibraryList>
            {libraryBook
              .map((book) => (
                <S.LibraryListItems key={book.bookId}>
                  <DeleteModal
                    modalOpen={modalOpen}
                    modalClose={modalCloseHandler}
                    clickDelete={deleteBookMutate}
                    selected={selected}
                    phrase={'선택한 책을 책장에서 삭제하시겠습니까?'}
                  />

                  <div style={{ position: 'relative' }}>
                    <S.LibraryDelete
                      src={IconX}
                      onClick={() => {
                        setModalOpen(true);
                        setSelected(book.bookId);
                      }}
                    />
                    <div
                      onClick={() => {
                        navigate(`/main/books/${book.bookId}`);
                      }}
                    >
                      <S.LibraryImage src={book.bookThumbnail} />
                    </div>
                    <S.LibraryTitle>{book.bookTitle}</S.LibraryTitle>
                    <S.LibraryAuthor>{book.bookAuthor}</S.LibraryAuthor>
                  </div>
                </S.LibraryListItems>
              ))
              .reverse()}
          </S.LibraryList>
        ) : (
          <S.NoBook>
            <p>책장에 책이 없어요</p>
          </S.NoBook>
        )}
      </S.LibraryListContainer>
    )
  );
}
