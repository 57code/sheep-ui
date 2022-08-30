import { computed, defineComponent, toRefs } from 'vue'
import usePage from './composables/use-page'
import { PaginationProps, paginationProps } from './pagination-type'
import '../style/pagination.scss'

export const getCenterPage = (
  totalPage: number,
  pageIndex: number,
  pagerCount: number
) => {
  // [0,1,2,3,4,5,6,7,8]
  const totalPageArr = Array.from(Array(totalPage).keys())

  if (totalPage <= pagerCount) {
    // [0,1,2,3,4]
    // 页面太少，全部显示
    // [2,3,4]
    return totalPageArr.slice(2, totalPage)
  } else {
    // 计算中位数
    const middle = Math.ceil(pagerCount / 2)
    // [0,1,2,3,4,5,6,7,8]
    if (pageIndex <= middle) {
      // pageIndex=3
      // [2,3,4,5,6]
      // 左边全显示
      return totalPageArr.slice(2, pagerCount)
    } else if (pageIndex >= totalPage - middle + 1) {
      // pageIndex=6
      // 右边全显示
      return totalPageArr.slice(totalPage - pagerCount + 2, totalPage)
    } else {
      // pageIndex=4
      // [2,3,4,5,6]
      // 中间显示
      return totalPageArr.slice(pageIndex - middle + 2, pageIndex + middle - 1)
    }
  }
}

export default defineComponent({
  name: 'SPagination',
  props: paginationProps,
  emits: [],
  setup(props: PaginationProps, ctx) {
    // 1.首页和尾页是常驻的，如果只有1页，则不显示
    // 2.页码按钮有一个最大数量pagerCount，上图是7，也就是说最多显示7个页码按钮
    // 3.如果总页数totalPage大于pagerCount，则会出现显示不下的情况，这时显示不
    // 下的部分用...表示，并且这个...是可以快速往前、往后跳转N页的
    // 4.中间页码应该显示的页码按钮数量在0到pagerCount-2之间
    // 5.只有2页的情况下，中间页码按钮数量为0
    // 6.大于等于pagerCount的情况下，中间按钮数量等于pagerCount-2
    // 7.当中间页码左边的页数大于2时，应该出现左边的 ...
    // 8.当中间页码右边的页数小于totalPage-3时，应该出现右边的 ...
    const { prevPage, nextPage } = usePage()
    const { total, pageSize, pagerCount } = toRefs(props)
    const totalPage = computed(() => Math.ceil(total.value / pageSize.value))
    const { pageIndex, setPageIndex, jumpPage } = usePage()

    const centerPages = computed(() =>
      getCenterPage(totalPage.value, pageIndex.value, pagerCount.value)
    )

    return () => {
      return (
        <div class="s-pagination">
          <button onClick={() => prevPage()}>上一页</button>
          {/* pager部分 */}
          <ul class="s-pager">
            <li
              onClick={() => setPageIndex(1)}
              class={{ current: pageIndex.value === 1 }}
            >
              1
            </li>
            {/* 1.总页码totalPage大于按钮数量pagerCount */}
            {/* 2.当中间页码大于Math.ceil(pagerCount.value / 2)时，应该出现左边的 ... */}
            {totalPage.value > pagerCount.value &&
              pageIndex.value > Math.ceil(pagerCount.value / 2) && (
                <li class="more left" onClick={() => jumpPage(-5)}>
                  ...
                </li>
              )}
            {/* 总页面totalPage，当前页面pageIndex，最大显示页码数pageCount */}
            {centerPages.value.map(page => (
              <li
                onClick={() => setPageIndex(page)}
                class={{ current: pageIndex.value === page }}
              >
                {page}
              </li>
            ))}

            {/* 1.总页码totalPage大于按钮数量pagerCount */}
            {/* 2.当中间页码小于pagerCount - Math.ceil(pagerCount.value / 2) + 1时，应该出现左边的 ... */}
            {totalPage.value > pagerCount.value &&
              pageIndex.value <
                totalPage.value - Math.ceil(pagerCount.value / 2) + 1 && (
                <li class="more right" onClick={() => jumpPage(5)}>
                  ...
                </li>
              )}

            {totalPage.value > 1 && (
              <li
                onClick={() => setPageIndex(totalPage.value)}
                class={{ current: pageIndex.value === totalPage.value }}
              >
                {totalPage.value}
              </li>
            )}
          </ul>
          <button onClick={() => nextPage()}>下一页</button>
        </div>
      )
    }
  }
})
