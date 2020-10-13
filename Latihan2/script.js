function arr(){
    var at = ["buku", "tas", "kacamata", "bolpoin", "penghapus"];
    var x = prompt("Tambah Data ");
    if(at.includes(x)){
        alert(x + " " + "Sudah Ada Di Data");
        console.log(x + " " + "Sudah Ada Di Data");
        console.log(at.sort());
    }
    else{
        at.push(x);
        alert(x + " " + "Berhasil Ditambahkan");
        console.log(x + " " + "Berhasil Ditambahkan");
        console.log(at.sort());
    }
}
