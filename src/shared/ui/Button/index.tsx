import { HTMLAttributes, JSX } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  severity?: 'primary' | 'secondary'
  icon?: JSX.Element
  disabled?: boolean
}
export const Button = ({ onClick, title, icon, severity = 'primary', disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button button-${severity}`}
    >
      {icon}
      {title}
    </button>
  )
}
