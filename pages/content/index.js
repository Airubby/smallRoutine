//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content:'',
  },
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'https://api.xbtour.com/tour/799',
      success: function (res) {
        console.log(res.data)
        _this.setData({
          content: res.data
        })
      }
    })

  }
  
})
