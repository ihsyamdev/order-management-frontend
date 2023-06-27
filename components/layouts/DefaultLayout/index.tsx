import { FC, ReactNode } from "react"
import { Header } from "@/components/layouts/Header"
import { Sidebar } from "@/components/layouts/Sidebar"
import styles from "./styles.module.css"

type LayoutProps = {
  children: ReactNode
}

export const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
