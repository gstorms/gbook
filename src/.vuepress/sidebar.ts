import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
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
    "slides",
  ],
});
