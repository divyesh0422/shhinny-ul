import React, { useState } from "react";
import Menu from "./Menu";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css";
import menu from "./menu.css"


const Gallery =() => {
    const[items,setItems]= useState(Menu);
    const filterItem=(cateItem) =>{
        const updatedItems=Menu.filter((curelem) => {
                return curelem.category === cateItem;

        });
        setItems(updatedItems);
    }
    return (
    <>
    <div id='gallery'>
      <h1 style={{textAlign:"center"}} >All Games are avalible here...</h1>
    <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around"> 
        <button className="btn btn-primary" onClick={() => filterItem('best_apps')}>Best Apps</button>
    <button className="btn btn-primary" onClick={() => filterItem('all_yono_apps') }>All Yono Apps</button>
    <button className="btn btn-primary" onClick={() => setItems(Menu)}>New Apps</button>
   
    </div>
</div>

{/*my main items section */}
<div className="menu-items container-fluid mt-5">
    <div className="row">
        <div className="col-11 mx-auto">
            <div className="row my-5">
            {
                items.map((elem) => {
                    const {id,name,image,description,price} =elem;

            return(

                <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row Item-inside">
                        {/*for images*/}
                        <div className="col-12 col-md-12 col-lg-4 img-div">
  <img  src={image} alt={name} className="img-fluid"/>
</div>
<div className="col-12 col-md-12 col-lg-8">
  <div className="main-title pt-4 pb-3">
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
  <div className="menu-price-book">
    <div className="menu-book-divide d-flex justify-content-between">
      <h2>{price}</h2>
      <a  href="https://invite.ez777c.com/?code=UAU5NFS">
        <button className="btn btn-danger custom-size">Download</button>
      </a>
    </div>

  </div>
</div>

                    </div>
                </div>
            )
})
}
            </div>
        </div>
    </div>
</div>
</div>
</>

    )
};
export default Gallery;