type ButtonProps = {
  title: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export const Button = (props: ButtonProps) => {
  const buttonContent = (
    <>
      {props.isLoading && 'Tady bude loader'}
      {props.title}
    </>
  )

  let bgColor = 'bg-blue-500'
  let textColor = 'text-white'

  switch (props.variant) {
    case 'primary':
      bgColor = 'bg-blue-500'
      textColor = 'text-white'
      break
    case 'secondary':
      bgColor = 'bg-gray-500'
      textColor = 'text-black'
      break
    case 'tertiary':
      bgColor = 'bg-green-500'
      textColor = 'text-white'
      break
    default:
      break
  }

  return (
    <button className={`rounded ${bgColor} px-3 py-1.5 ${textColor}`}>
      {buttonContent}
    </button>
  )
}
