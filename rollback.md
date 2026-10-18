# ROLLBACK PLAN & PROCEDURES: Feature 1 (`feature/interactive-simulators`)

> **Tujuan Dokumen:**  
> Panduan praktis langkah demi langkah untuk mengembalikan codebase ke kondisi awal branch `main` jika fitur simulator interaktif ingin dibatalkan (*rollback*) atau ditolak.

---

## 1. Identifikasi State Awal (Base State)

* **Base Branch:** `main`
* **Base Commit Hash:** `00428e5` (*chore: add vercel.json configuration for security headers and caching*)
* **Feature Branch:** `feature/interactive-simulators`
* **File yang Dimodifikasi pada Fitur 1:**
  * `index.html` (Penambahan seksi `#simulators` & link nav)
  * `style.css` (Penambahan styling terminal simulator, gauge, dan comparator)
  * `script.js` (Penambahan event logic slider, TARP state machine, preset, dan comparator)
* **File Tambahan Baru:**
  * `feature-one.md`
  * `rollback.md`

---

## 2. Opsi Prosedur Rollback

### Opsi A: Rollback Penuh & Hapus Branch Fitur (Rekomendasi jika tidak jadi dipakai)
Jalankan perintah berikut di terminal PowerShell:

```powershell
# 1. Pastikan Anda berada di direktori project
cd "d:\Ilham Harazki\Belajar Vibe Code\michael-jhonson-arnold"

# 2. Batalkan seluruh perubahan lokal yang belum di-commit (jika ada)
git restore .
git clean -fd

# 3. Pindah kembali ke branch utama (main)
git checkout main

# 4. Hapus branch feature/interactive-simulators secara permanen
git branch -D feature/interactive-simulators

# 5. (Opsional) Jika branch sempat di-push ke remote GitHub, hapus dari remote:
git push origin --delete feature/interactive-simulators
```

---

### Opsi B: Revert Commit Tertentu Tanpa Menghapus Branch
Jika perubahan pada branch ini sudah di-commit namun ingin di-*undo* secara historis:

```powershell
# Revert commit terakhir pada branch ini
git revert HEAD --no-edit

# Atau reset hard ke commit awal main
git reset --hard 00428e5
```

---

### Opsi C: Menyimpan Pekerjaan Sebagai Draft (Stash) Tanpa Menghapus
Jika ingin kembali ke `main` untuk sementara waktu tanpa membuang kode simulator:

```powershell
# Simpan perubahan saat ini ke Git stash
git stash save "draft-interactive-simulators"

# Pindah ke main
git checkout main

# Kapan pun ingin melanjutkan kembali nanti:
git checkout feature/interactive-simulators
git stash pop
```

---

## 3. Langkah Verifikasi Pasca-Rollback

Setelah menjalankan salah satu opsi rollback di atas, lakukan verifikasi berikut:

1. **Cek Status Git:**
   ```powershell
   git status
   ```
   *Ekspektasi output:*
   ```
   On branch main
   Your branch is up to date with 'origin/main'.
   nothing to commit, working tree clean
   ```

2. **Cek Commit Terakhir:**
   ```powershell
   git log -1 --oneline
   ```
   *Ekspektasi output:* Menampilkan commit `00428e5`.

3. **Cek Browser Lokal:**
   * Buka `http://localhost:8000`.
   * Pastikan seksi `#simulators` sudah tidak ada dan halaman kembali ke versi awal `main` yang bersih.
