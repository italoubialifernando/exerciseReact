/* import { useState } from "react" */

export function CarDetails(initialData) {


    function handleChange (event)  {
        event.preventDefault()
    

    }



    return (
        <div>
            <h1>have a car? </h1>

            <div>
                <form onSubmit={handleChange}>
                    <input
                        name="model"
                        value={initialData.model}

                    />
                    <input
                        name="year"
                        value={initialData.year}

                    />
                    <input
                        name="color"
                        value={initialData.color}

                    />
                    <button type="submit" >save</button>
                </form>

            </div>

        </div>
    )
}
