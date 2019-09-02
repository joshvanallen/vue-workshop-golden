import { actions } from "../../../src/store/home.module";
import {
  FETCH_FRIENDS,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from "../../../src/store/actions.type";
import {
  SET_FRIENDS,
  UPDATE_FAVORITE_IN_LIST
} from "../../../src/store/mutations.type";
const mockData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    fav: false
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    gender: "female",
    fav: true
  },
  {
    id: 3,
    firstName: "Foo",
    lastName: "Bar",
    gender: "undisclosed",
    fav: true
  }
];
jest.mock("@/api/friend.service", () => {
  return {
    getAll: jest.fn().mockImplementation(async () => {
      return {
        data: mockData
      };
    }),
    patchFavorite: jest.fn().mockImplementation(async (id, favoriteStatus) => {
      return {
        data: {
          id,
          fav: favoriteStatus
        }
      };
    })
  };
});

describe("Vuex Home Module", () => {
  it("should commit the friend list", async () => {
    const context = { commit: jest.fn() };
    await actions[FETCH_FRIENDS](context);
    expect(context.commit).toHaveBeenCalledWith(SET_FRIENDS, mockData);
  });
  it("should commit the favorite status as false", async () => {
    const context = { commit: jest.fn() };
    await actions[REMOVE_FAVORITE](context, 1);
    expect(context.commit).toHaveBeenCalledWith(UPDATE_FAVORITE_IN_LIST, {
      id: 1,
      fav: false
    });
  });
  it("should commit the favorite status as true", async () => {
    const context = { commit: jest.fn() };
    await actions[ADD_FAVORITE](context, 1);
    expect(context.commit).toHaveBeenCalledWith(UPDATE_FAVORITE_IN_LIST, {
      id: 1,
      fav: true
    });
  });
});
