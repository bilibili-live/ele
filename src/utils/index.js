export const routerUtils = {
  build(path, isViews = true) {
    if (isViews) {
      return () => import(`_p/views/${ path }.vue`)
    } else {
      return () => import(`_p/${ path }.vue`)
    }
  }
}

export const isObject = x => {
  return typeof x === 'object' && x !== null
}

// 判断设备, 返回设备类型
// @return <Boolean>
export const insBrowser = () => {
  const sUserAgent = navigator.userAgent.toLowerCase()
  const bIsIpad = sUserAgent.match(/ipad/i) == "ipad"
  const bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os"
  const bIsMidp = sUserAgent.match(/midp/i) == "midp"
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"
  const bIsUc = sUserAgent.match(/ucweb/i) == "ucweb"
  const bIsAndroid = sUserAgent.match(/android/i) == "android"
  const bIsCE = sUserAgent.match(/windows ce/i) == "windows ce"
  const bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile"
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return true // 移动设备
  } else {
    return false // PC
  }
}

// 设置 style
export const setEleStyle = (ele, obj) => {
  if (isObject(obj)) {
    try {
      Object.keys(obj).forEach(item => {
        const isStyle = ele.style.hasOwnProperty(item)
        if (isStyle) {
          const val = obj[item]
          ele.style[item] = val
        }
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}