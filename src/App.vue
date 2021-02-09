<template>
  <div id="app">
   
   <h1>{{ postsCount }}</h1>

   <div class="post" 
   v-for="post in allPosts" 
   :key="post.id"
   >
   <h3>{{ post.title }}</h3>
   <p>{{ post.body }}</p>
   </div> 

   <PostForm/>

  </div>
</template>

<script>
// Importing vuex getters
import {mapGetters, mapActions} from 'vuex'
import PostForm from './components/PostForm.vue'

export default {

  name: 'App',

  components: {
  PostForm 
  },
  
  // Importing vuex getters
  // Здесь всегда массив строк, который должен совпадать с функциями там
  computed: mapGetters(["allPosts", "postsCount"]),
  
  // Вызываем экшн в родительском компоненте
  methods:  mapActions(["fetchPosts"]),
  
  // Вызываем action при загрузке компонента
  mounted() {
  this.fetchPosts(3);
  },
  


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post{
border: 1px solid #ccc;
border-radius: 5px;
margin-bottom: 1rem;
padding: 3px 30px;
}

.post:hover{
background-color: rgb(0, 92, 46);  
color: #fff;
cursor: pointer;
}
</style>
