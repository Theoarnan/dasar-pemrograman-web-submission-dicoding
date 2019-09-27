// membuat fungsi untuk meload data sesuai parameter ke content. 
function loadData(param) {
    var dataContent = document.getElementById('isi_content');
    dataContent.innerHTML = '';
    if (param == 'profilSaya') {
        dataContent.innerHTML =
            "<img id='fotoProfil' class='fotoProfil'></img>"+
            "<h2>PROFIL</h2>" +
            "<h3>Nama   : Arnan Abdiel Theopilus <br>"+ 
            "Tempat, Tanggal Lahir : Ngawi, 23 Juni 1999 <br>"+
            "Alamat Rumah : Paron, Ngawi, Jawa Timur <br>"+
            "Alamat Sekarang : Kalasan, Sleman, Yoyakarta <br>"+
            "Hobi  : Ngoding, Futsal, Ngegame <br>" +
            "Status  : Jomblo <br>" +
            "<h2>TENTANG SAYA</h2>" +
            "<h3><p>Halo.. Perkenalkan saya Arnan  dari <a href=https://www.ukrimuniversity.ac.id target=_blank>Universitas Kristen Immanuel Yogyakarta</a>, Saya adalah mahasiswa semester 5 di prodi FISKOM(FISIKA&KOMPUTER) <br>"+
            "Di sini saya mengambil konsentrasi Web sebagai fokus utama saya. Selain itu saya juga banyak belajar lain hal seperti : <br>"+
            "1. Pemrograman Android dengan Java dan Kotlin <br>"+
            "2. Pemrograman dengan bahasa Python <br>"+
            "3. Web service dan Komputasi <br>"+
            "Dengan banyaknya Ilmu yang saya dapat saya yakin akan terus berkembang, kerana saya memiliki motto hidup yaitu <strong>Never Try Never Know.</strong> </p></h3>";

        var ftProfil = document.getElementById('fotoProfil');
        ftProfil.src = "img_res/potoSaya.jpeg";

    }else if (param == 'KontakSaya'){
        dataContent.innerHTML = 
        "<h2>Kontak</h2>" +
        "<h3>Email   : arnantheopilus@student.ukrimuniversity.ac.id <br>"+ 
        "Phone(WA)  : 081226096403 <br>"+
        "IG : Klik <a href=https://www.instagram.com/theoarnan/ target=_blank>@theoarnan</a> <br>"+
        "Github :  Klik <a href=https://github.com/Theoarnan target=_blank>@theoarnan</a> <br></h3>"+
        "<h1></h1>";

    }else if(param =='profilOrangTua'){
        dataContent.innerHTML =
            "<h2>PROFIL AYAH</h2>" +
            "<img id='fotoPapi' class='fotoProfil'></img>"+
            "<h3>Nama   : Ishak Giyoto <br>"+ 
            "Tempat, Tanggal Lahir : Sragen, 1 Juni 1954 <br>"+
            "Alamat Rumah : Paron, Ngawi, Jawa Timur <br>"+
            "Pekerjaan  : Pendeta <br>" +
            "Status  : Gembala <br></h3>"+
            "<h2></h2>"+
            "<h2>PROFIL IBU</h2>" +
            "<img id='fotoMami' class='fotoProfil'></img>"+
            "<h3>Nama   : Ribka Martje Seba <br>"+ 
            "Tempat, Tanggal Lahir : Minahasa, 9 April 1962 <br>"+
            "Alamat Rumah : Paron, Ngawi, Jawa Timur <br>"+
            "Pekerjaan  : Pendeta <br>" +
            "Status  : Gembala <br></h3>"+
            "<h1></h1>"+
            "<h3>GOD BLESS YOU</h3>";

        var ftPapi = document.getElementById('fotoPapi');
        var ftMami = document.getElementById('fotoMami');
        ftPapi.src = "img_res/imgPapi.jpg";
        ftMami.src = "img_res/imgMami.jpg";
    
    }else if(param =='profilKakak'){
        dataContent.innerHTML =
            "<h2>PROFIL My Sister</h2>" +
            "<img id='fotoSis' class='fotoProfil'></img>"+
            "<h3>Nama   : Elsha Puspitasari <br>"+ 
            "Tempat, Tanggal Lahir : Sragen, 24 Agustus 1989 <br>"+
            "Alamat Rumah : Paron, Ngawi, Jawa Timur <br>"+
            "Pekerjaan  : Aparatur Sipil Negara <br>" +
            "Status  : Pekerja <br></h3>"+
            "<h2></h2>"+
            "<h2>PROFIL My Brother</h2>" +
            "<img id='fotoBro' class='fotoProfil'></img>"+
            "<h3>Nama   : Aditya Natanael <br>"+ 
            "Tempat, Tanggal Lahir : Sragen, 9 April 1983 <br>"+
            "Alamat Sekarang : Jakarta Timur <br>"+
            "Pekerjaan  : Programmer IT PT. SAYAP MAS UTAMA <br>" +
            "Status  : Pekerja <br></h3>"+
            "<h1></h1>"+
            "<h3>GOD BLESS YOU</h3>";

        var ftBro = document.getElementById('fotoSis');
        var ftSis = document.getElementById('fotoBro');
        ftSis.src = "img_res/imgSister.jpg";
        ftBro.src = "img_res/imgBrother.jpg";

     } else {
        dataContent.innerHTML = "<h2>SELAMAT DATANG DI Web Theoarnan..</h2>"+
                                "<h3>Untuk melihat-lihat silahkan Pilih dan Klik menu diatas yak! :)</h3>";
    }
}