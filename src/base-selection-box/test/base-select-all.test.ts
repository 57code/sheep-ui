import { render } from '@testing-library/vue'
import BaseSelectAll from '../src/base-select-all'

describe('base-select-all test', () => {
  test('base-select-all init render', async () => {
    const { getByRole } = render(BaseSelectAll)
    getByRole('base-select-all')
  })
})
