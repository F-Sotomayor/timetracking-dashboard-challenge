import mock from "../../data.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: () => {
    return Promise.resolve(mock);
  },
};
