import { Input as AntInput, Form } from 'antd'

type Props = {
  name: string
  placeholder: string
  type?: string
}

export const Input = ({ name, placeholder, type = 'text' }: Props) => {
  return (
    <Form.Item
      name={name}
      shouldUpdate={true}
      rules={[{ required: true, message: 'Обязательное поле' }]}
    >
      <AntInput placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  )
}
