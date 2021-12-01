
function Total(props) {

    const {calories} = props
    console.log(calories)

    let calorieSum = calories.reduce((sum, ele) => {
        return sum + (ele.quantity * ele.calories)
    }, 0)

    return (
        <div>
            <h1>Total</h1>
            {
                calories.map((ele) => {
                    return (
                        <li>
                            {ele.quantity} {ele.name} x {ele.calories} cal
                        </li>
                    )
                })
            }
            <h1>Total: {calorieSum} cal</h1>
        </div>
    )
}

export default Total
