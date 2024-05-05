import Header from "../components/Header/Header";
import HomeMenu from "../components/HomeMenu/HomeMenu";
import Logo from "../components/Logo/Logo";
import style from "./Home.module.css";


export default function Home() {
  return (
    <div className={style.homeContainer}>
      <Header>
        <Logo />
        <HomeMenu>
          <HomeMenu.OptionContainer>
            <HomeMenu.SearchInput />
            <HomeMenu.Option text={"Home"} />
            <HomeMenu.Option text={"Meta"} />
            <HomeMenu.Option text={"Partidas"} />
            <HomeMenu.Option text={"Jogadores"} />
          </HomeMenu.OptionContainer>
        </HomeMenu>
      </Header>
    </div>
  )
}
