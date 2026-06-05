import { common as enCommon } from "./en/common";
import { home as enHome } from "./en/home";
import { projects as enProjects } from "./en/projects";
import { blog as enBlog } from "./en/blog";
import { training as enTraining } from "./en/training";
import { about as enAbout } from "./en/about";
import { contact as enContact } from "./en/contact";

import { common as ptCommon } from "./pt-br/common";
import { home as ptHome } from "./pt-br/home";
import { projects as ptProjects } from "./pt-br/projects";
import { blog as ptBlog } from "./pt-br/blog";
import { training as ptTraining } from "./pt-br/training";
import { about as ptAbout } from "./pt-br/about";
import { contact as ptContact } from "./pt-br/contact";

export const translations = {
  "en-US": {
    common: enCommon,
    home: enHome,
    projects: enProjects,
    blog: enBlog,
    training: enTraining,
    about: enAbout,
    contact: enContact,
  },

  "pt-BR": {
    common: ptCommon,
    home: ptHome,
    projects: ptProjects,
    blog: ptBlog,
    training: ptTraining,
    about: ptAbout,
    contact: ptContact,
  },
};

export type Language = keyof typeof translations;
