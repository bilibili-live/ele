import Vue from 'vue'

import { 
  AlertPlugin,
  XHeader,
  ViewBox,
  Previewer,
  Grid,
  GridItem,
  XImg
} from 'vux'

Vue.use(AlertPlugin)

Vue.component('x-header', XHeader)
Vue.component('view-box', ViewBox)
Vue.component('previewer', Previewer)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('x-img', XImg)