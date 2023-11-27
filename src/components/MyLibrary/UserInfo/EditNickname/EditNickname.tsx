import * as S from './EditNickname.styels';
import IconX from '../../../../assets/svg/X.svg';
import { Input } from '../../../common/Input/Input';
import { useState } from 'react';
import { useEditNickname } from '../../../../querys/userMutation';
import { validateEmpty } from '../../../../utils/validate';
import { Toast } from '../../../common/Toastify/Toastify';
import { NicknameType } from '../../../../apis/user';

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

  const { editNicknameMutate } = useEditNickname();

  //   if (!validateEmpty(nickname.nickname)) {
  //     Toast.error('닉네임을 입력해주세요');
  //     return false;
  //   }

  const editNicknameHandler = () => {
    editNicknameMutate(nickname, {
      onSuccess: () => {
        Toast.success('닉네임 변경 성공');
        setNickname('');
        modalClose();
      },
    });
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
          <button onClick={editNicknameHandler}>완료</button>
        </S.EditButton>
      </S.EditModal>
    </S.EditModalContainer>
  );
}
