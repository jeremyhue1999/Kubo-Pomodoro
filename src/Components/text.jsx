const Text = ({ 
    className = "", 
    value = "",
		onClick = () => {},
}) => {
  return (
		<p 
			className={className}
			onClick={onClick}
		>
		{value}
		</p>
  )
}

export default Text
