
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // 不是响应性的
vm.items.length = 2 // 不是响应性的

Vue.set(vm.items, indexOfItem, newValue)
vm.items.splice(indexOfItem, 1, newValue)
// 你也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：
vm.$set(vm.items, indexOfItem, newValue)

vm.items.splice(newLength)


var vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})

// 你可以添加一个新的 age 属性到嵌套的 userProfile 对象：
Vue.set(vm.userProfile, 'age', 27)

// 有时你可能需要为已有对象赋予多个新属性
vm.userProfile = Object.assign({}, vm.userProfile, 
{
  age: 27,
  favoriteColor: 'Vue Green'
})

//v for 排序不要用计算属性
// is 属性指定模版  但是可以避开一些潜在的浏览器解析错误
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})
//  <li
//       is="todo-item"
//       v-for="(todo, index) in todos"
//       v-bind:key="todo.id"
//       v-bind:title="todo.title"
//       v-on:remove="todos.splice(index, 1)"
//     >
// </li>

