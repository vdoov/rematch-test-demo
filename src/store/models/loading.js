export default {
  state: {
    isLoading: false
  },

  reducers: {
    setLoading(state, isLoading) {
      return { ...state, isLoading };
    }
  },
};
