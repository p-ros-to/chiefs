import CustomImage from './CustomImage'

function RecipesCard({ recipe }) {

    return (
        <div className="recipes-card">
            <CustomImage imgSrc={recipe.image} pt='65%' />
            <div className='recipes-card-info'>
                <img className='auther-img' src={recipe.authorImg} alt='' />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}
export default RecipesCard;