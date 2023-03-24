import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  // debugger
    console.log("APP rendering")
  //   полезное что-то
  //   обязано вернуть JSX
  return (
    <div>
        {/*<input type="date"/>*/}
        
        <PageTitle title={"This is APP component"} />
        <PageTitle title={"This is ItKamasutra"} />
        Article 1
        <Rating value={2} />
        <Accordion titleValue={"Menu"} collapsed={true} />
        <Accordion titleValue={"User"} collapsed={false} />
        Article 2
        <Rating value={0} />
        <Rating value={1} />
        <Rating value={2} />
        <Rating value={4} />
        <Rating value={5} />
        
    </div>

  );
}

type PagePropsType = {
    title: string
}
function PageTitle (props: PagePropsType) {
    // debugger
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>   // (<> что либо </> )  –  this is JSX element
}





export default App;
