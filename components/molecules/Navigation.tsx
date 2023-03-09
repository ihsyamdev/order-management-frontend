import { FC } from "react"
import { Logo } from "../atoms/Logo"
import { Avatar } from "../atoms/Avatar"
import { NavigationLink } from "../atoms/NavigationLink"

export const Navigation: FC = () => {
  return (
    <nav>
      <div>
        <NavigationLink href="/"><Logo /></NavigationLink>
        {/* <Logo /> */}
      </div>
      <div>
        <NavigationLink href="/me"><Avatar /></NavigationLink>
      </div>
    </nav>
  )
}
