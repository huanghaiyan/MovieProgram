// pages/movie/movie.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "currentTab":0,
    "winWidth":0,
    "winHeight":0,
    "indicatorDots":false,
    "autoplay":true,
    "interval":5000,
    "duration":1000,
    "imgUrls":[
      "/images/movie/timg_1.jpg",
      "/images/movie/timg_2.jpg",
      "/images/movie/timg_3.jpg"
    ],
    "movies":[
    ]
  },
  switchNav:function(e){
    var id = e.currentTarget.id;
    this.setData({currentTab:id});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        that.setData({winWidth:res.windowWidth});
        that.setData({winHeight:3*230});
      },
    })
    that.loadMovies();
  },
  /**
   * 请求电影列表
   */
  loadMovies:function(){
    var that = this;
    var key = util.getDataKey();
    console.log(key);
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/weekly?apikey='+key,
      method:'GET',
      header:{
        'Content-Type':'json'
      },
      success:function(res){
        console.log(res);
        var subjects = res.data.subjects;
        var size = subjects.length;//电影总数量
        var len = parseInt(size/3);//每行放置3个电影，计算出需要多少行

        console.log(len);
        that.setData({movies:subjects});
        that.setData({winHeight:(len+1)*240});//动态设置电影内容的高度
      }
    })
  },
  /**
   * 进入详情页
   */
  loadDetail:function(e){
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../movieDetail/movieDetail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})