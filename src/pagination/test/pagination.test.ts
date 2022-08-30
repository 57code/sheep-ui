import { render } from '@testing-library/vue'
import Pagination from '../src/pagination'

describe('pagination test', () => {
  test('pagination init render', async () => {
    const { getByRole } = render(Pagination)
    getByRole('pagination')
  })
})
