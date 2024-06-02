import React from "react";
//import '../SearchBox/styles.css';
import { InputContainer1, PlaceHolderInp } from "./styles";


export const SearchBoxApp =({search,setSearch})=>{

    const handleChange = (e) => {
        setSearch(e.target.value)   
       }


return (
    <>
    <InputContainer1>   
        <PlaceHolderInp 
            className="dataI"
            value={search}
            placeholder="Search by Description"
            onChange={handleChange}> 

        </PlaceHolderInp>       
    </InputContainer1>

</>
)
}
