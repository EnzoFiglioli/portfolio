type CardProps = {
  title: string,
  p: string,
  ico: string
}

const Card = ({title,p,ico}: CardProps) => {
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