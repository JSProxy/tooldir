// pages/classic/内置组件/基础组件/rich-text/rich-text.js
Page({

  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    nodes2: [{
      name: 'h2',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: green;'
      },
      children: [{
        type: 'text',
        text: '你好&nbsp;小程序!'
      }]
    }]
  },
  tap() {
    console.log('tap')
  },
  touchstart: function () { console.log('touchstart')},
  touchcancel: function () { console.log('touchcancel')},
  touchend: function () { console.log('touchend')},
  longtap: function () { console.log('longtap')},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})