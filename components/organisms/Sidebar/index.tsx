import { ToggleMenu } from "@/components/molecules/ToggleMenu"
import { FC, useState, useEffect } from "react"

interface MenuItem {
  label: string;
  items: SubMenuItem[];
}

interface SubMenuItem {
  index: number
  label: string
  link: string
}

const items: MenuItem[] = [
  {
    label: '取引先',
    items: [
      {
        index: 0,
        label: '取引先一覧',
        link: '/customer/list'
      },
      {
        index: 1,
        label: '新規登録',
        link: '/customer'
      }
    ]
  },
  {
    label: '商品',
    items: [
      {
        index: 2,
        label: '商品一覧',
        link: '/product/list'
      },
      {
        index: 3,
        label: '新規登録',
        link: '/product'
      }
    ]
  },
  {
    label: '受注',
    items: [
      {
        index: 4,
        label: '受注一覧',
        link: '/order/list'
      },
      {
        index: 5,
        label: '新規申請',
        link: '/order'
      }
    ]
  }
]

export const Sidebar: FC = () => {
  const [menuStates, setMenuStates] = useState<boolean[]>([]);

  useEffect(() => {
    // ローカルストレージから開閉状態を取得する
    const storedStates = localStorage.getItem("menuStates");
    if (storedStates) {
      setMenuStates(JSON.parse(storedStates));
    } else {
      // ローカルストレージに開閉状態を初期化して保存する
      const initialState = items.map(() => false);
      setMenuStates(initialState);
      localStorage.setItem("menuStates", JSON.stringify(initialState));
    }
  }, []);

  const toggleMenu = (index: number) => {
    const newStates = [...menuStates];
    newStates[index] = !newStates[index];
    setMenuStates(newStates);
    localStorage.setItem("menuStates", JSON.stringify(newStates));
  };

  return (
    <div className="bg-gray-800 text-white w-40 h-screen">
      {items.map(({ label, items }, index) => (
        <ToggleMenu
          key={label}
          label={label}
          items={items}
          isOpen={menuStates[index]}
          onToggle={() => toggleMenu(index)}
        />
      ))}
    </div>
  );
};
