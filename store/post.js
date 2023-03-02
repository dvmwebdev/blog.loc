export const state = () => ({
  posts: [],
  paginate: {},
  postsLatest: [],
});

export const getters = {
  getPosts(state) {
    return state.posts;
  },
  getPostsLatest(state) {
    return state.postsLatest;
  },
};

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_POSTS_LATEST(state, postsLatest) {
    state.postsLatest = postsLatest;
  },
};

export const actions = {
  async fetchPosts({ commit }) {
    const res = await this.$axios.get("posts");
    const posts = res.data.data;
    const paginate = res.data.meta;
    commit("SET_PAGINATE", paginate);
    commit("SET_POSTS", posts);
  },
  async fetchPostsLatest({ commit }) {
    const res = await this.$axios.get("posts/latest");
    const postsLatest = res.data.data;
    commit("SET_POSTS_LATEST", postsLatest);
  },
};
