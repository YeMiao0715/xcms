layui.use('element');
$(function(){    
  // pjax 加载
  if(location.pathname == '/'){
    $.pjax({
      url: 'home.html',
      container: '#main',
    });
  }
  // 导航栏事件
  $('a').click(function(){
    let click = 1;
    let url = $(this).attr('data');
    let text = $(this).text();
    $.each($('.layui-tab-title').find('li'),function(){
      if(!$(this).text().indexOf(text)){        
        click = 0;
      }
    });
    if(url != undefined && click == 1){      
      $.each($('.layui-tab-title').find('li'),function(){
        $(this).removeClass("layui-this");
      });
      $('.layui-tab-title').append('<li class="layui-this" data="'+url+'">'+text+
      '<i class="layui-icon layui-unselect layui-tab-close" >&#x1006;</i>'+
      '</li>');
      $.pjax({
        url: url,
        container: '#main'
      });
    }else if(url != undefined){
      $.each($('.layui-tab-title').find('li'),function(){
        $(this).removeClass("layui-this");
      });
      $.each($('.layui-tab-title').find('li'),function(){
        if(!$(this).text().indexOf(text)){
          $(this).addClass('layui-this');
        }        
      });
      $.pjax({
        url: url,
        container: '#main'
      });
    }    
    // 选项卡事件
    $('.layui-tab-title li').off('click').click(function(){
      let url = $(this).attr('data');
        if(url != undefined){
          $.pjax({
            url: url,
            container: '#main'
          });  
        }  
    })
    // 关闭事件
    $('.layui-tab-close').off('click').click(function(){
      if($(this).parent().next().length == 0){
        let li = $(this).parent().prev();
        $(this).parent().remove();
        li.addClass('layui-this');
        let url = li.attr('data');        
        $.pjax({
          url: url,
          container: '#main'
        });
      }else if($(this).parent().next().length != 0 && $(this).parent().hasClass('layui-this')){
        let li = $(this).parent().next();
        $(this).parent().remove();
        li.addClass('layui-this');
        let url = li.attr('data');
        $.pjax({
          url: url,
          container: '#main'
        })
      }else{
        $(this).parent().remove();              
      }      
    });
  });
  // f5 刷新事件
  document.onkeydown = function(e){  
    e = window.event || e;  
    var keycode = e.keyCode || e.which;  
    if(keycode == 116){  
      if(window.event){// ie  
        try{e.keyCode = 0;}catch(e){}  
        let url = window.location.pathname;
        $.pjax({
          url: url,
          container: '#main'
        });
        e.returnValue = false;  
      }else{// firefox 
        let url = window.location.pathname;
        $.pjax({
          url: url,
          container: '#main'
        });
        e.preventDefault(); 
      }  
    }  
  }
  $(document).off('pjax:start').on('pjax:start',function(){
    // $('body').append('<div id="loading" style="display: flex;  align-items: center;  justify-content: space-between;">'+
    // '<img id="loading" src="public/img/loading.gif" style=""></img>'+
    // '</div>');    
  });
  $(document).off('pjax:end').on('pjax:end', function() {
    // layui.use('form');
    // $('#lay').html('<script src="/public/p/layui/layui.js"></script>');
    
    // setTimeout(function(){
    //   $('#loading').remove();
    // },2000);
  });
  // pjax终了
});