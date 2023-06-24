import { FC } from "react"
import { HeaderNavigation } from "@/components/layouts/Avatar/HeaderNavigation"
import styles from "./styles.module.css"

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <HeaderNavigation />
    </div>
  )
}
