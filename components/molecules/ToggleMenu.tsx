import { FC, useState } from "react"

type ToggleMenuProps = {
  label: string
  items?: {
    label: string
    link: string
  }[]
}

export const ToggleMenu: FC<ToggleMenuProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const style = {
    maxHeight: isOpen ? "500px" : "0px",
    transition: "max-height 0.5s ease-in-out"
  }

  return (
    <div>
      <div onClick={ handleToggle }>
        <span>{ label }</span>
        { items && <span className="ml-auto ">{ isOpen ? " -": " +" }</span> }
      </div>
      { isOpen && (
        // <ul style={style}>
        <ul>
        {/* <ul> */}
          { items?.map((item) => (
            <li key={ item.label } className="p-2">
              <a href={item.link}>{ item.label }</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
