import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      alias: "/",
      meta: {
        title: "Home"
      },
      component: Home
    },
    {
      path: "/friends",
      component: () => import("@/views/Friends"),
      children: [
        {
          path: "",
          name: "friends",
          meta: {
            title: "Friends List"
          },
          component: () => import("@/views/FriendList")
        },
        {
          path: "details/:id",
          component: () => import("@/views/FriendDetails"),
          children: [
            {
              path: "notes",
              name: "friendDetails",
              meta: {
                title: "Friend Notes"
              },
              component: () => import("@/views/FriendNotesList")
            },
            {
              path: "edit",
              name: "editFriend",
              meta: {
                title: "Edit Friend"
              },
              component: () => import("@/views/UpsertFriend")
            },
            {
              path: "*",
              redirect: "notes"
            }
          ]
        },
        {
          path: "add",
          name: "addFriend",
          meta: {
            title: "Add Friend"
          },
          component: () => import("@/views/UpsertFriend")
        },
        {
          path: "*",
          redirect: { name: "friends" }
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "About Us"
      },
      component: () => import("./views/About")
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});
