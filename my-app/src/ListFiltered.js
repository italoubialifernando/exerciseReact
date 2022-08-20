/* import { useMemo } from "react";


export function ListFiltered() {

    const persons = [
        { id: 1, name: 'George', age: 17 },
        { id: 2, name: 'Paul', age: 16 },
        { id: 3, name: 'Lucas', age: 21 },
        { id: 4, name: 'Marco', age: 32 },
        { id: 5, name: 'Peter', age: 18 },
        { id: 6, name: 'Carl', age: 13 },
        { id: 7, name: 'Simon', age: 24 },
        { id: 8, name: 'Mark', age: 15 },
        { id: 9, name: 'Sandra', age: 34 },
        { id: 10, name: 'Alice', age: 28 }
    ];
   const list =  array.map((index) => (index.age > 18) ? <li key={index.id}>{index.name} {index.age}</li> : '')
   
    const saveList = useMemo(()=> list, [])

    return (
        <div>
            <h1>List</h1>
            <ul>
                <p> {saveList}</p>
            </ul>
        </div>
    )
} */