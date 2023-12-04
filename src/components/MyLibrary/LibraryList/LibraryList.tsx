import * as S from './LibraryList.styles';
import { useNavigate } from 'react-router-dom';
import IconX from '../../../assets/svg/circleX.svg';
import { useGetLibraryBook } from '../../../querys/bookQuery';
import { useDeleteBook } from '../../../querys/bookMutation';
import { useState } from 'react';
import { DeleteModal } from '../../DeleteModal/DeleteModal';

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

  const { data: libraryBook } = useGetLibraryBook();

  const { deleteBookMutate } = useDeleteBook();

  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  return (
    libraryBook && (
      <S.LibraryListContainer>
        <p>전체 {libraryBook.length}</p>
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
      </S.LibraryListContainer>
    )
  );
}
