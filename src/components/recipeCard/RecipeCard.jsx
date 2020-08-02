import React,{useState} from 'react'
import './RecipeCard.scss'

import {IoLogoUsd} from 'react-icons/io'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'

const RecipeCard = (props) => {

    const [isLiked,setLike] = useState(false)

    const [isCardClicked,setCardClick] = useState(false)

    const {recipe : {id,name,image,category,price,description},isOdd} = props

    return(
        <div className='recipe'>
            <div className='recipeFront'>
                <span className='recipeSideHead'>{category}</span>
                <div className='recipeImage'>
                    <img src={image} alt='recipe' onClick={() => setCardClick(!isCardClicked)}/>
                </div>
                <div className='recipeDetails' style={{
                    background: `${isOdd ? 'white' : 'black'}`,
                    boxShadow: `0px -25px 40px rgba(${isOdd ? 'white' : 'black'},1)`,
                    color : `${isOdd ? 'black' : 'white'}`
                }}>
                    <span onClick={() => setLike(!isLiked)} className='recipeLike'>
                        {
                            isLiked ?
                                <AiFillHeart color='#CE1D1D' size='20'/>
                            :
                                <AiOutlineHeart color={`${isOdd ? 'black' : 'white'}`} size='20'/>
                        }
                    </span>
                    <h3 className='recipeName'>{name}</h3>
                    <p className='recipePrice'><IoLogoUsd fontSize='10' color={`${isOdd ? 'black' : 'white'}`}/>{price}</p>
                    <p className='recipeDescription'>{description}</p>
                </div>
            </div>
            {
                isCardClicked ? 
                    <div className="recipeModal" onClick={() => setCardClick(!isCardClicked)}>
                        <div className='recipeButtonsContainer'>
                            <button className='recipeButton'>View More</button>
                            <button className='recipeButton'>Quick view</button>
                        </div>
                    </div>
                :
                    null
            }
        </div>
    )
}

export default RecipeCard