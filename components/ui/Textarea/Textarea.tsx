import { FC, TextareaHTMLAttributes } from 'react'
import cn from 'classnames'

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  onChange?: (...props: any[]) => any
}

const Textarea: FC<Props> = ({
  className,
  onChange,
  ...rest
}) => {
  const handleOnChange = (evt: any) => {
    if (onChange) {
      onChange(evt.target.value)
    }
    return null
  }

  return (
    <textarea
      className={cn(
        'py-3 px-4 rounded-md block w-full transition ease-default focus:outline-none focus:ring-transparent border-1 focus:border-gray-900 border-gray-200',
        className
      )}
      onChange={handleOnChange}
      {...rest}
    />
  )
}

export default Textarea