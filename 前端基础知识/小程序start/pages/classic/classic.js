
var wxcomponent = require('./data/wxcomponents-data.js')

Page({
  data: wxcomponent.data,
  // 自定义事件
  sectionTap: function(e) {
    // console.log(e.target.dataset.id)
    var id = e.target.dataset.id
    var strkey = "studyArr[" + id + "].ishidden"
    var ishidden = this.data.studyArr[id].ishidden
    this.setData({
      [strkey]: !ishidden
    })
  },
  clickSubTap: function (e) 
  {
    var parentid = e.target.dataset.parentid
    var id = e.target.dataset.id
    var strkey = "studyArr[" + parentid + "].list"+"["+id+"].ishidden"

    var ishidden = this.data.studyArr[parentid].list[id].ishidden
    this.setData({
      [strkey]: !ishidden
    })
  },
  rowTap: function(e) {
    var url = e.target.dataset.url
    wx.navigateTo({
      url: url,
      success: function() {},
      fail: function() {

      },
      complete: function() {
        // 接口回掉函数 成功和失败都会调用
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      title: "我是渣渣辉，是兄弟就来砍我!"
    })
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