import axios from "axios";

export const trimSearchInput = value => {
  return value && value.trim() ? value.trim() : null;
};

export const generateSearchCriteria = (trimmedValue, favs) => {
  return {
    text: trimmedValue,
    favs
  };
};

const checkFirstName = (firstName, value) => firstName.indexOf(value) >= 0;
const checkLastName = (lastName, value) => lastName.indexOf(value) >= 0;
export const checkFriendValues = (friend, value) => {
  const favStatus = value.favs ? friend.fav : true;
  const nameMatched = value.text
    ? checkFirstName(friend.firstName, value.text) ||
      checkLastName(friend.lastName, value.text)
    : true;

  return favStatus && nameMatched;
};

export const getFavQueryParam = route =>
  route && route.query && `${route.query.favorites}` === "true";

export const handleFriend = (friendData, originalFriend) => {
  let verb = "post";
  let url = "http://localhost:3000/friends";
  if (originalFriend && originalFriend.id) {
    verb = "put";
    friendData.id = originalFriend.id;
    url = `${url}/${friendData.id}`;
  }
  return axios[verb](url, friendData);
};
