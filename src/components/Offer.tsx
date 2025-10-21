type OfferProps = {
  title: string,
  description: string,
  price: number,
  imgLink: string
}

export default function Offer({ title, description, price, imgLink }: OfferProps) {
  return (
    <div className="offer">
      <img src={imgLink} />
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
    </div>
  )
}