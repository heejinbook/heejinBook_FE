import { CSSProperties, ComponentProps, ReactNode } from 'react';
import * as S from './Textarea.styles';

interface TextareaType extends Omit<ComponentProps<'textarea'>, 'style'> {
  topSlot?: ReactNode;
  rightSlot?: ReactNode;
  style?: CSSProperties;
}

export function Textarea({ topSlot, rightSlot, style, ...rest }: TextareaType) {
  return (
    <S.TextareaWrapper>
      <S.TextareaContainer>
        <S.TopSlot>{topSlot}</S.TopSlot>
        <S.TextareaFrame>
          <S.Textarea style={style} {...rest} />
          <S.RightSlot>{rightSlot}</S.RightSlot>
        </S.TextareaFrame>
      </S.TextareaContainer>
    </S.TextareaWrapper>
  );
}
