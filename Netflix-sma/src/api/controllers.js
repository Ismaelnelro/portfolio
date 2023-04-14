import { axiosApi } from "./axiosClient";

export const category = {
  movies: "movies",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

export const movieApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosApi.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosApi.get(url, params);
  },
  getVideo: (cate, id) => {
    const url = category[cate] + "/" + id + "/video";
    return axiosApi.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosApi.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosApi.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosApi.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosApi.get(url, { params: {} });
  },
};
