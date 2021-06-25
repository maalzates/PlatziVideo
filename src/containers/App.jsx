import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Search from '../components/Categories';
import Search from '../components/Carousel';
import Search from '../components/CarouselItem';


const App = () => (
<div className="App">
    <Header/>
    <Search/>
    <Categories>
        <Carousel>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
        </Carousel>
    </Categories>

</div>
);

export default App;
