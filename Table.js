!function(){
  if (typeof exports === "object" && typeof module !== "undefined"){
    module.exports = Table;//引出模块Table
  }else{
    if(typeof define === "function" && define.amd){
      define(Table);//AMD模块的引出方法
    }else{
      global.Table = Table;
    }
  }
}(this,function(){
  function Table(arg){
    var renderNode = document.querySelector(arg.el);
    var renderTable = document.createElement("table");
    renderTable.id = "tj";
    renderNode.appendChild(renderTable);

    var theadArr = arg.thead;
    var thead = document.createElement("thead");
    renderTable.appendChild(thead);
    theadArr.forEach
  }
})//IIFE 函数自执行