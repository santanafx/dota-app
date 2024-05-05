
import { AiOutlineSearch } from "react-icons/ai";
import style from "./HomeMenu.module.css";

export default function SearchInput() {
  return (
    <div className={style.HomeMenuInputContainer}>
      <AiOutlineSearch className={style.SearchIcon} />
      <input className={style.HomeMenuInput} type="text" placeholder="Procurar herois, id de partidas e jogadores" />
    </div>
  )
}
