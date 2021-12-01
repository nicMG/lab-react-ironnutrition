

function AddForm(props) {

    const {btnSubmit, btnClose} = props
    

    return (
    <div>
        <h1>Add an item</h1>
        <form onSubmit={btnSubmit}>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                <input 
                name="name" 
                class="input" 
                type="text" 
                placeholder="Text input" />
                </div>
            </div>
            <div class="field">
                <label class="label">Calories</label>
                <div class="control">
                <input
                name="calories"
                class="input"
                type="text"
                placeholder="Enter Price"
                />
                </div>
            </div>
            <div class="field">
                <label class="label">Image</label>
                <div class="control">
                <input
                name="image"
                class="input"
                type="text"
                placeholder="Eenter image"
                />
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                <button class="button is-link">Submit</button>
                <button onClick={btnClose} class="button is-danger">Close</button>
                </div>
            </div>
        </form>
        
    </div>
    )
}

export default AddForm
