// Importa ícones da biblioteca do React
import * as BsIcons from "react-icons/bs";
import * as Fa6Icons from "react-icons/fa6";
import * as FcIcons from "react-icons/fc";
import * as TbIcons from "react-icons/tb";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";

// Exporta os ícones
export const Icons = {
  ...BsIcons,
  ...Fa6Icons,
  ...FcIcons,
  ...TbIcons,
  ...SiIcons,
  ...BiIcons,
  ...IoIcons,
}

// Exporta o componente DotLottieReact para animações Lottie
export { DotLottieReact } from '@lottiefiles/dotlottie-react';

export { default as Header } from "./Header";
export { default as Footer } from "./Footer";