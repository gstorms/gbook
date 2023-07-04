import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Book",
    icon: "lightbulb",
    prefix: "/book/",
    children: [
      {
        text: "笔记",
        icon: "lightbulb",
        prefix: "notes/note/",
        children: ["参考文档"],
      },
      {
        text: "代码片段",
        icon: "lightbulb",
        prefix: "snippet/",
        children: ["readme"],
      },
    ],
  },
  "/log/",
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
