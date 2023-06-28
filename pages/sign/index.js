Page({
  data: {
   
  },

  jump(){
    wx.showModal({
      title: '签到成功',
      content: '',
      complete: (res) => {
        if (res.cancel) {
          wx.switchTab({
            url: '../my/index',
          })
        }
    
        if (res.confirm) {
          wx.switchTab({
            url: '../my/index',
          })
        }
      }
    })
  }
  
});
