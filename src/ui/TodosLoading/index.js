import React from "react"
import MyLoader from "../Loader"

function TodosLoading(){
    return(
        <div style={{margin: "30px"}}>
            <MyLoader/>
        </div>
    )
}

export {TodosLoading}