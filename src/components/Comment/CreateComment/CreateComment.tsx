import { Input } from '../../common/Input/Input';
import * as S from './CreateComment.styles';

export function CreateComment() {
  return (
    <S.CreateComment>
      <Input
        topSlot="comment"
        type="text"
        style={{ height: '20px' }}
        placeholder="다양한 댓글을 남겨주세요"
        rightSlot={<button>등록</button>}
      />
    </S.CreateComment>
  );
}
