export const trimSearchInput = value => {
  return value && value.trim() ? value.trim() : null;
};

export const generateSearchCriteria = (searchText, favoriteStatus) => {
  return {
    searchText,
    favoriteStatus
  };
};

const checkFirstName = (firstName, value) => firstName.indexOf(value) >= 0;
const checkLastName = (lastName, value) => lastName.indexOf(value) >= 0;
export const checkFriendValues = (
  friend,
  { searchText = "", favoriteStatus = false }
) => {
  const favStatus = favoriteStatus ? friend.fav : true;
  const nameMatched = searchText
    ? checkFirstName(friend.firstName, searchText) ||
      checkLastName(friend.lastName, searchText)
    : true;

  return favStatus && nameMatched;
};

export const getFavQueryParam = route =>
  route && route.query && `${route.query.favorites}` === "true";
