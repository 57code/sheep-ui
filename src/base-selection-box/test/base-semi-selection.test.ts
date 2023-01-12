import { render } from '@testing-library/vue'
import BaseSemiSelection from '../src/base-semi-selection'

describe('base-semi-selection test', () => {
  test('base-semi-selection init render', async () => {
    const { getByRole } = render(BaseSemiSelection)
    getByRole('base-semi-selection')
  })
})
