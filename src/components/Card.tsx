const Card = ({title,p,ico}) => {
  return (
    <div >
      <section>
        <i className={ico}></i>
      </section>
      <section>
      <h4>{title}</h4>
      <p>{p}</p>
      </section>
    </div>
  )
}

export default Card