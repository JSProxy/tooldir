import content from'./content.ejs'
import layout from '@layout/layout/layout.js'

export default layout.init({pageTitle:'index'}).run(content())
