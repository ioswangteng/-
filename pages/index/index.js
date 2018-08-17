var toolUtils = require("../../utils/util.js")
var lists = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    lists: [//测试的
      {
        GUID: 1,
        TITLE: '低价风暴 全民疯抢(亲，你买了吗?)',
        PICTURE: 'http://files.yunuo365.com/images/GZ201611132314061479050046.png'
      },

      {
        GUID: 2,
        TITLE: '医药零售连锁企业系统化运营培训会',
        PICTURE: 'http://files.yunuo365.com/images/GZ201603032313161457017996.png'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    wx.setNavigationBarTitle({
      title: '近期活动'
    })
  },
  getData: function () {
    var that = this;
    toolUtils.requestLoading('https://im.yiyao365.cn/yyzs/handle', {
      QueryType: "GetActivity_v1",
      UserGuid: '@@ODg4ODg4fEAxNzUwNjQ4MTIxOHxAYTNjZjAzOGE4MmEwM2UxZWI5YWYyMTM1N2Y5ZDA1ZDl8QDEuMi43fEA3MWo3cEdwOFpMa09oVnVrTVZnWWZ3LS18QGNvbS5yb21lbnMuZXJwLmNoYWlufEBNVFV6TXpjd09UUXhPQS0t',
      Params: ''
    }, '正在加载数据', function (res) {
      //res就是我们请求接口返回的数据
      console.log("呃呃呃呃呃呃" + res.DATA)
      lists = res.DATA
      that.setData({
        lists: lists
      })
      console.log(lists)
    }, function () {
      wx.showToast({
        title: '加载数据失败',
      })
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

  },

  onPullDownRefresh() {

    wx.showNavigationBarLoading()

  },
  selectedItem: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log("ninininininini  " + index)

    wx.navigateTo({
      url: '../detialView/detialView?tempData=' + JSON.stringify(lists[index]),
    })
  }
})

