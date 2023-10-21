import { CSSProperties, ComponentProps, ReactNode } from 'react';
import * as S from './Input.styles';

interface InputType extends Omit<ComponentProps<'input'>, 'size' | 'style'> {
  error?: boolean;
  errorMessage?: string;
  topSlot?: ReactNode;
  rightSlot?: ReactNode;
  variant?: 'outline' | 'underline';
  style?: CSSProperties;
}

export function Input({
  variant = 'outline',
  error,
  errorMessage,
  topSlot,
  rightSlot,
  style,
  ...rest
}: InputType) {
  return (
    <>
      <S.InputWrapper variant={variant} error={error}>
        <S.InputContainer>
          <S.TopSlot>{topSlot}</S.TopSlot>
          <S.InputFrame>
            <S.RightSlot>{rightSlot}</S.RightSlot>
            <S.Input style={style} {...rest} />
          </S.InputFrame>
          {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        </S.InputContainer>
      </S.InputWrapper>
    </>
  );
}
