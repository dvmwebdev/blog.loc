export const state = () => ({
  posts: [],
});

export const getters = {
  getPosts(state) {
    return state.posts;
  },
};

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async fetchPosts({ commit }) {
    const res = await this.$axios.get("post");
    const posts = await res.data.data;
    commit("SET_POSTS", posts);
  },
};
