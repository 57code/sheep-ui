import { render } from '@testing-library/vue'
import HelloWorld from './HelloWorld.vue'
test('should first', () => {
  const { getByText, getByRole } = render(HelloWorld, {
    props: {
      msg: 'hello'
    }
  })
  getByText('hello')
  getByRole('heading')
})
