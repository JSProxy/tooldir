// pages/classic/内置组件/scroll-view/scroll-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'green',
    scrollTop: 0
  },
  upper: function(e) {
    console.log("upper")
  },
  lower: function(e) {
    console.log("lower")
  },
  scroll: function(e) {
    console.log("scroll")
  },
  tap: function(e) {
   
   //定位 scroll 
           this.setData({
          toView: "green"
        })
  },
  tapMove: function(e) {
    // 移动scroll
    this.setData({
      scrollTop: this.data.scrollTop+20
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})