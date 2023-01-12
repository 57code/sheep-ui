import { render } from '@testing-library/vue'
import BaseSelectionBox from '../src/base-selection-box'

describe('base-selection-box test', () => {
  test('base-selection-box init render', async () => {
    const { getByRole } = render(BaseSelectionBox)
    getByRole('base-selection-box')
  })
})
