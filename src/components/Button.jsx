function Button () {
  const handleClick = () => {
    window.alert('Bien joué, tu as cliqué !')
  }

  // const handleBlur = () => {
  //   window.alert('Focus perdu')
  // }

  return (
    <button onClick={handleClick} /*onBlur={handleBlur}*/>
      Click Me !
    </button>
  )
}

export default Button