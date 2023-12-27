import { Card, Form, Row, Space, Typography } from 'antd'
import { Layout } from '../../components/layout'
import { Input } from '../../components/input'
import { PasswordInput } from '../../components/passwordInput'
import { Button } from '../../components/button'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { useState } from 'react'
import { useRegisterMutation } from '../../app/services/auth'
import { User } from '@prisma/client'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'
import { ErrorMessage } from '../../components/errorMessage'

type RegisterData = Omit<User, 'id'> & { confirmPassword: string }

export const Register = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [error, setError] = useState('')
  const [registerUser] = useRegisterMutation()

  const register = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap()

      navigate(Paths.home)
    } catch (error) {
      const maybeError = isErrorWithMessage(error)

      if (maybeError) {
        setError(error.data.message)
      } else {
        setError('Неизвестная ошибка')
      }
    }
  }

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегестрируйтесь" style={{ width: '30rem' }}>
          <Form onFinish={register}>
            <Input name="name" placeholder="Name" />
            <Input type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Password" />
            <PasswordInput
              name="confirmPassword"
              placeholder="Повторите пароль"
            />
            <Button type="primary" htmlType="submit">
              Зарегестрироваться
            </Button>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Есть аккаунт? <Link to={Paths.login}>Войдите</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
