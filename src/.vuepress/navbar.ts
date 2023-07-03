import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "Book",
    icon: "lightbulb",
    prefix: "/book/",
    children: [
      {
        text: "笔记",
        icon: "lightbulb",
        prefix: "notes/note/",
        children: ["参考文档", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "代码片段",
        icon: "lightbulb",
        prefix: "snippet/",
        children: ["readme", { text: "...", icon: "ellipsis", link: "" }],
      }
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
