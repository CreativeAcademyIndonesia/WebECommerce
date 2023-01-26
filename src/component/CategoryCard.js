import { Contex } from "./MyContex"
import { useContext } from "react"

const CategoryCard = ()=>{
    const {category} = useContext(Contex)
    return(
        <div className="container category my-5">
            <div className="title-wraper">
                <h6>Category Page</h6>
            </div>
            <div akuanak ></div>
            <div className="row my-4">
                { category.map((c)=> {
                    return(
                        <div className="col-lg-2 col-md-3 col-6 positon-relative">
                            <div className=" text-center card-category w-100 my-2 my-md-1">
                                <img src={c.image} className="w-100"/>
                                <div className="category-label fw-semibold position-absolute bottom-0 w-100">
                                    {c.description}
                                </div>
                            </div>
                        </div>
                    ) 
                }) }
            </div>

            {/* {category.map((c)=>{
                return(
                    <p key={c.id}>{c.description}</p>
                )
            })} */}
        </div>
    )
}

export default CategoryCard