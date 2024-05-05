import { ComponentType, ReactNode } from "react";

export interface HomeMenuContextType {
  Option: ComponentType<OptionType>;
  OptionContainer: ComponentType<OptionContainerType>;
  SearchInput: ComponentType;
}

export interface OptionType {
  text: string
}

export interface OptionContainerType {
  children: ReactNode
}

export interface HeaderType {
  children: ReactNode
}