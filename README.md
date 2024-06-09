# Routing Nested and Dynamic Router

1. Cara untuk routing Next JS berbeda dengan React JS. Kalau react kita perlu setup routernya satu-satu, kalau Next JS hanya membuat file/folder di dalam pages, kemudian otomatis akan routing, baik secara nested atau tidak tergantung penempatan folder.
2. Dynamic Router biasanya digunakan untuk show product atau hal lain yang sifatnya jamak. Cara membuatnya adalah dengan `[id].tsx`. Lebih lanjutnya check di folder `product`

# Layouting
1. Untuk menerapkan `atomic desain` maka buat folder `components` di dalam `src`. Buat Layouts dengan detail component yang ingin dibuat (contoh navbar).
2. Untuk membuat navbar ada di semua page, maka gunakan `App Shell`. dan `App shell` dimasukkan kedalam `app.tsx` supaya tidak sering berubah.

