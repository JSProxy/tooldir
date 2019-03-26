

import nav from './nav.ejs'
import './style.scss'

export let navModal = function (){
 const tpl =  nav();
  return{
    'component-name':'nav',
    'tpl':tpl
  }
}
