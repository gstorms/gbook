import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,f as e}from"./app-3f278ba4.js";const l={},r=e('<h1 id="_1-6-9" tabindex="-1"><a class="header-anchor" href="#_1-6-9" aria-hidden="true">#</a> 1.6.9</h1><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><a href="#%E6%96%B0%E5%8A%9F%E8%83%BD">新功能：</a><ul><li><a href="#%E4%B8%80%E5%A2%83%E5%A4%96%E8%B4%AD%E7%89%A9new">一、境外购物new</a></li><li><a href="#%E4%BA%8C%E5%85%91%E6%8D%A2%E7%89%A9%E5%A2%9E%E5%8A%A0%E6%9C%89%E6%95%88%E6%9C%9F">二、兑换物增加有效期</a></li><li><a href="#%E4%B8%89%E4%BC%98%E6%83%A0%E5%88%B8%E6%8F%90%E7%A4%BA%E6%96%87%E5%AD%97%E4%BF%AE%E6%94%B9">三、优惠券提示文字修改</a></li><li><a href="#%E5%9B%9B%E5%85%B6%E4%BB%96">四、其他</a></li></ul></li><li><a href="#BUG%E4%BF%AE%E5%A4%8D">BUG修复</a></li></ul><p><em>2021.7.14</em></p><h3 id="新功能" tabindex="-1"><a class="header-anchor" href="#新功能" aria-hidden="true">#</a> 新功能：</h3><h4 id="一、境外购物new" tabindex="-1"><a class="header-anchor" href="#一、境外购物new" aria-hidden="true">#</a> 一、境外购物new</h4><p>a)搜索结果页面（商品添加国内、保税标签）</p><p>i.只有国内的，只显示国内标签（只有分装的话也显示这个）</p><p>ii.只有境外的显示保税标签</p><p>iii.国内和境外的都有的话，两个标签都显示</p><p>b)商品页面</p><p>i.页面最上方显示艺术图的轮播图</p><p>ii.增加品牌来源和商品来源（国内、境外）显示</p><p>iii.规格显示分类增加“保税仓”、“国内仓”</p><p>iv.规格信息显示</p><p>1.有特价的规格颜色单独设置</p><p>2.选中规格时，当前规格的图片在轮播图第一个图显示</p><p>3.分装将所有规格都显示出来（以前的没有显示4ml、5ml）</p><p>4.缺货的规格灰色不可点击</p><p>v.正品保证弹窗</p><p>1.上线时添加国内仓境外仓显示</p><p>2.外侧显示</p><p>a)正品保证、退换条件、包邮条件</p><p>vi.税费说明弹窗</p><p>vii.点击加入购物车</p><p>1.商品页选择规格</p><p>a)该规格商品直接加入购物车中（有动画）</p><p>2.商品页未选择规格</p><p>a)弹出加入购物车弹窗</p><p>i.增加显示仓库位置</p><p>ii.增加发货选项</p><p>viii.艺术图</p><p>1.上线时下方的艺术图去掉</p><p>ix.发货流程说明</p><p>1.国内</p><p>a)国内仓----送达</p><p>2.境外</p><p>a)海外---保税仓---送达</p><p>c)购物车页面</p><p>i.国内仓</p><p>1.商品在国内仓的都加到这个标签下</p><p>2.兑换物也在国内仓</p><p>ii.保税仓</p><p>1.境外商品在保税仓</p><p>2.境外商品显示进口税</p><p>iii.结算</p><p>1.国内仓、保税仓单独结算，不能同时结算</p><p>2.国内仓、保税仓切换，下方的合辑内容自动重新计算</p><p>iv.兑换物</p><p>1.时效提示</p><p>a)有效期90天</p><p>b)剩余时间超过20天,不进行提示</p><p>c)剩余时间大于0小于等于20天,提示剩余天数</p><p>d)剩余天数等于0天，显示“失效”</p><p>e)选择失效的兑换物不能结算</p><p>d)确认订单页面</p><p>i.国内订单</p><p>1.底部支付分行显示</p><p>2.共XX件应付：￥XX</p><p>3.包邮/含邮费￥XX</p><p>ii.保税订单</p><p>1.底部支付分行显示</p><p>a)共XX件应付：￥XX</p><p>b)包邮/含邮费￥XX、进口税￥XXX</p><p>2.身份证显示</p><p>a)没有身份证</p><p>i.点击身份证,提示填写身份证</p><p>ii.点击“去支付”按钮，弹窗提示填写身份证信息</p><p>1.未填写直接确认，“请填写身份信息”（姓名不能为空）</p><p>2.姓名与收货人不匹配，“姓名与收货人姓名不匹配，请返回修改”</p><p>3.身份证号不正确，“请输入正确的身份证号”</p><p>4.点击弹窗以外区域，弹窗消失</p><p>b)有身份证</p><p>i.显示身份证信息（中间打 *）</p><p>3.商品显示</p><p>a)商品信息</p><p>b)进口税</p><p>4.点击“去支付”</p><p>a)身份证号匹配，直接调用支付</p><p>b)身份证号不匹配，提示身份证信息填写错误</p><p>e)管理收货地址页面</p><p>i.增加身份证显示</p><p>ii.身份证为非必填项</p><p>f)我的订单页面</p><p>i.分类显示</p><p>1.全部，显示全部订单</p><p>2.待付款，只显示待付款订单</p><p>3.进行中，显示已付款、已发货、退款中、部分发货等订单</p><p>4.已完成，显示已完成（已经确认收货）、已关闭、已取消的订单</p><p>ii.总价和邮费、进口税分行显示</p><p>g)订单详情页面</p><p>i.国内订单，无变化</p><p>ii.保税订单</p><p>1.收货地址增加身份证号显示</p><p>2.商品</p><p>a)发货后显示，境外商品不支持退换</p><p>b)增加进口税显示</p><p>c)价格计算，增加进口税的计算</p><h4 id="二、兑换物增加有效期" tabindex="-1"><a class="header-anchor" href="#二、兑换物增加有效期" aria-hidden="true">#</a> 二、兑换物增加有效期</h4><p>a)积分商城页面</p><p>i.抽奖增加国内仓说明，时效说明</p><p>ii.积分规则增加说明</p><p>1.国内仓说明</p><p>2.时限说明</p><p>iii.兑换时提示，兑换物仅支持国内仓发货，有效期90天</p><h4 id="三、优惠券提示文字修改" tabindex="-1"><a class="header-anchor" href="#三、优惠券提示文字修改" aria-hidden="true">#</a> 三、优惠券提示文字修改</h4><p>a)有效期至XXXX-XX-XX</p><p>b)大促期间无法使用</p><h4 id="四、其他" tabindex="-1"><a class="header-anchor" href="#四、其他" aria-hidden="true">#</a> 四、其他</h4><p>1.商城搜索结果</p><p>有正装=&gt;进入商品页，选择正装选项卡</p><p>无正装=&gt;进入商品页，选择分装选项卡</p><p>2.单品页，“闻过”、“拥有”、“想要”红心按钮可以点击，进入香评编辑页面</p><h3 id="bug修复" tabindex="-1"><a class="header-anchor" href="#bug修复" aria-hidden="true">#</a> BUG修复</h3><ol><li>嗅觉DNA没有数据，页面下方出现了分隔条，这个应该不显示</li><li>APP我的=&gt;想要、闻过、拥有页面点击最新、评星等排序无反应</li><li>切换账号，如果嗅觉DNA没有数据，页面会显示之前账号的饼图，这个应该不显示</li><li>提醒页面，话题的提醒，点击需要可以跳转到对应的回复位置（之前可以跳转，现在没了）</li><li>提醒页面，进入其他页再返回到提醒页，页面没有定位之前的位置</li><li>APP帖子页面--&gt;进入其他人的个人页面--&gt;选择另外的帖子进入--&gt;标题显示正确，内容显示成之前的帖子的内容了</li><li>我的页面，进入自己的香评，点击其他用户进入他的个人主页，点击香评，跳转到自己的香评了</li><li>帖子回复后的定位问题 <ol><li>回复楼主，页面定位的最后一页，但是没有在最后一个评论，这个要定位到最后一个评论</li><li>回复楼层，页面要定位在当前楼层处</li></ol></li><li>积分商城页面，进入单品页返回，页面会闪烁一下</li><li>商城搜索，先搜索“宝格丽”，然后搜索“大地”，选择香水进入商品页再返回，搜索结果页面搜索框中显示的是“宝格丽”，但是下边的搜索结果是大地的结果</li><li>切换轮播图的小点，有时候会显示到页面下方</li><li>气味详细页面，点击“评分”进行排序，没有评分香水的要排在后边,如：琥珀</li><li>取消修改头像还再次弹出一次相册</li></ol>',115),h=[r];function d(t,n){return i(),a("div",null,h)}const o=p(l,[["render",d],["__file","1.6.9.html.vue"]]);export{o as default};