var userReg = new RegExp('^[a-zA-Z][a-zA-Z0-9]{5,16}', 'i')
var passReg = new RegExp('[a-zA-Z0-9]{6,16}', 'i')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userIsok: false,
    passIsok: false,
    returnid:false // 获取模版id 用来发送通知
  },
  usernameInput: function (e) {
    var isok = userReg.test(e.detail.value)
    if (isok) {
      console.log('账户ok')
      this.setData({
        userIsok: true
      })
    } else {
      this.setData({
        userIsok: false
      })
    }
  },
  passwordInput: function (e) {
    var isok = passReg.test(e.detail.value)
    if (isok) {
      console.log('密码ok')
      this.setData({
        passIsok: true
      })
    } else {
      this.setData({
        passIsok: false
      })
    }
  },
  formReset: function (e) {
    console.log('reset',e)
  },
  formSubmit: function (e) {

    console.log('submit',e)
  },
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