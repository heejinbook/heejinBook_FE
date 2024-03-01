import * as S from './EditNickname.styels';
import IconX from '../../../../assets/svg/X.svg';
import { Input } from '../../../common/Input/Input';
import { useState } from 'react';
import { useEditNickname } from '../../../../querys/userMutation';
import { validateEmpty, validateLimitLength } from '../../../../utils/validate';
import { Toast } from '../../../common/Toastify/Toastify';
import { useLockScroll } from '../../../../hooks/useLockScroll';

type EditNicknameProps = {
  currentNickname: string;
  editModal: boolean;
  modalClose: () => void;
  originalNickname: string;
};

export default function EditNickname({
  currentNickname,
  editModal,
  modalClose,
  originalNickname,
}: EditNicknameProps) {
  const [nickname, setNickname] = useState<string>('');

  useLockScroll(editModal);

  const nicknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const { editNicknameMutate } = useEditNickname();

  const validateEditNickname = () => {
    if (!validateEmpty(nickname)) {
      Toast.error('닉네임을 입력해주세요');
      return false;
    }
    if (!validateLimitLength(nickname)) {
      Toast.error('닉네임은 최대 10글자입니다');
      return false;
    }
    if (originalNickname === nickname) {
      Toast.error('기존의 닉네임과 동일합니다');
      return false;
    }
    return true;
  };

  const editNicknameHandler = () => {
    if (!validateEditNickname()) {
      return;
    }
    editNicknameMutate(nickname, {
      onSuccess: () => {
        setNickname('');
        Toast.success('닉네임 변경 성공');
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
            value={nickname}
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
