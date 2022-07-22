import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export const BoardCell:React.FC<{value:number}> = ({value}) => {

    return <div className={styles.Cell}>{value}</div>
}