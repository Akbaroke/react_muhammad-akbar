# Explorasi Global State

Global State Redux adalah konsep pengelolaan keadaan global dalam aplikasi web menggunakan pustaka Redux. Redux memungkinkan penyimpanan data di satu tempat yang dapat diakses dari seluruh komponen dalam aplikasi. Terdapat tiga konsep utama dalam Redux: Store, Actions, dan Reducers. Store merupakan tempat penyimpanan global yang berisi seluruh keadaan aplikasi. Actions adalah objek yang menggambarkan perubahan keadaan dan dipicu oleh suatu kejadian. Reducers adalah fungsi yang memproses action dan mengubah keadaan di dalam store.

Proses penggunaan Redux dimulai dari dispatching action, yang kemudian diterima oleh reducer untuk mengubah keadaan dalam store. Komponen-komponen yang membutuhkan akses ke global state dapat melakukannya melalui connect() atau hooks khusus seperti useSelector dan useDispatch.

Kelebihan dari penggunaan Global State Redux adalah mempermudah manajemen keadaan kompleks dan memungkinkan pemisahan antara logika aplikasi dan keadaan. Namun, Redux juga membutuhkan konfigurasi tambahan dan dapat terasa berlebihan untuk proyek-proyek kecil atau sederhana.

Penting untuk memahami dan menguasai konsep-konsep dasar Redux untuk memaksimalkan manfaatnya dalam pengembangan aplikasi web yang lebih besar dan kompleks.