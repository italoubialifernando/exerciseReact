import { useMemo } from "react";


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
    function filter(array) {
       return  array.map((index) => (index.age > 18) ? <li key={index.id}>{index.name} {index.age}</li> : '')
    }
    const list = useMemo(()=> filter(persons), [])

    return (
        <div>
            <h1>List</h1>
            <ul>
                <p> {list}</p>
            </ul>
        </div>
    )
}