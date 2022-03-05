import { render } from '@testing-library/vue'
import Test from './Test'

test('it should work', () => {
  const { getByText } = render(Test, {
    props: {
      msg: 'hello'
    }
  })

  // assert output
  getByText('hello')
})
