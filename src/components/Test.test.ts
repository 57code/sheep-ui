import Test from './Test'
import { render } from '@testing-library/vue'

test('Test.tsx should work', () => {
  // 渲染组件
  const { getByText } = render(Test)
  // assert output
  // 断言输出结果
  getByText('test: 0')
})
