import React, { useEffect } from 'react';
import Cards from './components/Cards';
import NavBar from './components/Navbar';
import Filter from './components/Filter';
import './App.css';
import { apiUrl, filterData } from './data';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {

  const [courses,setCourses] = useState(null);
  
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);

    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      //output ->
      setCourses(output.data);

    } catch (error) {
      toast.error("Netword problem")
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, []);

  return (
    <div className='bg-slate-700'>
      <div  className=" flex flex-col  bg-slate-950">
        <NavBar />
      </div>

      <div className="bg-bgDark2">

        <Filter 
        filterData={filterData} />

      </div>

      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} />)
        }
      </div>
  
    </div>
  );
}

export default App;
