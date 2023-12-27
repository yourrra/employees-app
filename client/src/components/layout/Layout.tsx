import { ReactNode } from 'react'
import { Layout as AntLayout } from 'antd'

import styles from './Layout.module.css'
import { Header } from '../header'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.main}>
      <Header />
      <AntLayout.Content style={{ height: '100%' }}>
        {children}
      </AntLayout.Content>
    </div>
  )
}