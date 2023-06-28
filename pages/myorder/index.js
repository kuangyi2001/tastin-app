// pages/myorder/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   total:''
  },
  buy:function(){
    wx.showModal({
      title: '完成',
      content: '',
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          
        }
      }
    })
  },

  onLoad:function(){
   const app=getApp()
    var total=app.globalData.total
    this.setData({
      total:total
    })
    console.log(total);
  }
 
  
})