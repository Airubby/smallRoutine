// pages/component/top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    phone: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
    onLoad: function () {
      var _this = this;
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
    }
  }
})
