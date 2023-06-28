// index.js
// 获取应用实例


Page({
  data: {
    title:'',
    price:0,
    order:[],
    foodtypes:'',
    foods:[
    ],
    total:0,
 
    activeKey: 0,
    item1:false,
    item2:false
  },
  onChange(event) {
    let index=0;
    
    switch(event.detail){
      case 0:
        this.setData({
          goods:[
            {
              price:"37.9",
              tag:"新品上市",
              title:"斯哈双人套餐",
              details:"麻婆豆腐中国汉堡+香辣鸡腿中国汉堡+上校鸡块+盐酥鸡米花+冰柠可乐*2",
              image:"https://ts1.cn.mm.bing.net/th/id/R-C.ed73aa89aadb61b9cdb450f9996dc4a5?rik=ZSzMXe1UsbmqhA&riu=http%3a%2f%2fp5.itc.cn%2fq_70%2fimages03%2f20201022%2ff11a8424b2ae43c591d44d59850f4e17.png&ehk=0HnBB%2bd0nR%2fxjoMrjyWasRaNKLNi2TkJRiC5%2b5gHCwk%3d&risl=&pid=ImgRaw&r=0"
            },
            {
              price:"25.9",
              tag:"新品上市",
              title:"麻辣豆腐贴贴单人套餐",
              details:"麻婆豆腐中国汉堡+香辣鸡翅+冰柠可乐+豆腐贴贴便利贴",
              image:"https://tse1-mm.cn.bing.net/th/id/OIP-C.fYjwFbVOZOICIGoJsVCQzgHaE8?pid=ImgDet&rs=1"
              
            },
            {
              price:"22.9",
              tag:"新品上市",
              title:"好麻好辣单人餐",
              details:"麻婆豆腐中国汉堡+香辣鸡翅+冰柠可乐",
              image:"https://www.anxjm.com/storage/uploads/image/2022/01/13/179686a7bd9bbacbd21ec2c9261874c2.jpg"
            }
          ]
        });
        break;
        case 1:
          this.setData({
            goods:[
              {
                price:"22.9",
                tag:"单人套餐",
                title:"单人套餐一",
                details:"香辣鸡腿中国汉堡+香辣鸡翅+冰柠可乐",
                image:"https://www.anxjm.com/storage/uploads/image/2022/01/13/179686a7bd9bbacbd21ec2c9261874c2.jpg"
              },
              {
                price:"25.9",
                tag:"单人套餐",
                title:"单人套餐二",
                details:"北京烤鸭中国汉堡+香辣鸡翅+冰柠可乐",
                image:"https://www.anxjm.com/storage/uploads/image/2022/01/13/179686a7bd9bbacbd21ec2c9261874c2.jpg"
              },
              {
                price:"25.9",
                tag:"单人套餐",
                title:"单人套餐三",
                details:"牛肉中国汉堡+香辣鸡翅+冰柠可乐",
                image:"https://www.anxjm.com/storage/uploads/image/2022/01/13/179686a7bd9bbacbd21ec2c9261874c2.jpg"
              }
            ]
          });
          break;
       case 2:
        this.setData({
          goods:[
            {
              price:"37.9",
              tag:"双人套餐",
              title:"双人套餐一",
              details:"麻婆豆腐中国汉堡+香辣鸡腿中国汉堡+上校鸡块+盐酥鸡米花+冰柠可乐*2",
              image:"https://ts1.cn.mm.bing.net/th/id/R-C.ed73aa89aadb61b9cdb450f9996dc4a5?rik=ZSzMXe1UsbmqhA&riu=http%3a%2f%2fp5.itc.cn%2fq_70%2fimages03%2f20201022%2ff11a8424b2ae43c591d44d59850f4e17.png&ehk=0HnBB%2bd0nR%2fxjoMrjyWasRaNKLNi2TkJRiC5%2b5gHCwk%3d&risl=&pid=ImgRaw&r=0"
            },
            {
              price:"37.9",
              tag:"双人套餐",
              title:"双人套餐二",
              details:"麻婆豆腐中国汉堡+香辣鸡腿中国汉堡+上校鸡块+盐酥鸡米花+冰柠可乐*2",
              image:"https://ts1.cn.mm.bing.net/th/id/R-C.ed73aa89aadb61b9cdb450f9996dc4a5?rik=ZSzMXe1UsbmqhA&riu=http%3a%2f%2fp5.itc.cn%2fq_70%2fimages03%2f20201022%2ff11a8424b2ae43c591d44d59850f4e17.png&ehk=0HnBB%2bd0nR%2fxjoMrjyWasRaNKLNi2TkJRiC5%2b5gHCwk%3d&risl=&pid=ImgRaw&r=0"
            },
          ]
        });
        break;
        case 3:
          this.setData({
            goods:[
              {
                price:"16",
              tag:"下午茶套餐",
              title:"乐享下午茶",
              details:"香辣鸡翅+粗薯+冰柠可乐",
              image:"https://ts1.cn.mm.bing.net/th/id/R-C.9e89a0a89464729ea420abba051290af?rik=7GcCSkogtpuAbQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20200502%2f58aa5f5ea8544d9ea663bd127e38c2a8.jpeg&ehk=ALutF%2ffKVbVaPd%2bsYc23fL%2fF922yoDCHEaZJwmu6sYw%3d&risl=&pid=ImgRaw&r=0"
              },
              {
                price:"21",
              tag:"下午茶套餐",
              title:"缤纷下午茶",
              details:"上校鸡块+粗薯+尖叫翅尖",
              image:"https://tse3-mm.cn.bing.net/th/id/OIP-C.ph1hThuXnxvrdIW7RpUr4AHaE7?pid=ImgDet&rs=1"
              },
              {
                price:"21",
              tag:"下午茶套餐",
              title:"双人下午茶套餐",
              details:"香辣鸡翅+啃定好鸡脖+粗薯+冰柠可乐+红枣黑米浆",
              image:"https://dimg06.c-ctrip.com/images/0101p120009ru79zrA3E1_R_400_300.png"
              }
            ]
          });
          break;
          case 4: this.setData({
            goods:[
              {
                price:'16.9',
                tag:'美味单品',
                title:'多汁牛肉汉堡',
                details:'多汁牛肉,满口幸福',
                image:'https://tse3-mm.cn.bing.net/th/id/OIP-C.WBLUaPzSt04R0S35I5TnVQAAAA?pid=ImgDet&rs=1'
              },
              {
                price:'9.9',
                tag:'美味单品',
                title:'香辣鸡腿堡',
                details:'厚实鸡腿,经典汉堡',
                image:'https://tse2-mm.cn.bing.net/th/id/OIP-C.oXzJqdphv_EPvnYqTQOrywHaEl?pid=ImgDet&rs=1'
              },
              {
                price:'15.9',
                tag:'美味单品',
                title:'梅菜扣肉堡',
                details:'中外菜品融合,碰撞美味火花',
                image:'https://ts1.cn.mm.bing.net/th/id/R-C.4cb3af5914e85f353ea2b9360488d5bc?rik=ctQ7kmcIfhQwbw&riu=http%3a%2f%2fp.cdn-static.cn%2f29440_15945837783598.jpg&ehk=5Okbif9%2bxLfXSM4w9PYmDRmBis5XsOsT923%2brha3lb0%3d&risl=&pid=ImgRaw&r=0'
              },
              {price:'15.9',
              tag:'美味单品',
              title:'粗薯',
              details:'大豆及其制品',
              image:'https://tse2-mm.cn.bing.net/th/id/OIP-C.bS9lYto3UAx0nsyGd0KMuAHaE8?pid=ImgDet&rs=1'  
              }
            ]
          })
          
    }
  } ,
  
  // aaa(e) {
  //   console.log(e);
  // }
  add(e){
    this.setData({
      price:e.currentTarget.dataset.item.price,
      title:e.currentTarget.dataset.item.title
    }) 
    let price=this.data.price
    let name=this.data.title
    let total=(parseFloat(this.data.total)+parseFloat(price)).toFixed(2)
    let type=this.data.foodtypes
    let order=[]
    let foods = this.data.foods
    let b=0
    let i=0
    if(type==0){
      let temp_list = [{
        name: name,
        num: 1
      }]
      foods = foods.concat(temp_list)
      type++   
    }

    else{
      for(i=0;i<type;i++){
        if(name==foods[i].name){
          foods[i].num++
          b=1;
        }//判断是否有点过该菜 
      }
      if(b==0){
        let temp_list = [{
          name: name,
          num: 1
        }]
        foods = foods.concat(temp_list)
        type++
      }
    }
    for(i=0;i<type;i++){
        let str=foods[i].name+" X "+foods[i].num+"；"
        order.push(str)
        
    }
// console.log(total,order,type,foods);
    this.setData({
      total:total,
      order:order,
      foodtypes:type,
      foods: foods

    })
    
  },
  reduce(e){
    this.setData({
      price:e.currentTarget.dataset.item.price,
      name:e.currentTarget.dataset.item.title
    })
    let price=this.data.price
    let name=this.data.name
   
    let type=this.data.foodtypes
    let order=[]
    let foods = this.data.foods
    let i=0
    console.log(type);
    
    for(i=0;i<type;i++){
      if(name==foods[i].name){
        foods[i].num--
        let total=this.data.total-price
        this.setData({
          total:total
        })
        if(foods[i].num==0){
          foods.splice(i,1)
          type--
          // console.log(foods);
          // console.log(type)
        }
        }
      }
      for(i=0;i<type;i++){
        let str=foods[i].name+"X"+foods[i].num+"；"
        order.push(str)
    }
    
    this.setData({
      order:order,
      foodtypes:type,
      foods: foods
    })
    
    console.log(order);
    // console.log(order,total,foods,this.data.foodtypes)
   
  },
     // 显示对话框
    showDialog: function(e) {
this.setData({
  item:e.currentTarget.dataset.item
})
  console.log(e.currentTarget.dataset.item);
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
        isShowDialog: true
      })
      setTimeout(function() {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
    },
    // 隐藏对话框
    hideDialog: function() {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export()
      })
      setTimeout(function() {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export(),
          isShowDialog: false
        })
      }.bind(this), 200)
    },

jump:function(e){
  const app=getApp()

  let total=this.data.total
  app.globalData.total=total
  console.log(total);
  wx.switchTab({
    url: '../myorder/index'
  })
 }
    

});

