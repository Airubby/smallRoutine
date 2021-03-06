//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    indexSlide:[],
    indexLinks:[],
    indexKeyword:[],
    indexListbox: [],
    indexBig:[],
    info_input:'',

    phone:''

  },
  //事件处理函数
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  infoInput:function(e){
    console.log(e)
    this.setData({
      info_input: e.detail.value
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../list/tours?search='+this.data.info_input
    })
  },
  //打电话
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phone, //此号码并非真实电话号码，仅用于测试  
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },  
  onLoad:function(){
    var _this=this;
    //幻灯片
    wx.request({
      url: 'https://api.xbtour.com/ad',
      data:{
        mark:'index.top.slide'
      },
      success: function (res) {
        //console.log(res)
        _this.setData({
          indexSlide: res.data
        })
      }
    })
    //推荐链接
    wx.request({
      url: 'https://api.xbtour.com/ad',
      data: {
        mark: 'mobile.index.links'
      },
      success: function (res) {
        //console.log(res.data[0])
        _this.setData({
          indexLinks: res.data[0]
        })
      }
    })
    //推荐关键词
    wx.request({
      url: 'https://api.xbtour.com/ad',
      data: {
        mark: 'mobile.index.keywords'
      },
      success: function (res) {
        //console.log(res.data[0])
        _this.setData({
          indexKeyword: res.data[0]
        })
      }
    })
    //线路列表
    wx.request({
      url: 'https://api.xbtour.com/ad',
      data: {
        mark: 'mobile.index.line'
      },
      success: function (res) {
        //console.log(res)
        _this.setData({
          indexListbox : res.data
        })
      }
    })
    //底部大图展示
    wx.request({
      url: 'https://api.xbtour.com/ad',
      data: {
        mark: 'mobile.index.big'
      },
      success: function (res) {
        //console.log(res.data[0])
        _this.setData({
          indexBig: res.data[0]
        })
      }
    })
    //电话
    wx.request({
      url: 'https://api.xbtour.com/site',
      success:function(res){
        //console.log(res)
        _this.setData({
          phone: res.data.phone
        })
      }
    })
    wx.request({
      url: 'https://api.xbtour.com/order/check?order_number=3345',
      success: function (res) {
        console.log(res)
        _this.setData({
          phone: res.data.phone
        })
      }
    })
    
    
  }
  
})
