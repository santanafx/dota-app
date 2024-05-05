import { PropsWithChildren, createContext } from "react";
import { HomeMenuContextType } from "../../types/types";
import style from "./HomeMenu.module.css";
import Option from "./Option";
import OptionContainer from "./OptionContainer";
import SearchInput from "./SearchInput";

const HomeMenuContext = createContext<HomeMenuContextType>({
  Option,
  OptionContainer,
  SearchInput
})

export default function HomeMenu({ children }: PropsWithChildren) {
  return (
    <HomeMenuContext.Provider value={{}}>
      <nav className={style.HomeMenuNav}>
        {children}
      </nav>
    </HomeMenuContext.Provider>
  )
}

HomeMenu.Option = Option;
HomeMenu.OptionContainer = OptionContainer;
HomeMenu.SearchInput = SearchInput;