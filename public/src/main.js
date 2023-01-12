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
      year: "2018",
      description: "NSC",
      skills: "",
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
      id: "1",
    },
    {
      name: "Kauthar Dreyer",
      contact: "",
      image: "https://postimg.cc/34mvr2rq",
      id: "2",
    },
    {
      name: "Mellisa Mullins",
      contact: "",
      image: "https://postimg.cc/CRnD6yTY",
      id: "3",
    },
    {
      name: "Chipo Saidi",
      contact: "",
      image: "https://postimg.cc/bDmswLc3",
      id: "4",
    },
    {
      name: "Abigail Temm",
      contact: "",
      image: "https://postimg.cc/zHLXXrkG",
      id: "5",
    },
  ])
);
// Local Storage for Projects
localStorage.setItem(
  "MyProjects",
  JSON.stringify([
    {
      link: "",
      projname: "EOMP",
      pic: "",
    },
  ])
);
