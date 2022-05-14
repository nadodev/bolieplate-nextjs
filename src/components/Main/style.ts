import styled from 'styled-components'

interface BGProps {
  bg: string
}
export const Wrapper = styled.main<BGProps>`
  background-color: ${(props) => props.bg};
  color: #fff;
  width: 100%;
  height: 100%;
`
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  max-width: 30rem;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
