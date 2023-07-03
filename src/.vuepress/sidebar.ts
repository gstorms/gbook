import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "book/",
      link: "book/",
      children: "structure",
    },
    {
      text:"日志",
      icon:"book",
      prefix:"log/",
      link:"log/",
      children:"structure"
    },
    {
      text: "guide",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
