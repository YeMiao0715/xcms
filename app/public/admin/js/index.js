/*
 * @Author: YeMiao 
 * @Date: 2017-07-13 17:36:28 
 * @Last Modified by: YeMiao
 * @Last Modified time: 2017-07-14 14:07:18
 */
layui.use(['element','layer'],function(){
  layer = layui.layer;
});
$(function() {
  // pjax 加载
  if (location.pathname == '/admin/') {
    $.pjax({
      url: 'home.html',
      container: '#main',
    });
  }else if(location.pathname == '/admin'){
    $.pjax({
      url: 'admin/home.html',
      container: '#main',
    });
  }
  var on_time = new Date().getTime();
  var new_time = new Date().getTime();
  // 导航栏事件
  $('a').click(function() {
    let click = 1;
    let url = $(this).attr('data');
    let text = $(this).text();
    $.each($('.layui-tab-title').find('li'), function() {
      if (!$(this).text().indexOf(text)) {
        click = 0;
      }
    });
    if (url != undefined && click == 1) {
      $.each($('.layui-tab-title').find('li'), function() {
        $(this).removeClass('layui-this');
      });
      $('.layui-tab-title').append('<li class="layui-this" data="' + url + '">' + text +
      '<i class="layui-icon layui-unselect layui-tab-close" >&#x1006;</i>' +
      '</li>');
      $.pjax({
        url,
        container: '#main',
      });
    } else if (url != undefined) {
      $.each($('.layui-tab-title').find('li'), function() {
        $(this).removeClass('layui-this');
      });
      $.each($('.layui-tab-title').find('li'), function() {
        if (!$(this).text().indexOf(text)) {
          $(this).addClass('layui-this');
          
        }
      });
      $.pjax({
        url,
        container: '#main',
      });
    }
    // 选项卡事件
    $('.layui-tab-title li').off('click').click(function() {
      let url = $(this).attr('data');
      if (url != undefined) {
        $.pjax({
          url,
          container: '#main',
        });
      }
    });
    // 关闭事件
    $('.layui-tab-close').off('click').click(function() {
      if ($(this).parent().next().length == 0) {
        let li = $(this).parent().prev();
        $(this).parent().remove();
        li.addClass('layui-this');
        let url = li.attr('data');
        $.pjax({
          url,
          container: '#main',
        });
      } else if ($(this).parent().next().length != 0 && $(this).parent().hasClass('layui-this')) {
        let li = $(this).parent().next();
        $(this).parent().remove();
        li.addClass('layui-this');
        let url = li.attr('data');
        $.pjax({
          url,
          container: '#main',
        });
      } else {
        $(this).parent().remove();
      }
    });
  });
  // f5 刷新事件
  document.onkeydown = function(e) {
    e = window.event || e;
    let keycode = e.keyCode || e.which;
    if (keycode == 116) {
      if (window.event) { // ie
        try { e.keyCode = 0; } catch (e) {}
        refresh();
        e.returnValue = false;
      } else { // firefox
        refresh();
        e.preventDefault();
      }
    }
  };
  $('body').click(function(){
    new_time = new Date().getTime();
    if(new_time - on_time > 1000*60*60){
      layer.open({
        title: '提示！',
        content: '你已超时！',
        btn: ['确定'],
        shade: [1,'#393d49'],
        yes: function(index,layero){
          $.post('/admin/timeout.html',{
            _csrf: csrf
          },function(data){
            location.href = '/';
          });
        }
      });
    }else{
      on_time = new Date().getTime();
    }
  });
  $(document).off('pjax:start').on('pjax:start', function() {
    
  });
  $(document).off('pjax:end').on('pjax:end', function() {

  });
  // pjax终了
});
// 自定义全局方法
  // 刷新
var refresh = function(){
  let url = window.location.pathname;
  $.pjax({
    url,
    container: '#main',
  });
}
