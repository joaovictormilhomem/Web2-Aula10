import Offer from "../components/Offer";

const offers = [
  {
    title: "Salvador",
    description: "A primeira capital do Brasil!",
    price: 3990,
    imgLink: "https://wjrturismo.salvador.br/wp-content/uploads/2021/02/salvador-ba.png"
  },
  {
    title: "Rio de Janeiro",
    description: "O Rio de Janeiro continua lindo!",
    price: 2949,
    imgLink: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/3b/66/8f.jpg"
  },
  {
    title: "Palmas",
    description: "Traga o seu protetor solar!",
    price: 2949,
    imgLink: "https://www.viagensecaminhos.com/wp-content/uploads/2022/06/palmas-to.jpg"
  }
]

export default function Offers() {
  return (
    <main>
      <div className="offers">
        {offers.map(offer => (
          <Offer
            title={offer.title}
            description={offer.description}
            price={offer.price}
            imgLink={offer.imgLink}
          />
        ))}
      </div>
    </main>
  )
}