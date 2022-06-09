export const state = () => ({
    posts: []
})
export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    }
}