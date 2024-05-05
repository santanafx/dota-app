import { OptionContainerType } from "../../types/types";
import style from "./HomeMenu.module.css";

export default function OptionContainer({ children }: OptionContainerType) {
  return (
    <ul className={style.HomeMenuContainer}>{children}</ul>
  )
}
