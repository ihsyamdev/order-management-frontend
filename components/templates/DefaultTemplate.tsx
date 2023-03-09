import { FC, ReactNode } from "react"
import { Header } from "../organisms/Header"

type DefaultLayoutProps = {
  children: ReactNode
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ }) => {
  return (
    <>
      <Header />
      <main></main>
    </>
  )
}
