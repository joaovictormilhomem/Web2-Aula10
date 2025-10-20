import placesImg from '../assets/locations.png'
export default function Home() {
  return (
    <main className='home'>
      <img src={placesImg} className="" alt="Ilustração de uma pessoa marcando destinos em um mapa-múndi com pins de localização" />
      <h1>O seu próximo <span>destino</span> pode estar aqui...</h1>
      <p>Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!</p>
      <p className='text-m'>No <b>ConnectFlight</b> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com <strong>preços arrasadores!</strong></p>
      <p>Se você ainda não tem um destino definido, confira nossa seção de ofertas.</p>
    </main>
  )
}