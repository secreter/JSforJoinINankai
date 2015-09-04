var i={
	love:"inankai",
	you:[0,1,2,3,4,5,6,7,8,9],
	j:function(a){return a.toString().charCodeAt(0)},
	s:function(a){return String.fromCharCode(a)}
}
var we=(function() {
	need=[];
	for(var j=0;j<30;j++){
		need.push(i.s(i.j(i.you[j%10])+16+parseInt(j/10)*10));
	}
	return need;
})();
i.nankai=function(){
	alert(we[23]+we[5]+we[12]+we[3]+we[15]+we[13]+we[5]+" to "+i.love+","+i.s(114)+i.s(101)+i.s(115)+i.s(117)+i.s(109)+i.s(101)+" to "+i.love+we[0]+i.love.substring(1)+".edu.cn");
}
i.nankai();