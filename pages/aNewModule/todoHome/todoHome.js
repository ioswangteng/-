// pages/aNewModule/todoHome/todoHome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todo: '',
    todos: [],
    leftCount: 1,
    allFinished: false,
    allSetting: true,
    clearSetting: true
  },
  inputTodo: function (e) {
    console.log(e.detail.value);
    this.setData({ todo: e.detail.value });
  },
  addTodo: function (e) {
    if (!this.data.todo || !this.data.todo.trim())
      return;
    var todos = this.data.todos;
    var todo = {
      content: this.data.todo,
      finished: false,
      id: +new Date()
    };

    todos.push(todo);
    this.setData({
      todo: '',
      todos: todos,
      leftCount: this.data.leftCount + 1
    });
    this.save();
    getApp().writeHistory(todo, 'create', +new Date());
  },
  save: function () {
    wx.setStorageSync('todo', this.data.todos);
  },
  createItem:function(e){
wx.navigateTo({
  url: '/pages/aNewModule/todoHome/addNewTodo/addNewTodo',
})
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
    var todos = wx.getStorageSync('todos');
    if (todos) {
      var leftCount = todos.filter(function (item) {
        return !item.finished;
      }).length;

      this.setData({
        todos: todos,
        leftCount: leftCount,
        allFinished: !leftCount
      });

      var allSetting = wx.getStorageSync('allSetting');
      if (typeof allSetting == 'boolean') {
        this.setData({
          allSetting: allSetting
        });
      }

      var clearSetting = wx.getStorageSync('clearSetting');
      if (typeof clearSetting == 'boolean') {
        this.setData({
          clearSetting: clearSetting
        });
      }


    }




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