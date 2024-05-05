import { HeaderType } from "../../types/types";
import style from "./Header.module.css";

export default function Header({ children }: HeaderType) {
  return (
    <div className={style.headerContainer}>{children}</div>
  )
}
