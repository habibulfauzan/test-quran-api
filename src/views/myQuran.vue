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
            </div>
        </div>
    </nav>
    <div class="container my-5">
        <form
            id="app"
            @submit="checkForm"
            action="https://vuejs.org/"
            method="post"
        >
            <div id="keyword" class="mb-3">
                <label for="cariSurah" class="form-label">Cari Surah</label>
                <input class="input form-control me-2" type="number" placeholder="Search" aria-label="Search"
                    id="surah"
                    v-model="surah"
                    name="surah">
            </div>
        </form>
        <button id="submit" class="btn btn-outline-dark" type="submit" @click="onClick">Search</button>
        <p id="test"></p>
        {{ayat}}
    </div>
</template>

<script>
// import axios from "axios";
export default {
};
</script>