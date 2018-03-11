//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
   
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
  onLoad: function (options){
    var _this=this;
    console.log(options)
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
    
    
  }
  
})
