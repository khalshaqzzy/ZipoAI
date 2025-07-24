# ZipoAI

Panduan untuk menjalankan aplikasi ZipoAI menggunakan Docker.

## Prasyarat

Pastikan Anda telah menginstal perangkat lunak berikut:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)

## Langkah-langkah Menjalankan Aplikasi

1.  **Clone Repositori**
    ```bash
    git clone <URL_REPOSITORI_INI>
    cd ZipoAI
    ```

2.  **Konfigurasi Lingkungan (Environment)**

    Aplikasi ini memerlukan dua file konfigurasi penting di root direktori proyek:

    -   **`.env`**: File ini berisi variabel lingkungan yang digunakan oleh backend. Buat file bernama `.env` dan isi sesuai kebutuhan. Contoh variabel yang mungkin diperlukan:
        ```
        # Contoh variabel untuk koneksi database atau API key
        DATABASE_URL=...
        OPENAI_API_KEY=...
        GOOGLE_APPLICATION_CREDENTIALS=/app/google-credentials.json
        ```

    -   **`google-credentials.json`**: File ini berisi kredensial untuk layanan Google Cloud (seperti Text-to-Speech atau Speech-to-Text). Letakkan file kredensial Anda di dalam direktori `backend/`.
        ```
        ZipoAI/
        ├── backend/
        │   ├── google-credentials.json  <-- LETAKKAN FILE DI SINI
        │   └── ...
        └── ...
        ```

3.  **Build dan Jalankan Container**

    Gunakan `docker-compose` untuk membangun image dan menjalankan container frontend serta backend. Perintah ini akan menjalankan versi HTTP.

    ```bash
    docker-compose -f docker-compose.http.yml up --build -d
    ```
    - `--build`: Memaksa Docker untuk membangun image dari awal.
    - `-d`: Menjalankan container di background (detached mode).

4.  **Akses Aplikasi**

    Setelah container berhasil berjalan, aplikasi dapat diakses melalui browser:
    -   **Frontend**: [http://localhost](http://localhost)

5.  **Menghentikan Aplikasi**

    Untuk menghentikan semua container yang berjalan, gunakan perintah:
    ```bash
    docker-compose -f docker-compose.http.yml down
    ```
