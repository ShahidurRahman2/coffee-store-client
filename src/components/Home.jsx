import React, { useState } from 'react';
import CoffeeCard from '../CoffeeCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loaderCoffees = useLoaderData();
  const [coffees,setCoffee]= useState(loaderCoffees)
    return (
        <div>
             <h1>coffee client view available {loaderCoffees.length}</h1>
      <div className='grid grid-cols-2 gap-6'>
      {
        loaderCoffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} coffee={coffee}></CoffeeCard>)
      }
      </div>
        </div>
    );
};

export default Home;