import styles from './styles.module.css'
import { OrderDetail } from '@/types/order'

interface DetailAddButtonProps {
  handleClick?: () => void
}

const DetailAddButton: React.FC<DetailAddButtonProps> = ({handleClick}) => {

  return (
    <button className={styles.button} onClick={handleClick}>商品を追加</button>
  )
}

export default DetailAddButton
