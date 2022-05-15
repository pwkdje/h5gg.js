
h5gg.clearResults();
h5gg.searchNumber('350', 'I32', '0x100000000', '0x1600000000');
var count = h5gg.getResultsCount();//获取总共搜索结果个数
var r = h5gg.getResults(count);//获取总共搜索结果个数的数组
//开始循环遍历
for(var i=0; i<count; i++) {
var addr1 = r[i].address;//获取每个搜索结果的地址 address弟子 value值 type类型
var weishu = /DB0$/;//设置置顶结尾
var pd = weishu.test(addr1);//判断地址是否包含指定结尾
//进行修改
if(pd){
h5gg.setValue(addr1, 999999999, "I32");
}
//循环到最后一次进行弹窗提示
if(i == count-1){
alert('修改完毕');
}
}
