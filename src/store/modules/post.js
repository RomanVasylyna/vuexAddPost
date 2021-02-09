// Vuex - state management library
// У каждого отдельного компонента есть 4 составляющих

export default {
  // Здесь просто хранятся данные, которые потом отправляються компоненту vue
  // Компонент vue отрисовывает данные из state при помощи фукнции render
  // Иными словами, компонент рендерится
  
  // Метод render
  state: {
  posts: [] //Просто пустой исходный пустой массив
  },
  
  // Получаем данные из state
  getters: {

  allPosts(state) { //Первый параметр всегда state
  return state.posts; // Возвращаем массив posts из state
  },
 
  postsCount(state) { //Получаем количество постов
  return state.posts.length;
  },

  }, 
   
   /* Когда данные загрузились или же когда мы изменили что-то в 
   actions мы с помощью метода commit - вызываем мутации
   */

  // Функции, которые напрямую изменяют данные в state
  // Методы только синхронные
  // Метод mutate
  mutations: {
  
  updatePosts(state, posts) { // Первый параметр всегда state
  state.posts = posts;
  },

  createPost(state, newPost) {
  state.posts.unshift(newPost);

  }

  },
  
 /* Если происходит какое-то событие во vue компоненте, 
 то мы с помощью функции dispatch вызываем actions, которые могут быть
 асинхронными (fetch запросы кладем сюда?) и работают с backend API
 */
  
  // Метод commit
  actions: {

  async fetchPosts(ctx, limit = 3) { //В actions первый параметр всегда контекст ctx

  const res = await fetch(  // Получаем данные от АПИ
  'https://jsonplaceholder.typicode.com/posts?_limit=' + limit   
  );

  const posts = await res.json(); // Кладем в переменную posts данные от АПИ в формате JSON

  ctx.commit('updatePosts', posts); //Первый параметр это названией мутации, которую мы хотим вызвать
  }


  },
   
}
