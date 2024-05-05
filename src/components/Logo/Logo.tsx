import LogoIcon from "../../assets/dota-icon.png"
import style from "./Logo.module.css"

export default function Logo() {
  return (
    <img className={style.logo} src={LogoIcon} />
  )
}
