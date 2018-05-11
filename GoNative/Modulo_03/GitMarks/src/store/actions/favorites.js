export const addFavoriteRequest = repoName => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    repoName,
  },
});

export const addFavoriteSuccess = favorite => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    favorite,
  },
});
