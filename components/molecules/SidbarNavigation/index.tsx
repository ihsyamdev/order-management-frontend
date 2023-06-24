import { FC } from "react"
import { NavigationLink } from "@/components/atoms/NavigationLink"

export const SidebarNavigation: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          取引先
        </li>
        <li>
          <NavigationLink href="/customerList">取引先一覧</NavigationLink>
        </li>
        <li>
          <NavigationLink href="customerNew">取引先新規登録</NavigationLink>
        </li>
        <li>
          商品
        </li>
        <li>
          <NavigationLink href="productList">商品一覧</NavigationLink>
        </li>
        <li>
          <NavigationLink href="productNew">商品新規登録</NavigationLink>
        </li>
        <li>
          受注
        </li>
      </ul>
    </nav>
  )
}
