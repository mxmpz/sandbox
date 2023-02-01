function List ({ data }) {
  return (
    <ul>
      {
        data.map(item => <li>{item}</li>)
      }
    </ul>
  )
}

export default List