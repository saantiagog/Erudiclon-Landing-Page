import BannerComic from "../Pages/Comic/Banner"
import Capitulos from "../Pages/Comic/Capitulos"
import ErudiclonSection from "../Pages/Comic/ErudiclonSection"
import Personajes from "../Pages/Comic/Personajes"

function Comic (){
    return(
        <div>
            <BannerComic/>
            <ErudiclonSection/>
            <Personajes/>
            <Capitulos/>
        </div>
    )
}
export default Comic