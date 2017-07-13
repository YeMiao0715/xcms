/** layui-v1.0.9_rls MIT License By http://www.layui.com */
 layui.define([ 'layer', 'form' ], function(t) {
   'use strict'; let e = layui.jquery,
     i = layui.layer,
     a = layui.form(),
     l = (layui.hint(), layui.device()),
     n = 'layedit',
     o = 'layui-show',
     r = 'layui-disabled',
     s = function() { const t = this; t.index = 0, t.config = { tool: [ 'strong', 'italic', 'underline', 'del', '|', 'left', 'center', 'right', '|', 'link', 'unlink', 'face', 'image' ], hideTool: [], height: 280 }; }; s.prototype.set = function(t) { const i = this; return e.extend(!0, i.config, t), i; }, s.prototype.on = function(t, e) { return layui.onevent(n, t, e); }, s.prototype.build = function(t, i) {
       i = i || {}; let a = this,
         n = a.config,
         r = 'layui-layedit',
         s = e('#' + t),
         u = 'LAY_layedit_' + ++a.index,
         d = s.next('.' + r),
         y = e.extend({}, n, i),
         f = function() {
           let t = [],
             e = {}; return layui.each(y.hideTool, function(t, i) { e[i] = !0; }), layui.each(y.tool, function(i, a) { C[a] && !e[a] && t.push(C[a]); }), t.join('');
         }(),
         m = e([ '<div class="' + r + '">', '<div class="layui-unselect layui-layedit-tool">' + f + '</div>', '<div class="layui-layedit-iframe">', '<iframe id="' + u + '" name="' + u + '" textarea="' + t + '" frameborder="0"></iframe>', '</div>', '</div>' ].join('')); return l.ie && l.ie < 8 ? s.removeClass('layui-hide').addClass(o) : (d[0] && d.remove(), c.call(a, m, s[0], y), s.addClass('layui-hide').after(m), a.index);
     }, s.prototype.getContent = function(t) { const e = u(t); if (e[0]) return d(e[0].document.body.innerHTML); }, s.prototype.getText = function(t) { const i = u(t); if (i[0]) return e(i[0].document.body).text(); }, s.prototype.sync = function(t) { const i = u(t); if (i[0]) { const a = e('#' + i[1].attr('textarea')); a.val(d(i[0].document.body.innerHTML)); } }, s.prototype.getSelection = function(t) { const e = u(t); if (e[0]) { const i = m(e[0].document); return document.selection ? i.text : i.toString(); } }; var c = function(t, i, a) {
         let l = this,
           n = t.find('iframe'); n.css({ height: a.height }).on('load', function() {
             let o = n.contents(),
               r = n.prop('contentWindow'),
               s = o.find('head'),
               c = e([ '<style>', '*{margin: 0; padding: 0;}', 'body{padding: 10px; line-height: 20px; overflow-x: hidden; word-wrap: break-word; font: 14px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Tahoma,Arial,sans-serif; -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important;}', 'a{color:#01AAED; text-decoration:none;}a:hover{color:#c00}', 'p{margin-bottom: 10px;}', 'img{display: inline-block; border: none; vertical-align: middle;}', 'pre{margin: 10px 0; padding: 10px; line-height: 20px; border: 1px solid #ddd; border-left-width: 6px; background-color: #F2F2F2; color: #333; font-family: Courier New; font-size: 12px;}', '</style>' ].join('')),
               u = o.find('body'); s.append(c), u.attr('contenteditable', 'true').css({ 'min-height': a.height }).html(i.value || ''), y.apply(l, [ r, n, i, a ]), g.call(l, r, t, a);
           });
       },
       u = function(t) {
         let i = e('#LAY_layedit_' + t),
           a = i.prop('contentWindow'); return [ a, i ];
       },
       d = function(t) { return l.ie == 8 && (t = t.replace(/<.+>/g, function(t) { return t.toLowerCase(); })), t; },
       y = function(t, a, n, o) {
         let r = t.document,
           s = e(r.body); s.on('keydown', function(t) {
             const e = t.keyCode; if (e === 13) {
               let a = m(r),
                 l = p(a),
                 n = l.parentNode; if (n.tagName.toLowerCase() === 'pre') { if (t.shiftKey) return; return i.msg('请暂时用shift+enter'), !1; }r.execCommand('formatBlock', !1, '<p>');
             }
           }), e(n).parents('form').on('submit', function() { let t = s.html(); l.ie == 8 && (t = t.replace(/<.+>/g, function(t) { return t.toLowerCase(); })), n.value = t; }), s.on('paste', function(e) { r.execCommand('formatBlock', !1, '<p>'), setTimeout(function() { f.call(t, s), n.value = s.html(); }, 100); });
       },
       f = function(t) { const i = this; i.document; t.find('*[style]').each(function() { const t = this.style.textAlign; this.removeAttribute('style'), e(this).css({ 'text-align': t || '' }); }), t.find('table').addClass('layui-table'), t.find('script,link').remove(); },
       m = function(t) { return t.selection ? t.selection.createRange() : t.getSelection().getRangeAt(0); },
       p = function(t) { return t.endContainer || t.parentElement().childNodes[0]; },
       v = function(t, i, a) {
         let l = this.document,
           n = document.createElement(t); for (const o in i)n.setAttribute(o, i[o]); if (n.removeAttribute('text'), l.selection) { var r = a.text || i.text; if (t === 'a' && !r) return; r && (n.innerHTML = r), a.pasteHTML(e(n).prop('outerHTML')), a.select(); } else { var r = a.toString() || i.text; if (t === 'a' && !r) return; r && (n.innerHTML = r), a.deleteContents(), a.insertNode(n); }
       },
       h = function(t, i) {
         let a = this.document,
           l = 'layedit-tool-active',
           n = p(m(a)),
           o = function(e) { return t.find('.layedit-tool-' + e); }; i && i[i.hasClass(l) ? 'removeClass' : 'addClass'](l), t.find('>i').removeClass(l), o('unlink').addClass(r), e(n).parents().each(function() {
             let t = this.tagName.toLowerCase(),
               e = this.style.textAlign; t !== 'b' && t !== 'strong' || o('b').addClass(l), t !== 'i' && t !== 'em' || o('i').addClass(l), t === 'u' && o('u').addClass(l), t === 'strike' && o('d').addClass(l), t === 'p' && (e === 'center' ? o('center').addClass(l) : e === 'right' ? o('right').addClass(l) : o('left').addClass(l)), t === 'a' && (o('link').addClass(l), o('unlink').removeClass(r));
           });
       },
       g = function(t, a, l) {
         let n = t.document,
           o = e(n.body),
           s = { link(i) {
             let a = p(i),
               l = e(a).parent(); b.call(o, { href: l.attr('href'), target: l.attr('target') }, function(e) { const a = l[0]; a.tagName === 'A' ? a.href = e.url : v.call(t, 'a', { target: e.target, href: e.url, text: e.url }, i); });
           }, unlink(t) { n.execCommand('unlink'); }, face(e) { x.call(this, function(i) { v.call(t, 'img', { src: i.src, alt: i.alt }, e); }); }, image(a) { const n = this; layui.use('upload', function(o) { const r = l.uploadImage || {}; o({ url: r.url, method: r.type, elem: e(n).find('input')[0], unwrap: !0, success(e) { e.code == 0 ? (e.data = e.data || {}, v.call(t, 'img', { src: e.data.src, alt: e.data.title }, a)) : i.msg(e.msg || '上传失败'); } }); }); }, code(e) { k.call(o, function(i) { v.call(t, 'pre', { text: i.code, 'lay-lang': i.lang }, e); }); }, help() { i.open({ type: 2, title: '帮助', area: [ '600px', '380px' ], shadeClose: !0, shade: 0.1, skin: 'layui-layer-msg', content: [ 'http://www.layui.com/about/layedit/help.html', 'no' ] }); } },
           c = a.find('.layui-layedit-tool'),
           u = function() {
             let i = e(this),
               a = i.attr('layedit-event'),
               l = i.attr('lay-command'); if (!i.hasClass(r)) { o.focus(); const u = m(n); u.commonAncestorContainer; l ? (n.execCommand(l), /justifyLeft|justifyCenter|justifyRight/.test(l) && n.execCommand('formatBlock', !1, '<p>'), setTimeout(function() { o.focus(); }, 10)) : s[a] && s[a].call(this, u), h.call(t, c, i); }
           },
           d = /image/; c.find('>i').on('mousedown', function() {
             let t = e(this),
               i = t.attr('layedit-event'); d.test(i) || u.call(this);
           }).on('click', function() {
             let t = e(this),
               i = t.attr('layedit-event'); d.test(i) && u.call(this);
           }), o.on('click', function() { h.call(t, c), i.close(x.index); });
       },
       b = function(t, e) {
         let l = this,
           n = i.open({ type: 1, id: 'LAY_layedit_link', area: '350px', shade: 0.05, shadeClose: !0, moveType: 1, title: '超链接', skin: 'layui-layer-msg', content: [ '<ul class="layui-form" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">URL</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input name="url" lay-verify="url" value="' + (t.href || '') + '" autofocus="true" autocomplete="off" class="layui-input">', '</div>', '</li>', '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">打开方式</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input type="radio" name="target" value="_self" class="layui-input" title="当前窗口"' + (t.target !== '_self' && t.target ? '' : 'checked') + '>', '<input type="radio" name="target" value="_blank" class="layui-input" title="新窗口" ' + (t.target === '_blank' ? 'checked' : '') + '>', '</div>', '</li>', '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-link-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', '</li>', '</ul>' ].join(''), success(t, n) { const o = 'submit(layedit-link-yes)'; a.render('radio'), t.find('.layui-btn-primary').on('click', function() { i.close(n), l.focus(); }), a.on(o, function(t) { i.close(b.index), e && e(t.field); }); } }); b.index = n;
       },
       x = function(t) {
         const a = function() {
           let t = [ '[微笑]', '[嘻嘻]', '[哈哈]', '[可爱]', '[可怜]', '[挖鼻]', '[吃惊]', '[害羞]', '[挤眼]', '[闭嘴]', '[鄙视]', '[爱你]', '[泪]', '[偷笑]', '[亲亲]', '[生病]', '[太开心]', '[白眼]', '[右哼哼]', '[左哼哼]', '[嘘]', '[衰]', '[委屈]', '[吐]', '[哈欠]', '[抱抱]', '[怒]', '[疑问]', '[馋嘴]', '[拜拜]', '[思考]', '[汗]', '[困]', '[睡]', '[钱]', '[失望]', '[酷]', '[色]', '[哼]', '[鼓掌]', '[晕]', '[悲伤]', '[抓狂]', '[黑线]', '[阴险]', '[怒骂]', '[互粉]', '[心]', '[伤心]', '[猪头]', '[熊猫]', '[兔子]', '[ok]', '[耶]', '[good]', '[NO]', '[赞]', '[来]', '[弱]', '[草泥马]', '[神马]', '[囧]', '[浮云]', '[给力]', '[围观]', '[威武]', '[奥特曼]', '[礼物]', '[钟]', '[话筒]', '[蜡烛]', '[蛋糕]' ],
             e = {}; return layui.each(t, function(t, i) { e[i] = layui.cache.dir + 'images/face/' + t + '.gif'; }), e;
         }(); return x.hide = x.hide || function(t) { e(t.target).attr('layedit-event') !== 'face' && i.close(x.index); }, x.index = i.tips(function() { const t = []; return layui.each(a, function(e, i) { t.push('<li title="' + e + '"><img src="' + i + '" alt="' + e + '"></li>'); }), '<ul class="layui-clear">' + t.join('') + '</ul>'; }(), this, { tips: 1, time: 0, skin: 'layui-box layui-util-face', maxWidth: 500, success(l, n) { l.css({ marginTop: -4, marginLeft: -10 }).find('.layui-clear>li').on('click', function() { t && t({ src: a[this.title], alt: this.title }), i.close(n); }), e(document).off('click', x.hide).on('click', x.hide); } });
       },
       k = function(t) {
         let e = this,
           l = i.open({ type: 1, id: 'LAY_layedit_code', area: '550px', shade: 0.05, shadeClose: !0, moveType: 1, title: '插入代码', skin: 'layui-layer-msg', content: [ '<ul class="layui-form layui-form-pane" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label">请选择语言</label>', '<div class="layui-input-block">', '<select name="lang">', '<option value="JavaScript">JavaScript</option>', '<option value="HTML">HTML</option>', '<option value="CSS">CSS</option>', '<option value="Java">Java</option>', '<option value="PHP">PHP</option>', '<option value="C#">C#</option>', '<option value="Python">Python</option>', '<option value="Ruby">Ruby</option>', '<option value="Go">Go</option>', '</select>', '</div>', '</li>', '<li class="layui-form-item layui-form-text">', '<label class="layui-form-label">代码</label>', '<div class="layui-input-block">', '<textarea name="code" lay-verify="required" autofocus="true" class="layui-textarea" style="height: 200px;"></textarea>', '</div>', '</li>', '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-code-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', '</li>', '</ul>' ].join(''), success(l, n) { const o = 'submit(layedit-code-yes)'; a.render('select'), l.find('.layui-btn-primary').on('click', function() { i.close(n), e.focus(); }), a.on(o, function(e) { i.close(k.index), t && t(e.field); }); } }); k.index = l;
       },
       C = { html: '<i class="layui-icon layedit-tool-html" title="HTML源代码" lay-command="html" layedit-event="html"">&#xe64b;</i><span class="layedit-tool-mid"></span>', strong: '<i class="layui-icon layedit-tool-b" title="加粗" lay-command="Bold" layedit-event="b"">&#xe62b;</i>', italic: '<i class="layui-icon layedit-tool-i" title="斜体" lay-command="italic" layedit-event="i"">&#xe644;</i>', underline: '<i class="layui-icon layedit-tool-u" title="下划线" lay-command="underline" layedit-event="u"">&#xe646;</i>', del: '<i class="layui-icon layedit-tool-d" title="删除线" lay-command="strikeThrough" layedit-event="d"">&#xe64f;</i>', '|': '<span class="layedit-tool-mid"></span>', left: '<i class="layui-icon layedit-tool-left" title="左对齐" lay-command="justifyLeft" layedit-event="left"">&#xe649;</i>', center: '<i class="layui-icon layedit-tool-center" title="居中对齐" lay-command="justifyCenter" layedit-event="center"">&#xe647;</i>', right: '<i class="layui-icon layedit-tool-right" title="右对齐" lay-command="justifyRight" layedit-event="right"">&#xe648;</i>', link: '<i class="layui-icon layedit-tool-link" title="插入链接" layedit-event="link"">&#xe64c;</i>', unlink: '<i class="layui-icon layedit-tool-unlink layui-disabled" title="清除链接" lay-command="unlink" layedit-event="unlink"">&#xe64d;</i>', face: '<i class="layui-icon layedit-tool-face" title="表情" layedit-event="face"">&#xe650;</i>', image: '<i class="layui-icon layedit-tool-image" title="图片" layedit-event="image">&#xe64a;<input type="file" name="file"></i>', code: '<i class="layui-icon layedit-tool-code" title="插入代码" layedit-event="code">&#xe64e;</i>', help: '<i class="layui-icon layedit-tool-help" title="帮助" layedit-event="help">&#xe607;</i>' },
       w = new s(); t(n, w);
 });
