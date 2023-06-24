import { FC } from "react"
import { HeaderNavigation } from "@/components/molecules/HeaderNavigation"
import styles from "./styles.module.css"

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <HeaderNavigation />
    </div>
  )
}
