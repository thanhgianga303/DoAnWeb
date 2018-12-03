function xoaSanPham(vitri){
	 var l=JSON.parse(localStorage.getItem("listSanPham"));
	 // gia=JSON.parse(localStorage.getItem("listGia"));
	for(var i=0;i<l.length;i++)
		if(i==vitri) {
			l.splice(vitri,1);
		}
	localStorage.setItem("listSanPham", JSON.stringify(l));
    // localStorage.setItem("listGia", JSON.stringify(gia));
}
window.addEventListener('load', function() {
   layTenDangNhap();
   taoDanhMuc();
   // themVaoGioHang();
  
});
function layTenDangNhap(){
    var tenDangNhap=getUser();
    var listSanPham=JSON.parse(window.localStorage.getItem("listSanPham"));
    if(tenDangNhap.username==undefined) localStorage.removeItem("listSanPham");
    if(tenDangNhap.username!=undefined)
    // alert(tenDangNhap);
    {console.log(tenDangNhap.username);
    var s="";
    s=tenDangNhap.username;
    document.getElementById("tendangnhap").innerHTML=s+`<div><a href="#" onclick="dangXuat();">Đăng xuất</a></div>`;
}
    else return false;
}
var danhmuc = [{
    name: 'ÁO THUN',
    key: 'aothun'
}, {
    name: 'ÁO KHOÁC',
    key: 'aokhoac'
}, {
    name: 'ÁO SƠ MI',
    key: 'aosomi'
}, {
    name: 'QUẦN DÀI',
    key: 'quandai'
}, {
    name: 'QUẦN SHORT',
    key: 'quanshort'
}, ];

function taoDanhMuc() {
    var s = "";
    var url = window.location.href;
    var params = url.split('?');
    //alert(params[0]);
    //alert(params[1]);
    var chuoicon = params[1];//aokhoac&0
    var s = "";
    var dem = 0;
    var lienket = "";
    if (params.length > 1) {
        chuoicon = chuoicon.split('&');
        //alert("chuoi con");
        //alert(chuoicon[1]);
        var vitri = chuoicon[1];//0
        var loaisp = chuoicon[0];//aokhoac
    }
    for (var i = 0; i < danhmuc.length; i++) {
        var color = (loaisp==danhmuc[i].key?"red":"black");
        s = s + '<a href="index.html?' + danhmuc[i].key + '&0"><div style="color:'+color+'">' + danhmuc[i].name + '</div></a>';
    }
    //alert(s);
    document.getElementById("aside").innerHTML = s;
}
function thanhToan(){
	var listSanPham=JSON.parse(localStorage.getItem("listSanPham"));
	if(listSanPham==null) {
		alert("Giỏ hàng trống");
		return;
	}
	alert("Đã thanh toán");
	window.localStorage.removeItem("listSanPham");
	window.location.reload();
}