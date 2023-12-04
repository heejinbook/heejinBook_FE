import * as S from './DeleteModal.styles';

type Props = {
  modalOpen: boolean;
  modalClose: () => void;
  clickDelete: any;
  selected: number;
  phrase: string;
};

export function DeleteModal({ modalOpen, modalClose, clickDelete, selected, phrase }: Props) {
  const deleteBookHandler = () => {
    clickDelete(selected);
    modalClose();
  };

  return (
    <S.DeleteModalContainer modalOpen={modalOpen}>
      <S.DeleteModal modalOpen={modalOpen}>
        <p>{phrase}</p>
        <S.ButtonContainer>
          <S.CancelBtn onClick={modalClose}>취소</S.CancelBtn>
          <S.DeleteBtn onClick={deleteBookHandler}>삭제</S.DeleteBtn>
        </S.ButtonContainer>
      </S.DeleteModal>
    </S.DeleteModalContainer>
  );
}
