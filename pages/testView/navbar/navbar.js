var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {

        console.log('res.windowWidth', res.windowWidth)
        console.log('that.data.tabs.length', that.data.tabs.length)
        console.log('sliderWidth', sliderWidth)
        console.log('that.data.activeIndex', that.data.activeIndex)
        console.log('res.windowWidth / that.data.tabs.length', res.windowWidth / that.data.tabs.length)
        
        console.log('sliderLeft', (res.windowWidth / that.data.tabs.length - sliderWidth) / 2)
        console.log('sliderOffset', res.windowWidth / that.data.tabs.length * that.data.activeIndex)


        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    console.log('tabClicksliderLeft', e.currentTarget.offsetLeft)
    console.log('tabClicksliderOffset', e.currentTarget.id)

    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});