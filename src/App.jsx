import React from 'react';
import logo from './logo.svg';
import './App.css';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


function Header({heading}){
  return(
    <div className='header'>
    <h1>{heading}</h1>
    <SearchBar />
   <hr />
    </div>
  );
}


function SearchBar(){
  return(
    <div>
    <input className='search' type='text' placeholder='Search City, Neighborhood or Address' align='center' /><i class="fa fa-search"></i>
   
    </div>
  )
}

function PropertyTile ({image,description,location,price,rating}) {
 return(
  <div className='tile'>
    <img src={image} className='propertyImage' />
    <div className='description'>{description} {location}</div>
    <div className='price'><b>{price}</b></div>
    <div className='rating'>{rating}</div>
</div>
 );
}



function PropertyLine({properties}){
  
  return( 
       
    <div className='propertyLine'>
    
    {Object.values(properties).map(property => {
      console.log(properties)
      
       return(
       <PropertyTile image={property.image} description={property.description} location={property.location}
        price={property.price} rating={property.rating} />
        )
    })}
   
   
    </div>
  )     
}

function App() {
  const data = {
    popular: {
      title: 'Popular Properties',
      properties: [
        {
          image:logo,
          description:'2BHK',
          location:'Nerul',
          price:'$1400/m',
          rating:'4'
        },
        {
          image:logo,
          description:'3BHK',
          location:'Vashi',
          price:'$1600/m',
          rating:'4'
        },
        {
          image:logo,
          description:'2BHK',
          location:'Kharghar',
          price:'$1300/m',
          rating:'4'
        },
        {
          image:logo,
          description:'2BHK',
          location:'Kharghar',
          price:'$1300/m',
          rating:'4'
        },
        {
          image:logo,
          description:'2BHK',
          location:'Kharghar',
          price:'$1300/m',
          rating:'4'
        }
    ]},
    wishlisted: {
      title: 'Wishlisted properties',
      properties:[{
        image:logo,
          description:'2BHK',
          location:'Nerul',
          price:'$1400/m',
          rating:'4'
        },
        {
          image:logo,
          description:'3BHK',
          location:'Vashi',
          price:'$1600/m',
          rating:'4'
        },
        {
          image:logo,
          description:'2BHK',
          location:'Kharghar',
          price:'$1300/m',
          rating:'4'
      }]
      }
  };

  
  return (
   <div className="App"> 
   {/*    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  <p> 
          Edit <code>src/App.tsx</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <Header heading='myStays' />

    {Object.values(data).filter(element => Object.keys(element).length!=0).map(element => {
      console.log(element)
   
      return (
      <div>
        <h3 align='left'>{element.title}</h3>
      <PropertyLine properties={element.properties} />
      </div>
      );

    })}
    
    
    </div>


  );
}

export default App;
