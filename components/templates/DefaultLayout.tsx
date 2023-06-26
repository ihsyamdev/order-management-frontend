import { FC, ReactNode } from "react"
import { Header } from "@/components/organisms/Header"
import { Sidebar } from "@/components/organisms/Sidebar"

type LayoutProps = {
  children: ReactNode
}

export const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  )
}
