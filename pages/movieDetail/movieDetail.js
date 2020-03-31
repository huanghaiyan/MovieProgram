// pages/movieDetail/movieDetail.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "winWidth": 0,
    "winHeight": 0,
    "movie": [],
    "directors": [],
    "casts": []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var key = util.getDataKey();
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + options.id+'?apikey='+key,
      header:{
        'Content-Type':'json'
      },
      success:function(res){
        console.log(res);
        var movie = res.data;
        that.setData({movie:movie});
        that.setData({directors:movie.directors});
        that.setData({casts:movie.casts});
        wx.setNavigationBarTitle({
          title: movie.title,
        })
      }
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