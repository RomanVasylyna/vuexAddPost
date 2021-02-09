import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post' // Импортируем модуль

Vue.use(Vuex)

export default new Vuex.Store({
  // Модули находяться в папке /store/modules и содержат обычные js обьекты
  modules: {
  post // Получаем модуль
  }

})
