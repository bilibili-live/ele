/*
** 锚链接平滑滚动
** 参考: https://gist.github.com/andjosh/6764939#gistcomment-2899105
** @params <Element> element 拿到的dom元素
** @params <Number> to 高度
** @params <Number> duration 动画时间
** @params <callback> scrollToDone 回调函数
*/
export default (element, to = 0, duration = 1000, scrollToDone = null) => {
  const start = element.scrollTop
  const change = to - start
  const increment = 20
  let currentTime = 0

  const animateScroll = (() => {

    currentTime += increment

    const val = Math.easeInOutQuad(currentTime, start, change, duration)

    element.scrollTop = val

    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    } else {
      if (scrollToDone) scrollToDone()
    }
  })

  animateScroll()
}

// 处理大盒子滚动事件
// @params <Element> ele 大盒子元素
// @params <callback> cb 回调函数
export const handleViewBoxScroll = (ele, cb)=> {
  const _this = ele
  ele.addEventListener('scroll', event=> {
    cb({
      top: getElementScrollTop(ele),
      event,
      _this
    })
  })
}

// 获取元素的高度
export const getEleOffsetTop = (ele, isPromise)=> {
  let top = 0
  if (Array.isArray(ele)){
    top = ele[0].offsetTop
  } else top = ele.offsetTop
  if (isPromise) return Promise.resolve(top)
  return top
}

// 返回当前 `index`
/*
{
  prefix: `food-item-`, // 自行返回一个格式
  len: 0, // 长度
  _this: , // 当前this指向
  top: , //元素高度
}
*/
export const getEleIndex = obj=> {
  const { prefix, len, _this: _t, top } = obj
  if (len) {
    for (let index = 0; index < len; index++) {
      let now = prefix.replace('$', index)
      let ele = _t.$refs[now]
      if (ele) {
        const indexTop = getEleOffsetTop(ele)
        if (indexTop > top) {
          return index - 1
        }
      }
    }
  }
}

// 获取元素scrollTop
// @params <Element> ele 元素
// @params <Boolean> isPromise 是否返回一个 promise
export const getElementScrollTop = (ele, isPromise)=> {
  const top = ele.scrollTop
  if (isPromise) return Promise.resolve(top)
  return top
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}