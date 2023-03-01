export const state = () => ({
  posts: [],
  paginate: {},
});

export const getters = {
  getPosts(state) {
    return state.posts;
  },
  getPaginate(state) {
    return state.paginate;
  },
};

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_PAGINATE(state, paginate) {
    state.paginate = paginate;
  },
};

export const actions = {
  async fetchPosts({ commit }) {
    const res = await this.$axios.get("post");
    const posts = await res.data.data;
    const paginate = res.data.meta;
    commit("SET_PAGINATE", paginate);
    commit("SET_POSTS", posts);
  },
};
