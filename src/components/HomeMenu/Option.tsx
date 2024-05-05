import { OptionType } from "../../types/types";

export default function Option({ text }: OptionType) {
  return (
    <li><a href="#">{text}</a></li>
  )
}
