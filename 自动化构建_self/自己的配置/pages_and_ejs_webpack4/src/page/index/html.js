import content from'./content.ejs'
import layout from '@layout/layout/layout.js'
import test from '@components/testComponent/html.ejs'

// 组件集合
let components = {
  testComponent:test(),
}
export default layout.init({pageTitle:'home'}).run(content(components));
