import {  useContext } from "react";

export function DisplayLanguage(){
    const language= useContext(LanguageContext)

    return(
        <div>
            <h1>Current lenguage: {language}</h1>
        </div>
    )
}
