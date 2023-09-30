import { ComponentProps, ReactNode } from 'react';
import * as S from './Input.styles';

interface InputType extends Omit<ComponentProps<'input'>, 'size' | 'style'> {
  error?: boolean;
  errorMessage?: string;
  topSlot?: ReactNode;
  variant?: 'outline' | 'underline';
  // style? CSSProperties;
}

export function Input({ variant = 'outline', error, errorMessage, topSlot, ...rest }: InputType) {
  return (
    <>
      <S.InputWrapper>
        <S.InputContainer>
          <S.TopSlot>{topSlot}</S.TopSlot>
          <S.Input {...rest} />
          {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        </S.InputContainer>
      </S.InputWrapper>
    </>
  );
}
