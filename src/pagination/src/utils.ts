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