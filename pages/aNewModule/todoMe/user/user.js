// pages/aNewModule/todoMe/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    name: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      avatar: wx.getStorageSync('avatar') || 'https://yunlaiwu0.cn-bj.ufileos.com/teacher_avatar.png',
      name: wx.getStorageSync('name') || ''
    });
  },
  //未点完成失去焦点复原（change优先于blur触发）
  blurName: function (e) {
    this.setData({ name: wx.getStorageSync('name') });
  },

  changeName: function (e) {
    var name = e.detail.value.trim();

    if (name) {
      wx.setStorageSync('name', name);
    }

  },
  changeAvatar: function (e) {

    var that = this;

    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res) {
            var savedFilePath = res.savedFilePath;
            wx.setStorageSync('avatar', savedFilePath);
            that.setData({ avatar: savedFilePath });
          }
        });
      }
    })
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