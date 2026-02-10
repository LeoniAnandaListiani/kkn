<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Galeri Otomatis</title>

<style>
body{
    margin:0;
    padding:20px;
    font-family:Arial;
}

.gallery{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
    gap:15px;
}

.gallery img{
    width:100%;
    height:auto;
    object-fit:contain;
    background:#eee;
    border-radius:10px;
}
</style>
</head>

<body>

<div class="gallery" id="gallery"></div>

<script>
// jumlah foto (ubah sesuai jumlah foto kamu)
const jumlahFoto = 20;

const gallery = document.getElementById("gallery");

for(let i=1;i<=jumlahFoto;i++){

    const img = document.createElement("img");
    img.src = i + ".jpg";

    // kalau foto ga ada -> otomatis dihapus
    img.onerror = function(){
        this.remove();
    };

    gallery.appendChild(img);
}
</script>

</body>
</html>
