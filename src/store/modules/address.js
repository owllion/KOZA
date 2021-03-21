//api--> https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json
const state = {
    //使用者目前所選縣市，此為預設
    currCity:'台北市',
    //目前所選行政區
    currDistrict: '北投區',
    //api回傳的縣市、行政區資訊
    location: [],
}

const getters = { 
   isAuthenticated : state => state.token !== null,
}

const actions = { 

}

const mutations = {
      sercurrCity(state, value) {
          state.currCity = value;
      }
      
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true, 
}
