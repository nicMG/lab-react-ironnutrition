import { useState } from "react";
function FoodBox(props) {

    const {food, btnClick} = props
    const [qty, setQty] = useState(0)
    // console.log(food)

    function handleQty(event) {
        setQty(event.target.value)
    }



    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={food.image} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input  value={qty} onChange={handleQty} className="input" type="number"/>
                    </div>
                    <div className="control">
                    <button onClick={() => {btnClick(food, qty)}} className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox
