//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content:'',
  },
  onLoad: function (options) {
    var _this = this;
    console.log(options)
    wx.request({
      url: 'https://api.xbtour.com/tour/'+options.id,
      success: function (res) {
        console.log(res)
        _this.setData({
          content: res.data
        })
      }
    })

  }
  
})
