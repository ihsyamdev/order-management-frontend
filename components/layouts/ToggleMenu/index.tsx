// import { FC, useState, useEffect } from "react"

// type ToggleMenuProps = {
//   label: string
//   items?: {
//     index: number
//     label: string
//     link: string
//   }[]
//   isOpen: boolean
//   onToggle: () => void
// }

// export const ToggleMenu: FC<ToggleMenuProps> = ({ label, items, isOpen, onToggle }) => {
//   const style = {
//     maxHeight: isOpen ? "500px" : "0px",
//     transition: "max-height 1s ease-in-out"
//   }

//   const [hoveredIndex, setHoveredIndex] = useState(-1)

//   return (
//     <div>
//       <div className="py-2 font-bold text-lg" onClick={onToggle}>
//         <span>{label}</span>
//         {items && <span className="ml-auto">{isOpen ? " -" : " +"}</span>}
//       </div >
//       {isOpen && (
//         <ul style={style}>
//           {items?.map((item) => (
//             <li
//               key={item.label}
//               className={`p-2 text-white font-semibold text-base ${hoveredIndex === item.index? "bg-blue-200" : "bg-gray-700"}`}
//               onMouseEnter={() => setHoveredIndex(item.index)}
//               onMouseLeave={() => setHoveredIndex(-1)}
//             >
//               <a href={item.link}>{item.label}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

import { FC, useState, useEffect } from "react"
import styles from './styles.module.css'

type ToggleMenuProps = {
  label: string
  items?: {
    index: number
    label: string
    link: string
  }[]
  isOpen: boolean
  onToggle: () => void
}

export const ToggleMenu: FC<ToggleMenuProps> = ({ label, items, isOpen, onToggle }) => {

  // サブメニューのホバーを項目のIndexベースで実装
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  return (
    <div>
      <ul id="menu" className={styles.menu} onClick={onToggle}>
        <li>
          <span>{label}</span>
            {items && <span>{isOpen ? " -" : " +"}</span>}
        </li>
      </ul>
      {/* 本来はアニメーションを付与したいが、やり方がわからないので一旦これで */}
      {isOpen && (
        <ul id="menuItem" className={styles.submenu}>
          {items?.map((item) => (
            <li
              key={item.label}
              className={hoveredIndex === item.index? styles.hoveredSubmenu: ''}
              // マウスホバー時の挙動だけここに記載(CSSでの書き方がわからない)
              onMouseEnter={() => setHoveredIndex(item.index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
