import React from "react";
import {TableDesign, Th_Header,TdCell,TrCell} from "./styles";
export const FilteredListApp = ({search,search1,tableST})=>{

    const results = !search ? tableST : tableST.filter((elemento)=> elemento.description.toLowerCase().includes(search.toLocaleLowerCase())); 
    console.log(results);

    

    return(
       <TableDesign>

            <Th_Header>ID</Th_Header>
            <Th_Header>Category</Th_Header>
            <Th_Header>Description</Th_Header>

            <tbody>
            
                {results && results.map((descrip)=>(
                    <TrCell key={descrip.id}>
                        <TdCell>
                            {descrip.id}
                        </TdCell>
                        <TdCell>
                            {descrip.category}
                        </TdCell>
                        <TdCell>
                            {descrip.description}
                        </TdCell>
                    </TrCell>
                    
                    ))}
            
            </tbody>
            </TableDesign>
    )
}
