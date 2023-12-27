import { Button as AntButton, Form } from 'antd'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: () => void
  htmlType?: 'button' | 'submit' | 'reset' | undefined
  type?:
    | 'link'
    | 'text'
    | 'default'
    | 'primary'
    | 'dashed'
    | 'ghost'
    | undefined
  danger?: boolean
  loading?: boolean
  shape?: 'default' | 'circle' | 'round' | undefined
  icon?: ReactNode
}

export const Button = ({
  children,
  htmlType = 'button',
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
}: Props) => {
  return (
    <Form.Item>
      <AntButton
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
      >
        {children}
      </AntButton>
    </Form.Item>
  )
}
