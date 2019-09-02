import Vue from "vue";
import { shallowMount } from "@vue/test-utils";

import FriendListItem from "../../../src/components/FriendListItem";

Vue.config.ignoredElements = [
  "v-list-item",
  "v-list-item-content",
  "v-list-item-title",
  "v-list-item-action",
  "v-btn",
  "v-icon",
  "v-divider"
];

describe("Component FriendListItem", () => {
  it("should render the full name of friend", () => {
    const friend = {
      firstName: "John",
      lastName: "Doe",
      fav: true,
      gender: "male",
      id: 1
    };
    const wrapper = shallowMount(FriendListItem, {
      propsData: { friend }
    });
    expect(wrapper.find('v-list-item-content').text()).toEqual(`${friend.firstName} ${friend.lastName}`);
  });
});
