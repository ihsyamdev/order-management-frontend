import { ToggleMenu } from "@/components/molecules/ToggleMenu"
import { FC } from "react"

const items = [
  {
    label: '取引先',
    items: [
      {
        label: '取引先一覧',
        link: '/account/list'
      },
      {
        label: '新規登録',
        link: '/account'
      }
    ]
  },
  {
    label: '商品',
    items: [
      {
        label: '商品一覧',
        link: '/product/list'
      },
      {
        label: '新規登録',
        link: '/product'
      }
    ]
  },
  {
    label: '受注',
    items: [
      {
        label: '受注一覧',
        link: '/order/list'
      },
      {
        label: '新規申請',
        link: '/order'
      }
    ]
  }
]

export const Sidebar: FC = () => {
  return (
    <div className="bg-black text-white w-40">
      {items.map(({ label, items }) => (
        <ToggleMenu key={label} label={label} items={items} />
      ))}
    </div>
  )
}
