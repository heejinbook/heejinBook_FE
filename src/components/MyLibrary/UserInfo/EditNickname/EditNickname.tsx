import * as S from './EditNickname.styels';
import IconX from '../../../../assets/svg/X.svg';
import { Input } from '../../../common/Input/Input';
import { useState } from 'react';

type EditNicknameProps = {
  currentNickname: string;
  editModal: boolean;
  modalClose: () => void;
};

export default function EditNickname({
  currentNickname,
  editModal,
  modalClose,
}: EditNicknameProps) {
  const [nickname, setNickname] = useState<string>('');

  const nicknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <S.EditModalContainer editModal={editModal}>
      <S.EditModal editModal={editModal}>
        <S.XContainer>
          <img src={IconX} onClick={modalClose} />
        </S.XContainer>
        <div style={{ padding: '0 20px' }}>
          <Input
            variant="outline"
            type="text"
            placeholder="닉네임 입력(최대 10글자)"
            onChange={nicknameChangeHandler}
          />
        </div>
        <S.CurrentNickname>현재 닉네임 : {currentNickname}</S.CurrentNickname>
        <S.EditButton>
          <button>완료</button>
        </S.EditButton>
      </S.EditModal>
    </S.EditModalContainer>
  );
}
