// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
 user:[{
   username:"root",
   password:"111222"
 }]
  },
usernameInput(e){
  this.setData({
    'user[0].username':e.detail.value
  })
  },
password(e){
  this.setData({
    'user[0].password':e.detail.value
  })
  },
 login:function(){
   var user=this.data.user[0].username;
   var passward=this.data.user[0].password
  console.log(this.data.user[0].username);
  console.log(this.data.user[0].password);
  if(user=="root"&&passward=="111222"){
    wx.showModal({
      title: '登陆成功',
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
  else{
    wx.showModal({
      title: '用户名或密码错误',
     
      
    })
  }
 }
 
})