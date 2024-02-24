import * as S from './Loading.styles';

export function Loading() {
  const text = ['H', 'e', 'e', 'J', 'i', 'n', 'B', 'o', 'o', 'k'];

  return (
    <S.LoadingContainer>
      {text.map((text, idx) => (
        <S.LoadingText key={idx} delay={idx * 0.1}>
          {text}
        </S.LoadingText>
      ))}
    </S.LoadingContainer>
  );
}
