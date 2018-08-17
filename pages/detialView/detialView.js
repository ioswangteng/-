
Page({
  data: {

  },
  onLoad: function (options) {
     var that=this 
    console.log(options.tempData)
  
    that.data.tempData = JSON.parse(options.tempData);  
    console.log(that.data.tempData)
    that.setData({
      title: that.data.tempData.TITLE,
      subtitle: that.data.tempData.CAPTION,
      img: that.data.tempData.PICTURE
    }),
      wx.setNavigationBarTitle({
        title: that.data.tempData.TITLE
      })
  }
})