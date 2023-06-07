import { FC, useState, useEffect } from "react"

type ToggleMenuProps = {
  label: string
  items?: {
    label: string
    link: string
  }[]
  isOpen: boolean
  onToggle: () => void
}

export const ToggleMenu: FC<ToggleMenuProps> = ({ label, items, isOpen, onToggle }) => {
  const style = {
    maxHeight: isOpen ? "500px" : "0px",
    transition: "max-height 0.5s ease-in-out"
  }

  return (
    <div>
      <div onClick={onToggle}>
        <span>{label}</span>
        {items && <span className="ml-auto ">{isOpen ? " -" : " +"}</span>}
      </div>
      {isOpen && (
        <ul style={style}>
          {items?.map((item) => (
            <li key={item.label} className="p-2">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
