import fetch from 'isomorphic-fetch';
import { generateId } from 'lib/utils';

export default {
  state: [],

  reducers: {
    addUser(state, userObject) {
      return [...state, {
        name: userObject.login,
        id: generateId(),
        githubId: userObject.id,
        avatar: userObject.avatar_url,
        location: userObject.location,
        grid: {x: 0, y: 0, w: 6, h: 1},
      }];
    },
    deleteUser(state, id) {
      return state.filter((user) => ( user.id !== id ));
    }
  },
  effects: (dispatch) => ({
    async fetchUser(username, rootState) {
      //Here we dispatching action from another model:
      dispatch.loading.setLoading(true);

      //Some async stuff testing..
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.status >= 400) {
          throw new Error("Bad response from Github server");
        }
        const user = await response.json();
        dispatch.users.addUser(user);
      } catch (e) {
        console.error(e);
      } finally {
        dispatch.loading.setLoading(false);
      }
    }
  })
};
