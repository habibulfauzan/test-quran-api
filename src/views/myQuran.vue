<template>
  <my-navbar></my-navbar>
    <div class="container my-5">
        <!-- CARI -->
        <section class="cari">
            <div class="mb-3">
                <label for="cariSurah" class="form-label">Cari Surah</label>
                <input class="input form-control me-2" type="number" placeholder="Masukkan nomor Surah" aria-label="Search"
                    id="surah"
                    v-model="inputSurah"
                    name="surah">
            </div>
            <button id="submit" class="btn btn-outline-dark" @click="onClick">Search</button>
            <p id="test"></p>
        </section>

        <!-- sssssssssssssssssssss -->
        <section class="surah">
            <div>
                <h1 v-if="namaSurah" class="judul">{{ namaSurah.name_complex }}</h1>
            </div>

            <div class="suara">
                <p v-if="audio">
                <audio controls class="suaraa">
                    <source :src="audio.audio_url" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                </p>
            </div>
        </section>

        <section class="result">
        <div class="hasil">
            <p class="ayat d-flex justify-content-end" v-for="ayat in ayah" :key="ayat.id">{{bismillah}}{{ ayat.text_uthmani }} {{ ayat.text }}</p>
        </div>
        </section>
    <!-- Akhir Surah -->
    </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/views/myNavbar.vue"

export default {
  components: { "my-navbar": NavBar },
  data() {
    return {
      ayah: [],
      audio: null,
      namaSurah: null,
      inputSurah: "",
      bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    };
  },

  methods: {
    async onClick() {
      let nomor = this.inputSurah;
      let ayat = `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${nomor}`;
      let arti = `https://api.quran.com/api/v4/quran/translations/134?chapter_number=${nomor}`;
      //let bismillah = "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ"

      let judul = "https://api.quran.com/api/v4/chapters?language=en";
      let suara = "https://api.quran.com/api/v4/chapter_recitations/161?language=en";

      if (nomor <= 0 || nomor > 114) {
        alert("Field Tidak Boleh Kosong");
      } else {
        const reqAyat = axios.get(ayat);
        const reqArti = axios.get(arti);
        const reqJudul = axios.get(judul);
        const reqSuara = axios.get(suara);

        axios.all([reqAyat, reqArti, reqJudul, reqSuara]).then(
          axios.spread((...response) => {
            const responseAyat = response[0];
            const responseArti = response[1];
            const responseJudul = response[2];
            const responseSuara = response[3];

            const a = responseAyat.data.verses;
            const b = responseArti.data.translations;

            const gabung = (a, b) => {
              const res = [];
              for (let i = 0; i < a.length + b.length; i++) {
                if (i % 2 === 0) {
                  res.push(a[i / 2]);
                } else {
                  res.push(b[(i - 1) / 2]);
                }
              }
              return res;
            };

            this.ayah = gabung(a, b);
            this.audio = responseSuara.data.audio_files[nomor - 1];
            this.namaSurah = responseJudul.data.chapters[nomor - 1];
          })
        );
      }
    },
  },
};
</script>