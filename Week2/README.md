# Week 2 — Pertanyaan Refleksi

## 1. Mengapa Pages Router disebut sebagai routing berbasis file?
Pages Router di Next.js disebut routing berbasis file karena rute (URL) aplikasi otomatis dibentuk dari struktur dan nama file di folder `pages`.
Contoh: file `pages/about.js` akan otomatis menjadi rute `/about`, dan `pages/index.tsx` menjadi rute `/` tanpa perlu konfigurasi router manual.

## 2. Apa perbedaan Next.js dengan React standar (CRA)?
- **Routing**: Next.js punya routing bawaan (Pages/App Router), sedangkan CRA perlu library tambahan seperti `react-router-dom`.
- **Rendering**: Next.js mendukung SSR (Server-Side Rendering), SSG (Static Site Generation), dan ISR; CRA umumnya SPA client-side rendering.
- **API Route**: Next.js bisa membuat endpoint backend lewat `pages/api/*`, CRA tidak menyediakan fitur backend bawaan.
- **Optimasi bawaan**: Next.js menyediakan optimasi seperti image optimization (`next/image`), code splitting per halaman, dan konfigurasi build yang lebih terintegrasi.

## 3. Apa fungsi perintah `npm run dev`?
Perintah `npm run dev` menjalankan server development Next.js untuk proses pengembangan.
Biasanya mencakup hot reload/fast refresh, error overlay, dan build yang lebih cepat untuk development sehingga perubahan kode langsung terlihat di browser.

## 4. Apa perbedaan `npm run dev` dan `npm run build`?
- **`npm run dev`**: menjalankan aplikasi dalam mode pengembangan (development) untuk coding dan debugging.
- **`npm run build`**: membuat hasil build produksi (production build) yang teroptimasi (minify, bundling, pre-render) dan output-nya dipakai untuk dijalankan dengan `npm run start`.
