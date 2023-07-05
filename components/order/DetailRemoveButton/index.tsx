import styles from './styles.module.css'

export interface OrderDetailRemoveButtonProps {
  handleClick: () => void
}

const DetailRemoveButton = ({handleClick}) => {

  const onClick = () => {
    handleClick()
  }

  return (
    <button 
      className={styles.button}
      onClick={onClick}
    >
      商品を削除
    </button>
  )
}

export default DetailRemoveButton
