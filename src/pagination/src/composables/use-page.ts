import { ref } from 'vue'

export default function usePage(defaultPageIndex = 1) {
  // 页码
  // 点上一页：页面-1
  // 点下一页：页码+1
  // 点数字，跳转相应页码
  // 点快速前往按钮，页码+5
  // 点快速后退按钮，页码-5
  const pageIndex = ref(defaultPageIndex)

  const setPageIndex = (curr: number) => {
    pageIndex.value = curr
  }

  const jumpPage = (page: number) => {
    pageIndex.value += page
  }

  const prevPage = () => jumpPage(-1)
  const nextPage = () => jumpPage(1)
  return { pageIndex, setPageIndex, jumpPage, prevPage, nextPage }
}
