//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content:'',
    phone:'',
    id:''
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
  onLoad: function (options) {
    console.log(options)
    var _this = this;
    wx.request({
      url: 'https://api.xbtour.com/tour/'+options.id,
      success: function (res) {
        console.log(res.data)
        _this.setData({
          content: res.data,
          id:options.id
        })
      }
    })
    //电话
    wx.request({
      url: 'https://api.xbtour.com/site',
      success: function (res) {
        console.log(res)
        _this.setData({
          phone: res.data.phone
        })
      }
    })
    //页面购买信息get https://api.xbtour.com/tour/buy?id=799&start=2018-01-01
    //下单操作post https://api.xbtour.com/order/buy?line_id=799&start=2018-01-01&people=2&mobile=138999023&contact=微信自动获取或填写
    //检查支付状态 https://api.xbtour.com/order/check?order_number=3345


  }
  
})
