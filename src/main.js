import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
// Local Storage for Resume
localStorage.setItem(
  "MyResume",
  JSON.stringify([
    {
      year: "",
      description: "",
      skills: "",
      socialicon: "",
    },
  ])
);

// Local Storage for Testimonials
localStorage.setItem(
  "MyTestimonials",
  JSON.stringify([
    {
      name: "Megan Alexander",
      contact: "",
      image: "https://postimg.cc/bZm040dH",
      id: "",
    },
    {
      name: "Kauthar Dreyer",
      contact: "",
      image: "https://postimg.cc/34mvr2rq",
      id: "",
    },
    {
      name: "Mellisa Mullins",
      contact: "",
      image: "https://postimg.cc/CRnD6yTY",
      id: "",
    },
    {
      name: "Chipo Saidi",
      contact: "",
      image: "https://postimg.cc/bDmswLc3",
      id: "",
    },
    {
      name: "Abigail Temm",
      contact: "",
      image: "https://postimg.cc/zHLXXrkG",
      id: "",
    },
  ])
);
// Local Storage for Projects
localStorage.setItem(
  "MyProjects",
  JSON.stringify([
    {
      link: "",
      projname: "",
      pic: "",
    },
  ])
);
