
import { HeaderSt,H1St,NavSt,SpanSt } from "./styles";


const Header = () => {

    return (
         <HeaderSt>
             <H1St >Filtrar Objetos</H1St>
             <NavSt> 
                  <SpanSt span1 >Home</SpanSt>
                  <SpanSt>Category</SpanSt>
                  <SpanSt span1>Description</SpanSt>

             </NavSt>
         </HeaderSt>

    ) 
}

export default Header;
