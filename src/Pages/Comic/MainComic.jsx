import BannerComic from "./Banner"
import Capitulos from "./Capitulos"
import ErudiclonSection from "./ErudiclonSection"
import Personajes from "./Personajes"

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