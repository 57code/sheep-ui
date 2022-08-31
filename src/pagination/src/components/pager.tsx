import { computed, defineComponent, toRefs } from 'vue'
import usePage from '../composables/use-page'
import { getCenterPage } from '../utils'
import { PagerProps, pagerProps } from './pager-type'

export default defineComponent({
  name: 'SPager',
  props: pagerProps,
  setup(props: PagerProps) {
    const { total, pageSize, pagerCount } = toRefs(props)
    const totalPage = computed(() => Math.ceil(total.value / pageSize.value))
    const { pageIndex, setPageIndex, jumpPage, prevPage, nextPage } = usePage()

    const centerPages = computed(() =>
      getCenterPage(totalPage.value, pageIndex.value, pagerCount.value)
    )

    return {
      totalPage,
      pageIndex,
      setPageIndex,
      jumpPage,
      prevPage,
      nextPage,
      centerPages
    }
  },
  render() {
    const {
      pagerCount,
      totalPage,
      pageIndex,
      setPageIndex,
      jumpPage,
      centerPages
    } = this
    return (
      <ul class="s-pager">
        <li
          onClick={() => setPageIndex(1)}
          class={{ current: pageIndex === 1 }}
        >
          1
        </li>
        {/* 1.总页码totalPage大于按钮数量pagerCount */}
        {/* 2.当中间页码大于Math.ceil(pagerCount / 2)时，应该出现左边的 ... */}
        {totalPage > pagerCount && pageIndex > Math.ceil(pagerCount / 2) && (
          <li class="more left" onClick={() => jumpPage(-5)}>
            ...
          </li>
        )}
        {/* 总页面totalPage，当前页面pageIndex，最大显示页码数pageCount */}
        {centerPages.map(page => (
          <li
            onClick={() => setPageIndex(page)}
            class={{ current: pageIndex === page }}
          >
            {page}
          </li>
        ))}

        {/* 1.总页码totalPage大于按钮数量pagerCount */}
        {/* 2.当中间页码小于pagerCount - Math.ceil(pagerCount / 2) + 1时，应该出现左边的 ... */}
        {totalPage > pagerCount &&
          pageIndex < totalPage - Math.ceil(pagerCount / 2) + 1 && (
            <li class="more right" onClick={() => jumpPage(5)}>
              ...
            </li>
          )}

        {totalPage > 1 && (
          <li
            onClick={() => setPageIndex(totalPage)}
            class={{ current: pageIndex === totalPage }}
          >
            {totalPage}
          </li>
        )}
      </ul>
    )
  }
})
