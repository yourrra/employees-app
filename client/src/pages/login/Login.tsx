import { Card, Form, Row, Space, Typography } from 'antd'
import { Layout } from '../../components/layout'
import { Input } from '../../components/input'
import { PasswordInput } from '../../components/passwordInput'
import { Button } from '../../components/button'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { ErrorMessage } from '../../components/errorMessage'
import { UserData, useLoginMutation } from '../../app/services/auth'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'
import { useState } from 'react'

export const Login = () => {
  const navigate = useNavigate()
  const [loginUser, loginUserResult] = useLoginMutation()
  const [error, setError] = useState('')

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap()

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
        <Card title="Войдите" style={{ width: '30rem' }}>
          <Form onFinish={login}>
            <Input type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Password" />
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Зарегестрируйтесь</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
