import { FC } from "react"
import { HeaderNavigation } from "@/components/molecules/HeaderNavigation"

export const Header: FC = () => {
  return (
    <div className="bg-gray-800">
      <HeaderNavigation />
    </div>
  )
}
