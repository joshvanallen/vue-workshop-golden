import { shallowMount } from "@vue/test-utils";
import FriendDetailsTitle from "@/components/FriendDetailsTitle.vue";

describe("FriendDetailsTitle.vue", () => {
  it("renders full name when passed prop.friend", () => {
    const friend = {
      firstName: 'John',
      lastName: 'Doe'
    };
    const wrapper = shallowMount(FriendDetailsTitle, {
      propsData: { friend }
    });
    expect(wrapper.text()).toMatchSnapshot();
  });
});
