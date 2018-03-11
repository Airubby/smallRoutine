//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listData:[],
    theme:'',
    attribute:'',
    day:'',
    price:'',
    prev_page:'',
    next_page:'',

    phone:''

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
    console.log(options)
    var _this = this;
    wx.request({
      url: 'https://api.xbtour.com/tours',
      data: options,
      success: function (res) {
        console.log(res)
        _this.setData({
          listData: res.data.data,
          prev_page: res.data.prev_page_url,
          next_page: res.data.next_page_url,
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
  },
  bindPage:function(event){
    var _this=this;
    var dataset = event.currentTarget.dataset;
    var url='';
    if(dataset.type=="prev"){
      url = this.data.prev_page;
    }else{
      url=this.data.next_page;
    }
    wx.request({
      url: url,
      data: {
        theme: _this.data.theme,
        attribute: _this.data.attribute,
        day: _this.data.day,
        price: _this.data.price
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          listData: res.data.data,
          prev_page: res.data.prev_page_url,
          next_page: res.data.next_page_url,
        })
      }
    })

  },
  bindViewTap:function(event){
    console.log(event)
    var _this = this;
    var dataset = event.currentTarget.dataset;
    if (dataset.type=="theme"){
      _this.setData({
        theme: dataset.value
      })
    }
    if (dataset.type =="attribute"){
      _this.setData({
        attribute: dataset.value
      })
    }
    if (dataset.type == "day") {
      _this.setData({
        day: dataset.value
      })
    }
    if (dataset.type == "price") {
      _this.setData({
        price: dataset.value
      })
    }

    wx.request({
      url: 'https://api.xbtour.com/tours',
      data: {
        theme: _this.data.theme,
        attribute: _this.data.attribute,
        day: _this.data.day,
        price: _this.data.price
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          listData: res.data.data,
          prev_page:res.data.prev_page_url,
          next_page:res.data.next_page_url,
        })
      }
    })
  }
  
})
