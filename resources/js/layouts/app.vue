<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                         <router-link :to="{name:'Home'}" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                         <router-link :to="{name:'Login'}" class="nav-link" v-if="$store.getters.getToken == 0">Login</router-link>
                    </li>
                    <li class="nav-item">
                         <router-link :to="{name:'Register'}" class="nav-link" v-if="$store.getters.getToken == 0">Register</router-link>
                    </li>
                     <li class="nav-item">
                         <router-link :to="{name:'Dashboard'}" class="nav-link" v-if="$store.getters.getToken != 0">Dashboard</router-link>
                    </li>
                </ul>
            </div>
        </nav>
       <router-view></router-view>
    </div>
</template>