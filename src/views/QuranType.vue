<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link :to="{name: 'views.myquran'}"
            class="navbar-brand">Habibul Fauzan</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link :to="{name: 'views.myquran'}"
                    class="nav-link active" aria-current="page">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'views.quran2'}"
                    class="nav-link active" aria-current="page">Test page</router-link>
                </li>
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li> -->
            </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <div class="container my-5">
        <h3>Surah {{surah}}</h3>
            <ul class="text-center" v-for="ayat in ayat" :key="ayat">
                {{ayat}}
            </ul>
            <p>Artinya: </p>
            <ul class="text-center" v-for="translate in translate" :key="translate">
                {{translate}}
            </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ayat: [],
      surah: [],
      translate: [],
    };
  },
  async mounted() {
    const url = await axios.get("https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=2");
    this.ayat = url.data.verses.map(({text_uthmani}) => text_uthmani)

    const surah = await axios.get("https://api.quran.com/api/v4/chapters/2?language=id");
    this.surah = surah.data.chapter.name_complex;

    const translate = await axios.get("https://api.quran.com/api/v4/quran/translations/134?chapter_number=2");
    this.translate = translate.data.translations.map(({text}) => text);
  },
};
</script>