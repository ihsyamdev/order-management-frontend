import { FC } from "react"
import styles from './styles.module.css'

export const Logo: FC = () => {
  return <img className={styles.logo} src="/sampleLogo.png" alt="Logo" />
}
