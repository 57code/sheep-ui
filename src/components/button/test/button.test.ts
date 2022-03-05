import { render } from '@testing-library/vue'
import Button from '../src/button'
test('it should work', () => {
  const { getByRole } = render(Button)
  getByRole('button')
})
