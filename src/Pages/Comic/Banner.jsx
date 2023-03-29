import './Banner.css'
import Banner from '../../IMG/Banner.png';

function BannerComic (){
    return(
        <section className=''>
            <div className="banner">
                <img src={Banner} alt="" />
            </div>
        </section>
    )
}
export default BannerComic