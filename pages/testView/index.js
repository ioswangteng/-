var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    /**
           * 页面配置
           */
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    hiddenLoad: false,

    topStories: [
      {
        id: 0,
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },

      {
        id: 1,
        image: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      },
      {
        id: 2,
        image: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      },
    ],

    columnData: [
      {
        guid: "0",
        title: "中华上下五千年",
        subtitle: "夏商与西周，东周分两半，春秋和战国一统秦两汉......"
      },
      {
        guid: "1",
        title: "浅谈数学",
        subtitle: "数字学问，几何代数，带你探索勾三股四玄五，或许碰撞了圆周率，或许偶遇了1：1.618..."
      },
      {
        guid: "2",
        title: "与Tom做朋友",
        subtitle: "Hello World!Approaching ABC."
      },
      {
        guid: "3",
        title: "爱上地理",
        subtitle: "亚非北南美，南极欧大洋，带你环球，带你旅行~"
      },
      {
        guid: "4",
        title: "神奇的生物圈",
        subtitle: "界门纲目科属种，带你领略神奇的大自然"
      },
      {
        guid: "5",
        title: "什么是物理",
        subtitle: "爱因斯坦与牛顿，阿基米德与能量守恒又是什么"
      },
      {
        guid: "6",
        title: "化学分子",
        subtitle: "你听过有机化学嘛，那想不想了解一下无机化学啊"
      },
      {
        guid: "7",
        title: "来吧来吧，唱歌跳舞啊",
        subtitle: "太阳当空照，花儿对你笑，小鸟说早早你为什么背上小书包"
      },
      {
        guid: "8",
        title: "艺术与设计",
        subtitle: "你喜欢的勾勒涂鸦，你喜欢的水彩油画，你喜欢的手工活动，你喜欢的不同设计，都在里边都在里边"
      },
      {
        guid: "9",
        title: "养生是门学问",
        subtitle: "健康永远是第一位的，工作学习之余一定注意养生，养生从当下开始"
      }
    ],
    list: [
      {
        id: 'form',
        name: '表单啊',
        open: false,
        pages: ["button", "list", "input", "slider", "uploader"]
      }, {
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: ["article", "badge", "flex", "footer", "gallery", "grid", "icons", "loadmore", "panel", "preview", "progress"]
      }, {
        id: "feedback",
        name: "操作反馈",
        open: false,
        pages: ["actionsheet", "dialog", "msg", "picker", "toast"]
      }, {
        id: "nav",
        name: "导航相关",
        open: false,
        pages: ["navbar", "tabbar"]
      }, {
        id: "search",
        name: "搜索相关",
        open: false,
        pages: ["searchbar"]
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {

if(list[i].id==id){
list[i].open=!list[i].open;
}else{
  list[i].open=false
}
    }
    this.setData({
      list:list
    });
  },
  knowtap: function (e) {
    var knowID = e.currentTarget.dataset.knowId;
    console.log("问问我我我我" + knowID);
    wx.navigateTo({
      url: '../detialView/detialView',
    })
  },
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  onReady: function () {
    // 页面渲染完成
    var that = this;

    // 数据加载完成后 延迟隐藏loading
    setTimeout(function () {
      that.setData({
        hiddenLoad: true
      })
    }, 500);

  },
  /**
      * 点击tab切换
      */
  swiperNav: function (e) {
    console.log(e.target.dataset.current)
    var that = this;
    console.log(that.data.currentTab)
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
})