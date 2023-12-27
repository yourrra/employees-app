import { Employee } from '@prisma/client'
import { Card, Form, Space } from 'antd'
import { Input } from '../input'
import { ErrorMessage } from '../errorMessage'
import { Button } from '../button'

type Props<T> = {
  onFinish: (values: T) => void
  btnText: string
  title: string
  error?: string
  employee?: T
}

export const EmployeeForm = ({
  onFinish,
  title,
  btnText,
  error,
  employee,
}: Props<Employee>) => {
  return (
    <Card>
      <Form name="employee-form" onFinish={onFinish} initialValues={employee}>
        <Input type="text" name="firstName" placeholder="Имя" />
        <Input type="text" name="lastName" placeholder="Фамилия" />
        <Input type="number" name="age" placeholder="Возраст" />
        <Input type="text" name="address" placeholder="Адрес" />
        <Space>
          <ErrorMessage message={error} />
          <Button htmlType="submit">{btnText}</Button>
        </Space>
      </Form>
    </Card>
  )
}
