import { FC } from "react"
import styles from "./styles.module.css"

export const Avatar: FC = () => {
  // return <img className="h-10 w-10" src="/sampleAvatar.jpeg" alt="Avatar"/>
  return <img className={ styles.avatar } src="/sampleAvatar.jpeg" alt="Avatar"/>
}
