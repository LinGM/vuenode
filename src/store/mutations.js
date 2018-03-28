import * as types from './mutation-types'

const mutations = {
    [types.SET_ARTICLE_ID](state,articleId){
        state.articleId = articleId
    }
}

export default mutations