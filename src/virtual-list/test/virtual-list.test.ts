import { render } from '@testing-library/vue'
import Virtual-list from '../src/virtual-list'

describe('virtual-list test', () => {
  test('virtual-list init render', async () => {
    const { getByRole } = render(Virtual-list)
    getByRole('virtual-list')
  })
})
