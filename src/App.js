import React from 'react'
import './App.css';

function HeadingText(){
  return(
    <div className="headingTextSection">
      <h1 className="productHeading">Subscription Service Name</h1>
      <p>Hey! Welcome to the subscription page. This is an area to put a general description of your product and potentially advise on what subscriptions are offered.</p>
    </div>
  );
}

function HeadingImg(){
  return(
    <div className = "logoDiv">
      <img className = "myImages" src="/MRlogo.png" alt="default image"/> {/*content/images must be in the public folder*/}
    </div>
  );
}


function PurchaseOption({imagePath,price}){
  return(
    <div className = "individualPurchaseOptionDiv">
      <h2 className = "productTitle">Product Title</h2>
      <strong>{price}</strong>
      <img className="productImage" src={imagePath} alt="Product Image"></img>
      <p className = "productDescription">Right here is the description of the product, its really good and you should buy it!</p>
      <button type = "button" className = "productBuyButton">Buy Now!</button>
      <caption className = "purchaseDisclaimer">Terms and conditions apply</caption>
    </div>
  );
}

function Sidebar(){
  return(
    <div className = "sidebarSection">
      <h3>Related Products</h3>
      <h4>Product 1</h4>
      <img src='./logo192.png' alt='Product 1'></img>
      <h4>Product 2</h4>
      <img src='./logo192.png' alt='Product 2'></img>
      <h4>Product 3</h4>
      <img src='./logo192.png' alt='Product 3'></img>
      <h4>Product 4</h4>
      <img src='./logo192.png' alt='Product 4'></img>
      <h4>Product 5</h4>
      <img src='./logo192.png' alt='Product 5'></img>
    </div>
  )
}



export default function MyApp(){

  return(
    <div className = "appContainer">
      <div className = "headingDiv">{/*heading */}
        <HeadingText />
        <HeadingImg />
      </div>
      <div className = "belowHeading">
        <div className = "purchaseOptions">
          <PurchaseOption imagePath="product1.png" price="£4"/>
          <PurchaseOption imagePath="product2.png" price="£7"/>
        </div>
        <div className = "sidebarClass">
          <Sidebar />
        </div>
      </div>
      <link stylesheet="App.css"></link>
    </div>

  )
}