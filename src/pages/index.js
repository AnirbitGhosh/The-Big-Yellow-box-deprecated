import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import InfoSection from '../components/InfoSection';
// import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
// import Services from '../components/Services';
import Footer from '../components/Footer';
import { v4 as uuidv4} from 'uuid';
import api from '../api/values';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const axios = require('axios');

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const formHandler = async (values) => {
        const request = {
            id: uuidv4(),
            ...values 
        }

        const response = await axios.post("https://yellow-box-db.herokuapp.com/values", request)
        if(!response){
        }
      }

    return (
        <>
            <Navbar toggle={toggle}/>
            <HeroSection formHandler={formHandler} />
            <Footer />

        </>
    )
}


export default Home;