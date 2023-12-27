import { Layout, Space, Typography } from 'antd'
import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Button } from '../button'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/auth/authSlice'

import styles from './Header.module.css'

export const Header = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogoutClick = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate(Paths.login)
  }

  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.icon} />
        <Link to={Paths.home}>
          <Button type="ghost">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </Button>
        </Link>
      </Space>
      {user ? (
        <Button type="ghost" icon={<LoginOutlined />} onClick={onLogoutClick}>
          Выйти
        </Button>
      ) : (
        <Space>
          <Link to={Paths.register}>
            <Button type="ghost" icon={<UserOutlined />}>
              Зарегестрировать
            </Button>
          </Link>
          <Link to={Paths.login}>
            <Button type="ghost" icon={<LoginOutlined />}>
              Войти
            </Button>
          </Link>
        </Space>
      )}
    </Layout.Header>
  )
}
