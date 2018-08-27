// pages/aNewModule/todoHome/addNewTodo/addNewTodo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    content: '',
    tag: '',
    tags: [],
    extra: ''

  },
  inputContent: function (e) {
    console.log(e.detail.value.trim());
    this.setData({
      content: e.detail.value.trim()
    });
  },
  inputExtra: function (e) {
    this.setData({
      extra: e.detail.value.trim()
    });
  },
  addTag: function (e) {
    var tag = e.detail.value.trim();
    if (!tag)
      return;
    var tags = this.data.tags;
    tags.push(tag);
    this.setData({
      tag: "",
      tags: tags
    });
  },
  removeTag: function (e) {

    var index = e.currentTarget.dataset.index;
    var tags = this.data.tags;
    tags.splice(index, 1);
    this.setData({
      tags: tags
    });
  },

  create: function (e) {

    if (!this.data.content) {
      wx.showToast({
        title: '请填写待办内容！',
        icon: 'none'
      });
      return;
    }

    var todos=wx.getStorageSync('todos')||[];
    var todo={
      content:this.data.content,
      tags:this.data.tags,
      extra:this.data.extra
    };
    todos.push(todo);
    wx.setStorageSync('todo', todos);
    getApp().writeHistory(todo,'create',+new Date());
    wx.navigateBack({
      
    });

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