# ZipoAI

<p align="center">
  <img src="frontend/assets/zipo_logo.png" alt="ZipoAI Logo" width="150"/>
</p>

<h1 align="center">Zipo - Platform Pembelajaran AI Personal Anda</h1>

<p align="center">
  <a href="https://zipoai.site" target="_blank"><strong>Live Demo</strong></a> &nbsp;&nbsp;&bull;&nbsp;&nbsp;
  <a href="#--fitur-utama">Fitur</a> &nbsp;&nbsp;&bull;&nbsp;&nbsp;
  <a href="#--panduan-instalasi--penggunaan">Instalasi</a>
</p>

Zipo adalah platform pembelajaran multimodal yang dirancang untuk mengubah materi pelajaran pasif menjadi sebuah dialog konversasional yang aktif, visual, dan personal. Aplikasi ini lahir dari kebutuhan untuk menciptakan pengalaman belajar yang lebih adaptif, melampaui keterbatasan platform berbasis teks dengan mengintegrasikan beberapa mode interaksi secara sinergis.

Dengan inspirasi dari kerangka belajar **VARK (Visual, Auditory, Reading/Writing, Kinesthetic)**, Zipo tidak mengotak-ngotakkan pengguna, melainkan menyediakan alat yang fleksibel untuk mendukung berbagai preferensi belajar dalam satu antarmuka terpadu.

---

## ✨ Fitur Utama

*   **Tutor Chatbot Cerdas:** Berinteraksi dengan AI menggunakan metode Sokratik (tanya-jawab) untuk merangsang pemikiran kritis. Anda dapat melampirkan dokumen untuk diskusi yang lebih kontekstual.
*   **Kanvas Generatif:** Atasi keterbatasan teks dengan *mind map* yang digambar secara otomatis oleh AI berdasarkan percakapan, membantu Anda melihat gambaran besar dan hubungan antar konsep.
*   **Agen Suara Interaktif:** Belajar secara *hands-free*! Zipo dilengkapi teknologi Text-to-Speech (TTS) dan Speech-to-Text (STT) berkualitas tinggi, memungkinkan Anda berdiskusi dengan AI menggunakan suara.
*   **Generator Kuis:** Uji pemahaman Anda dengan kuis yang dibuat secara otomatis dari materi pelajaran yang Anda unggah.

---

## 📸 Zipo Beraksi: Pengalaman Belajar Visual & Interaktif

### Kanvas Generatif: Visualisasikan Ide Anda
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1ElyBgO8di0EI9A7Y8kNyknyXy2cIBYIR" alt="Generative Canvas in action" width="700">
</p>
<p align="center">
  <em>Ubah percakapan teks yang abstrak menjadi diagram visual yang mudah dipahami. Saat Anda berdiskusi dengan AI, Kanvas Generatif akan secara otomatis menggambar, menghubungkan, dan menata konsep-konsep kunci, membantu Anda melihat gambaran besar dan memperkuat pemahaman Anda. Selain itu, Zipo Voice Agent juga akan membantu anda belajar lebih mudah dengan menambahkan elemen audio pada penjelasan.</em>
</p>

### Agen Suara Interaktif: Belajar Sambil Berbicara
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1PY0Z1NGEpU2QQFulszOqxs6RBLX6oep1" alt="Live Voice Agent interface" width="700">
</p>
<p align="center">
  <em>Masuki mode percakapan langsung dengan Zipo. Antarmuka Agen Suara menyediakan pengalaman belajar hands-free yang imersif, lengkap dengan visualizer audio dinamis dan transkrip real-time. Ajukan pertanyaan dan dapatkan penjelasan seolah-olah Anda berbicara dengan tutor pribadi.</em>
</p>

---

## 🛠️ Tumpukan Teknologi

Arsitektur Zipo dibangun menggunakan teknologi modern untuk memastikan skalabilitas dan pengalaman pengguna yang responsif.

### Backend
*   **Runtime/Framework:** Node.js, Express.js
*   **Bahasa:** TypeScript
*   **Komunikasi Real-time:** Socket.IO
*   **Database:** MongoDB dengan Mongoose ODM
*   **Autentikasi:** JSON Web Tokens (JWT) & Bcrypt
*   **AI & Layanan Cloud:** Google Generative AI, Google Cloud TTS & STT
*   **Deployment:** Docker

### Frontend
*   **Framework/Library:** React
*   **Bahasa:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS, PostCSS
*   **Manajemen State:** React Hooks
*   **Komunikasi Real-time:** Socket.IO Client

---


## Panduan Instalasi & Penggunaan

Panduan untuk menjalankan aplikasi ZipoAI menggunakan Docker.

### Prasyarat

Pastikan Anda telah menginstal perangkat lunak berikut:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)

### Langkah-langkah Menjalankan Aplikasi

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
