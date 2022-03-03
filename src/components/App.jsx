import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [items,setItems]=useState([]);
    function addItem(inputText){
        setItems(prevValue=>{
           return [...prevValue,inputText];
        });
    }
    function deleteItem(id){
        setItems(prevItem=>{
            return prevItem.filter((item,index)=>{
                return index!==id;
            });
            
        });
    }
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {items.map((item,index)=><Note key={index} id={index} deleteItem={deleteItem} title={item.title} content={item.content} />)}
      <Footer />
    </div>
  );
}

export default App;