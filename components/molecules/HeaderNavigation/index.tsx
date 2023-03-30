import { FC } from "react"
import { Logo } from "@/components/atoms/Logo"
import { Avatar } from "@/components/atoms/Avatar"
import { NavigationLink } from "@/components/atoms/NavigationLink"

export const HeaderNavigation: FC = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="p-3">
        <NavigationLink href="/"><Logo /></NavigationLink>
      </div>
      <div className="p-3 pr-10">
        <NavigationLink href="/me"><Avatar /></NavigationLink>
      </div>
    </nav>
  )
}
