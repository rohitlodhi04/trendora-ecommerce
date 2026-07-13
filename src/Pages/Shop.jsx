import Hero from "../Componants/Hero/Hero"
import NewCollections from "../Componants/NewCollections/NewCollections"
import NewsLetter from "../Componants/NewsLetter/NewsLetter"
import Offers from "../Componants/Offers/Offers"
import Popular from '../Componants/Popular/Popular'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
