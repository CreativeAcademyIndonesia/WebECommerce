import Navigation from "./Navigation";
import BannerPromotion from "./Banner"
import { Provider } from "./MyContex";
import CategoryCard from "./CategoryCard"

const HomePage = ()=> {
    return(
        <> 
            <Provider>
                <Navigation />
                <BannerPromotion />
                <CategoryCard />
            </Provider>
        </>
    )
}

export default HomePage; 