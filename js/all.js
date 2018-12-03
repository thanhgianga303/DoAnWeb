/**
 * [DonHang description]
 * @param {[type]} khach_hang [description]
 * @param {[type]} thoi_diem  [description]
 * @param {[type]} tong_tien  [description]
 * @param {[type]} tinh_trang [description]
 */
function DonHang(khach_hang, thoi_diem, tong_tien, tinh_trang) {
    this.khach_hang = khach_hang;
    this.thoi_diem = thoi_diem;
    this.tong_tien = tong_tien;
    this.tinh_trang = tinh_trang;
}
var donhang = new Array();
donhang[0] = new DonHang("Trần Văn Nhân", "20/03/2017", 15000000, "Đã giao");
donhang[1] = new DonHang("Trần Văn Dũng", "26/12/2018", 2500000, "Chưa giao");
donhang[2] = new DonHang("Lê Văn Nhân", "20/09/2018", 300000, "Đã giao");
donhang[3] = new DonHang("Nguyễn Văn Trọng", "29/11/2018", 2000000, "Chưa giao");
donhang[4] = new DonHang("Trần Thị Nguyên", "20/03/2017", 18000000, "Đã giao");
donhang[5] = new DonHang("Trần Công Văn", "20/03/2016", 35000000, "Chưa liên lạc");
donhang[6] = new DonHang("Lý Nhân Từ", "10/02/2015", 35000000, "Đã giao");
donhang[7] = new DonHang("Hậu Sĩ ", "20/03/2017", 55000000, "Chưa liên lạc");
donhang[8] = new DonHang("Bùi Nhân Văn", "13/03/2017", 10000000, "Đã giao");
donhang[9] = new DonHang("Lý thị Út", "25/03/2015", 11000000, "Chưa giao");
donhang[10] = new DonHang("Nguyễn Bảo", "03/08/2017", 15000000, "Chưa liên lạc");
/**
 * [TheLoai description]
 * @param {[type]} stt      [description]
 * @param {[type]} ten      [description]
 * @param {[type]} thu_tu   [description]
 * @param {[type]} hien_thi [description]
 */
function DanhMuc(ten, thu_tu, hien_thi) {
    this.ten = ten;
    this.thu_tu = thu_tu;
    this.hien_thi = hien_thi;
}
var danhmuc = new Array();
danhmuc[0] = new DanhMuc("Áo thun", "1", "Có");
danhmuc[1] = new DanhMuc("Áo sơ mi", "2", "Có");
danhmuc[2] = new DanhMuc("Áo khoác", "3", "Có");
danhmuc[3] = new DanhMuc("Quần dài", "4", "Có");
danhmuc[4] = new DanhMuc("Quần short", "5", "Có");
danhmuc[5] = new DanhMuc("NULL", "6", "Không");
/**
 * [User description]
 * @param  {[type]} name      [description]
 * @param  {[type]} dia_chi   [description]
 * @param  {[type]} sdt       [description]
 * @param  {[type]} email     [description]
 * @param  {[type]} gioi_tinh [description]
 * @param  {[type]} ngsinh    [description]
 */
function User(name, dia_chi, sdt, email, gioi_tinh, ngsinh) {
    this.name = name;
    this.dia_chi = dia_chi;
    this.sdt = sdt;
    this.email = email;
    this.gioi_tinh = gioi_tinh;
    this.ngsinh = ngsinh;
}
user = new Array();
user[0] = new User("Nguyễn Quốc Hương", "TP. Hồ Chí Minh", "3117200012", "asdriv0@gmail.com", "Nam", "30/01/1999");
user[1] = new User("Huỳnh Thị Thúy Hằng", "Bình Định", "3117090009", "asdriv1@gmail.com", "Nữ", "26/06/1999");
user[2] = new User("Nguyễn Hữu Đan", "Bình Dương", "3117320060", "asdriv2@gmail.com", "Nam", "25/03/1999");
user[3] = new User("Huỳnh Minh Toàn", "Đồng Nai", "3116410128", "asdriv3@gmail.com", "Nam", "26/10/1998");
user[4] = new User("Lê Minh Sang", "TP. Hồ Chí Minh", "3117100022", "asdriv4@gmail.com", "Nam", "07/09/1999");
user[5] = new User("Nguyễn Thị Hoa", "Trà Vinh", "3117341024", "asdriv6@gmail.com", "Nữ", "21/03/1999");
user[6] = new User("Phạm Băng Băng", "Thái Bình", "3117190063", "asdriv12@gmail.com", "Nữ", "08/05/1999");
user[7] = new User("Ngô Bảo Lộc", "Thái Bình", "3117190063", "asdriv12@gmail.com", "Nam", "08/05/1999");
user[8] = new User("Trịnh Gia Tuệ", "Thái Bình", "3117190063", "asdriv12@gmail.com", "Nữ", "08/05/1999");
user[9] = new User("Trần Ý Nhi", "Thái Bình", "3117190063", "asdriv12@gmail.com", "Nữ", "08/05/1999");
/**
 * [san_pham description]
 * @param  {[type]} masp  [description]
 * @param  {[type]} matl  [description]
 * @param  {[type]} tensp [description]
 * @param  {[type]} gia   [description]
 * @param  {[type]} hinh  [description]
 */
function sanpham(masp, tensp, gia, mau, hinh, matheloai) {
    this.masp = masp;
    this.tensp = tensp;
    this.gia = gia;
    this.mau = mau;
    this.hinh = hinh;
    this.theloai = matheloai;
}



var sp = new Array();
sp[0] = new sanpham("SP001", "Áo Thun Nam Ma Bư Basic", " 150.000", "red", "img/anh1.jpg", "aothun");
sp[1] = new sanpham("SP002", "Áo Thun Nam Ma Bư Basic", "150.000", "blue", "img/anh2.jpg", "aothun");
sp[2] = new sanpham("SP003", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh3.jpg", "aothun");
sp[2] = new sanpham("SP003", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh3.jpg", "aothun");
sp[3] = new sanpham("SP004", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh4.jpg", "aothun");
sp[4] = new sanpham("SP005", "Áo Thun Nam Ma Bư Basic", "150.000", "red", "img/anh5.jpg", "aothun");
sp[5] = new sanpham("SP006", "Áo Thun Nam Ma Bư Basic", "150.000", "blue", "img/anh6.jpg", "aothun");
sp[6] = new sanpham("SP007", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh7.jpg", "aothun");
sp[7] = new sanpham("SP008", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh8.jpg", "aothun");
sp[8] = new sanpham("SP009", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh9.jpg", "aothun");
sp[9] = new sanpham("SP0010", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh10.jpg", "aothun");
sp[10] = new sanpham("SP011", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh11.jpg", "aothun");
sp[11] = new sanpham("SP012", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh12.jpg", "aothun");
sp[12] = new sanpham("SP013", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh13.jpg", "aothun");
sp[13] = new sanpham("SP014", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh14.jpg", "aothun");
sp[14] = new sanpham("SP015", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh15.jpg", "aothun");
sp[15] = new sanpham("SP016", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh16.jpg", "aothun");
sp[16] = new sanpham("SP017", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh17.jpg", "aothun");
sp[17] = new sanpham("SP018", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh18.jpg", "aothun");
sp[18] = new sanpham("SP019", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh19.jpg", "aothun");
sp[19] = new sanpham("SP020", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh20.jpg", "aothun");
sp[20] = new sanpham("SP021", "Áo Khoác Nam Ma Bư Dù", "150.000", "yellow", "img/anh21.jpg", "aokhoac");
sp[21] = new sanpham("SP022", "Áo Khoác Nam Adachi Dù", "150.000", "yellow", "img/anh22.jpg", "aokhoac");
sp[22] = new sanpham("SP023", "Áo Khoác Nam Ma Bư Dù", "150.000", "yellow", "img/anh23.jpg", "aokhoac");
sp[23] = new sanpham("SP024", "Áo Khoác Nam Adachi KaKi", "150.000", "yellow", "img/anh24.jpg", "aokhoac");
sp[24] = new sanpham("SP025", "Áo Khoác Nam Adachi Thun", "150.000", "yellow", "img/anh25.jpg", "aokhoac");
sp[25] = new sanpham("SP026", "Áo Khoác Nam Ma Bư Kaki", "150.000", "yellow", "img/anh26.jpg", "aokhoac");
sp[26] = new sanpham("SP027", "Áo Khoác Nữ Adachi Dù", "150.000", "yellow", "img/anh27.jpg", "aokhoac");
sp[27] = new sanpham("SP028", "Áo Khoác Nam Ma Bư Hoodie", "150.000", "yellow", "img/anh28.jpg", "aokhoac");
sp[28] = new sanpham("SP029", "Áo Khoác Nam Ma Bư Hoodie", "150.000", "yellow", "img/anh29.jpg", "aokhoac");
sp[29] = new sanpham("SP030", "Áo Khoác Nam Ma Bư Thun", "150.000", "yellow", "img/anh30.jpg", "aokhoac");
sp[30] = new sanpham("SP031", "Áo Khoác Nam Ma Bư Thun", "150.000", "yellow", "img/anh31.jpg", "aokhoac");
sp[31] = new sanpham("SP032", "Áo Khoác Nam No Style Thun", "150.000", "yellow", "img/anh32.jpg", "aokhoac");
sp[32] = new sanpham("SP033", "Áo Khoác Nam KiriMaru Thun", "150.000", "yellow", "img/anh33.jpg", "aokhoac");
sp[33] = new sanpham("SP034", "Áo Khoác Nam No Style Thun", "150.000", "yellow", "img/anh34.jpg", "aokhoac");
sp[34] = new sanpham("SP035", "Áo Khoác Nam Ma Bư Hoodie", "150.000", "yellow", "img/anh35.jpg", "aokhoac");
sp[35] = new sanpham("SP036", "Áo Khoác Nam No Style Thun", "150.000", "yellow", "img/anh36.jpg", "aokhoac");
sp[36] = new sanpham("SP037", "Áo Khoác Nam Ma Bư Thun", "150.000", "yellow", "img/anh37.jpg", "aokhoac");
sp[37] = new sanpham("SP038", "Áo Khoác Nam Ma Bư Thun", "150.000", "yellow", "img/anh38.jpg", "aokhoac");
sp[38] = new sanpham("SP039", "Áo Khoác Nam Ma Bư Hoodie", "150.000", "yellow", "img/anh39.jpg", "aokhoac");
sp[39] = new sanpham("SP040", "Áo Khoác Nam Ma Bư Thun", "150.000", "yellow", "img/anh40.jpg", "aokhoac");
sp[40] = new sanpham("SP041", "Sơ Mi Nam Ma Bư ", "150.000", "yellow", "img/anh41.jpg", "aosomi");
sp[41] = new sanpham("SP042", "Sơ Mi Nam No Style ", "150.000", "yellow", "img/anh42.jpg", "aosomi");
sp[42] = new sanpham("SP043", "Sơ Mi Nam Ma Bư ", "150.000", "yellow", "img/anh43.jpg", "aosomi");
sp[43] = new sanpham("SP044", "Sơ Mi Nam No Style ", "150.000", "yellow", "img/anh44.jpg", "aosomi");
sp[44] = new sanpham("SP045", "Sơ Mi Nam Ma Bư ", "150.000", "yellow", "img/anh45.jpg", "aosomi");
sp[45] = new sanpham("SP046", "Sơ Mi Nam Ma Bư ", "150.000", "yellow", "img/anh46.jpg", "aosomi");
sp[46] = new sanpham("SP047", "Sơ Mi Nam Ma Bư ", "150.000", "yellow", "img/anh47.jpg", "aosomi");
sp[47] = new sanpham("SP048", "Sơ Mi Nam No Style", "150.000", "yellow", "img/anh48.jpg", "aosomi");
sp[48] = new sanpham("SP049", "Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh49.jpg", "aosomi");
sp[49] = new sanpham("SP050", "Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh50.jpg", "aosomi");
sp[50] = new sanpham("SP051", "Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh51.jpg", "aosomi");
sp[51] = new sanpham("SP052", "Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh52.jpg", "aosomi");
sp[52] = new sanpham("SP053", "Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh53.jpg", "aosomi");
sp[53] = new sanpham("SP054", "Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh54.jpg", "aosomi");
sp[54] = new sanpham("SP055", "Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh55.jpg", "aosomi");
sp[55] = new sanpham("SP056", "Sơ Mi Nam Ma Bư Caro ", "150.000", "yellow", "img/anh56.jpg", "aosomi");
sp[56] = new sanpham("SP057", "Sơ Mi Nam No Style", "150.000", "yellow", "img/anh57.jpg", "aosomi");
sp[57] = new sanpham("SP058", "Sơ Mi Nam Ma Bư Caro", "150.000", "yellow", "img/anh58.jpg", "aosomi");
sp[58] = new sanpham("SP059", "Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh59.jpg", "aosomi");
sp[59] = new sanpham("SP060", "Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh60.jpg", "aosomi");
sp[60] = new sanpham("SP061", "Quần Jean Nam No Style Dài", "150.000", "yellow", "img/anh61.jpg", "quandai");
sp[61] = new sanpham("SP062", "Quần Jean Nam No Style Dài", "150.000", "yellow", "img/anh62.jpg", "quandai");
sp[62] = new sanpham("SP063", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh63.jpg", "quandai");
sp[63] = new sanpham("SP064", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh64.jpg", "quandai");
sp[64] = new sanpham("SP065", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh65.jpg", "quandai");
sp[65] = new sanpham("SP066", "Quần Kaki Nam No Style Dài ", "150.000", "yellow", "img/anh66.jpg", "quandai");
sp[66] = new sanpham("SP067", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh67.jpg", "quandai");
sp[67] = new sanpham("SP068", "Quần Jean Nam No Style Dài", "150.000", "yellow", "img/anh68.jpg", "quandai");
sp[68] = new sanpham("SP069", "Quần Jean Nam No Style Dài ", "150.000", "yellow", "img/anh69.jpg", "quandai");
sp[69] = new sanpham("SP070", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh70.jpg", "quandai");
sp[70] = new sanpham("SP071", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh71.jpg", "quandai");
sp[71] = new sanpham("SP072", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh72.jpg", "quandai");
sp[72] = new sanpham("SP073", "Quần Jean Nam No Style Dài", "150.000", "yellow", "img/anh73.jpg", "quandai");
sp[73] = new sanpham("SP074", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh74.jpg", "quandai");
sp[74] = new sanpham("SP075", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh75.jpg", "quandai");
sp[75] = new sanpham("SP076", "Quần Jean Nam Ma Bư Dài", "150.000", "yellow", "img/anh76.jpg", "quandai");
sp[76] = new sanpham("SP077", "Quần tây Nam No Style Dài", "150.000", "yellow", "img/anh77.jpg", "quandai");
sp[77] = new sanpham("SP078", "Quần tây Nam No Style Dài", "150.000", "yellow", "img/anh78.jpg", "quandai");
sp[78] = new sanpham("SP079", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh79.jpg", "quandai");
sp[79] = new sanpham("SP080", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh80.jpg", "quandai");
sp[80] = new sanpham("SP081", "Quần Kaki Nam No Style", "150.000", "yellow", "img/anh81.jpg", "quanshort");
sp[81] = new sanpham("SP082", "Quần Thun Nam No Style", "150.000", "yellow", "img/anh82.jpg", "quanshort");
sp[82] = new sanpham("SP083", "Quần Kaki Nam Ma Bư ", "150.000", "yellow", "img/anh83.jpg", "quanshort");
sp[83] = new sanpham("SP084", "Quần Kaki Nam Ma Bư ", "150.000", "yellow", "img/anh84.jpg", "quanshort");
sp[84] = new sanpham("SP085", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh85.jpg", "quanshort");
sp[85] = new sanpham("SP086", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh86.jpg", "quanshort");
sp[86] = new sanpham("SP087", "Quần Kaki Nam No Style", "150.000", "yellow", "img/anh87.jpg", "quanshort");
sp[87] = new sanpham("SP088", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh88.jpg", "quanshort");
sp[88] = new sanpham("SP089", "Quần Kaki Nam Ma Bư ", "150.000", "yellow", "img/anh89.jpg", "quanshort");
sp[89] = new sanpham("SP090", "Quần Sooc Nam Ma Bư", "150.000", "yellow", "img/anh90.jpg", "quanshort");
sp[90] = new sanpham("SP091", "Quần Kaki Nam No Style", "150.000", "yellow", "img/anh91.jpg", "quanshort");
sp[91] = new sanpham("SP092", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh92.jpg", "quanshort");
sp[92] = new sanpham("SP093", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh93.jpg", "quanshort");
sp[93] = new sanpham("SP094", "Quần Jean Nam Adachi ", "150.000", "yellow", "img/anh94.jpg", "quanshort");
sp[94] = new sanpham("SP095", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh95.jpg", "quanshort");
sp[95] = new sanpham("SP096", "Quần Jean Nam Ma Bư", "150.000", "yellow", "img/anh96.jpg", "quanshort");
sp[96] = new sanpham("SP097", "Quần Jean Nam Ma Bư", "150.000", "yellow", "img/anh97.jpg", "quanshort");
sp[97] = new sanpham("SP098", "Quần Jean Nam Ma Bư", "150.000", "yellow", "img/anh98.jpg", "quanshort");
sp[98] = new sanpham("SP099", "Quần Jean Nam Ma Bư", "150.000", "yellow", "img/anh99.jpg", "quanshort");
sp[99] = new sanpham("SP0100", "Quần Jean Nam Ma Bư", "150.000", "yellow", "img/anh100.jpg", "quanshort");

// -------------------------------------------Hoàn tất khởi tạo----------------------------
// 


function load_don_hang() {
    var s = 0;
    var stt = 1;
    for (var i = 0; i < donhang.length; i++) {
        s += donhang[i].tong_tien;
        document.getElementsByTagName("tbody")[0].innerHTML += '\
                            <tr>\
                                <td>' + (stt++) + '</td>\
                                <td>' + donhang[i].khach_hang + '</td>\
                                <td>' + donhang[i].thoi_diem + '</td>\
                                <td>' + donhang[i].tong_tien + ' VND</td>\
                                <td>' + donhang[i].tinh_trang + '</td>\
                            </tr>';
    }
    document.getElementsByTagName("tbody")[0].innerHTML += '\
                <tr>\
                    <td colspan="5" style="color: red;background: white;text-align:right;padding-right:10px">Tổng tiền : ' + s + ' VND</td>\
                </tr>';
}
function load_quan_ly_user() {
    for (var i = 0; i < user.length; i++) {
        document.getElementById('table-user').innerHTML += '\
                    <tr>\
                        <td>' + (i + 1) + '</td>\
                        <td>' + user[i].name + '</td>\
                        <td>' + user[i].dia_chi + '</td>\
                        <td>' + user[i].sdt + '</td>\
                        <td>' + user[i].email + '</td>\
                        <td>' + user[i].gioi_tinh + '</td>\
                        <td>' + user[i].ngsinh + '</td>\
                        <td>\
                            <button class="xoa_sp">Xóa</button><br>\
                        </td>\
                    </tr>';
    }
}
function load_quan_ly_danh_muc() {
    for (var i = 0; i < danhmuc.length; i++) {
        document.getElementById('table-dm').innerHTML += '\
                    <tr>\
                        <td>' + (i + 1) + '</td>\
                        <td>' + danhmuc[i].ten + '</td>\
                        <td>' + danhmuc[i].thu_tu + '</td>\
                        <td>' + danhmuc[i].hien_thi + '</td>\
                        <td>\
                            <button class="xoa_sp">Xóa</button><br>\
                            <button class="sua_sp">Sửa</button>\
                        </td>\
                    </tr>';
    }
}

function load_quan_ly_sp() {
    for (var i = 0; i < sp.length; i++) {
        document.getElementById('table-sp').innerHTML += '\
                    <tr>\
                        <td>' + (i + 1) + '</td>\
                        <td>' + sp[i].masp + '</td>\
                        <td>' + sp[i].tensp + '</td>\
                        <td>' + sp[i].gia + '</td>\
                        <td>' + sp[i].mau + '</td>\
						<td><img src="../' +sp[i].hinh + '" width="110px"></td>\
                        <td>' + sp[i].theloai + '</td>\
                        <td>\
                            <button class="xoa_sp">Xóa</button><br>\
                            <button class="sua_sp">Sửa</button>\
                        </td>\
                    </tr>';
    }
}
function load_khach_hang(){
	document.getElementById("Client").innerHTML=user.length+" Khách hàng";
	document.getElementById("Client1").innerHTML=user.length;
}
function load_tong_doanh_thu(){
	var s=0;
	var s1=0;
	for (var i = 0; i < donhang.length; i++) {
        if(donhang[i].tinh_trang=="Đã giao"){
		s += donhang[i].tong_tien;
		s1++;}
	}
	document.getElementById("Money").innerHTML=s+" VND";
	document.getElementById("Sold").innerHTML=s1+" Cái";
}
function Tong_sp(){
	document.getElementById("tong_sp").innerHTML=sp.length;
}
function danh_muc(){
	document.getElementById("danh_muc").innerHTML=danhmuc.length;
}
function don_hang(){
	document.getElementById("don_hang").innerHTML=donhang.length;
}
//Load nội dung lên từng trang
window.onload = () => {
    url = window.location.href;
    if (url.indexOf('qldh') !== -1) {
        load_don_hang();
        document.getElementById('trang_thai').onchange = function() {
            load_trang_thai_don_hang(this.value);
            xem_chi_tiet_hoa_don();
        };
        xem_chi_tiet_hoa_don();
    } else if (url.indexOf('qluser') !== -1) {
        load_quan_ly_user();
        xoa_user();
    } else if (url.indexOf('qldm') !== -1) {
        load_quan_ly_danh_muc();
        them_xoa_dm();
    } else if (url.indexOf('qlsp') !== -1) {
        load_quan_ly_sp();
        them_xoa_sp();
    } else if (url.indexOf('admin') !== -1) {
		load_khach_hang();
		load_tong_doanh_thu();
		Tong_sp();
		danh_muc();
		don_hang();
	}
};

//Các hàm xử lý đối tượng
//
//
//
//
function popup_themsp() {
    document.getElementsByClassName('popup-themsp')[0].style.display = 'block';
}

function close_popup_themsp() {
    document.getElementsByClassName('popup-themsp')[0].style.display = 'none';
    try {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'none';
    } catch (e) {
        console.log("Đang ở trang Quản lý Đơn Hàng");
    }
}
//Thêm sự kiện cho nút sửa và xoá
function them_xoa_sp() {
    var sua_sp = document.getElementsByClassName('sua_sp');
    var xoa_sp = document.getElementsByClassName('xoa_sp');
    for (var i = 0; i < sua_sp.length; i++) {
        them_thong_tin_sua_sp(sua_sp[i], i);
        xoa_sp_i(xoa_sp[i], i);
    }
};

function them_xoa_dm() {
    var sua_sp = document.getElementsByClassName('sua_sp');
    var xoa_sp = document.getElementsByClassName('xoa_sp');
    for (var i = 0; i < sua_sp.length; i++) {
        them_thong_tin_sua_dm(sua_sp[i], i);
        xoa_dm_i(xoa_sp[i], i);
    }
};
// Xoá sp thứ i
function xoa_sp_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    });
}
//load thông tin của sản phẩm lên form sửa sản phẩm
function them_thong_tin_sua_sp(e, i) {
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'block';
        document.getElementsByClassName('them-ten')[1].value = phone[i].tensp;
        document.getElementsByClassName('them-gia')[1].value = phone[i].gia;
        document.getElementsByClassName('them-thu-tu')[1].value = phone[i].masp;
        document.getElementsByClassName('them-loai')[1].value = phone[i].loai;
        document.getElementsByClassName('sua-hinh')[0].setAttribute('src', '../' + phone[i].hinh);
    });
}
// Xoá dm thứ i
function xoa_dm_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    });
}
//load thông tin của sản phẩm lên form sửa danh mục
function them_thong_tin_sua_dm(e, i) {
    e.addEventListener('click', function() {
        document.getElementsByClassName('popup-themsp')[1].style.display = 'block';
        document.getElementsByClassName('them-ten')[1].value = danhmuc[i].ten;
        document.getElementsByClassName('them-thu-tu')[1].value = danhmuc[i].thu_tu;
        document.getElementsByClassName('hien-thi')[1].setAttribute('checked', '');
        // document.getElementsByClassName('them-loai')[1].value = phone[i].loai;
        // document.getElementsByClassName('sua-hinh')[0].setAttribute('src', '../' + phone[i].hinh);
    });
}


//quản lý user
function xoa_user() {
    var xoa_sp = document.getElementsByClassName('xoa_sp');
    for (var i = 0; i < xoa_sp.length; i++) {
        xoa_user_i(xoa_sp[i], i);
    }
};
// Xoá sp thứ i
function xoa_user_i(e, i) {
    e.addEventListener('click', function(e) {
        if (confirm('Xác nhận xoá')) {
            document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    });
}



function load_trang_thai_don_hang(va) {
    var s = 0;
    var stt = 1;
    document.getElementsByTagName("tbody")[0].innerHTML = "";
    for (var i = 0; i < donhang.length; i++) {
        if (va == donhang[i].tinh_trang || va == "all") {
            s += donhang[i].tong_tien;
            document.getElementsByTagName("tbody")[0].innerHTML += '\
                            <tr>\
                                <td>' + (stt++) + '</td>\
                                <td>' + donhang[i].khach_hang + '</td>\
                                <td>' + donhang[i].thoi_diem + '</td>\
                                <td>' + donhang[i].tong_tien + ' VND</td>\
                                <td>' + donhang[i].tinh_trang + '</td>\
                            </tr>';
        }
    }
    document.getElementsByTagName("tbody")[0].innerHTML += '\
                <tr>\
                    <td colspan="5" style="color: red;background: white;text-align:right;padding-right:10px">Tổng tiền : ' + s + ' VND</td>\
                </tr>';
}

function xem_chi_tiet_hoa_don() {
    var tr = document.querySelectorAll('tbody tr');
    for (var i = 0; i < tr.length - 1; i++) {
        load_chi_tiet_hoa_don(i, tr[i]);
    }
}

function load_chi_tiet_hoa_don(i, e) {
    e.onclick = () => {
        document.getElementsByClassName('popup-themsp')[0].style.display = "block";
        console.log(donhang[i].khach_hang);
        document.getElementsByClassName('popup-themsp-left__input')[0].innerHTML = donhang[i].khach_hang;
        document.getElementsByClassName('popup-themsp-left__input')[1].innerHTML = donhang[i].thoi_diem;
        document.getElementsByClassName('popup-themsp-left__input')[2].innerHTML = donhang[i].tong_tien;
        document.getElementsByClassName('popup-themsp-left__input')[3].innerHTML = donhang[i].tong_tien;
        document.getElementsByClassName('popup-themsp-left__input')[4].innerHTML = donhang[i].tinh_trang;
    }
}