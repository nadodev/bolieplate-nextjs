import { render, screen } from '@testing-library/react'
import Main from '.'

describe('Main', () => {
  it('should render correctly', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avancado/i })
    ).toBeInTheDocument()
  })
})
