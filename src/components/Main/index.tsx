import * as S from './style'

const Main = ({
  title = 'react avancado',
  description = 'Typescript, ReactJs e Styled Components',
  bg = '#06092b'
}) => (
  <S.Wrapper bg={bg}>
    <S.Container>
      <S.Logo
        src="/logo.svg"
        alt="logotipo, Imagem de um átomo, e react avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/hero-illustration.svg"
        alt="Um homen sentado na frente do computador"
      />
    </S.Container>
  </S.Wrapper>
)
export default Main
