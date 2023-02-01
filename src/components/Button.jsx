function Button ({ text, onClick }) {
  const handleClick = () => {
    window.alert('Bien joué, tu as cliqué !')
  }

  const handleBlur = () => {
    window.alert('Focus perdu')
  }

  return (
    <button onClick={onClick} /*onBlur={handleBlur}*/>
      {text}
    </button>
  )
}

export default Button