import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import './styles.css';

export default props => {

    let slideIndex = 1;

    function prevSlide(){
        mostrarSlides(slideIndex -= 1);
    }

    function nextSlide(n){
        mostrarSlides(slideIndex += 1);
    }

    function mostrarSlides(n) {
        let slides = document.getElementsByClassName('carousel-item');
        if(n > slides.length) slideIndex = 1;
        if(n < 1) slideIndex = slides.length;
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.remove('active');
        }
        slides[slideIndex - 1].classList.add('active');
    }
    
    return (
        <div className='carousel'>
            <button className='carousel-prev' onClick={prevSlide}><FiChevronLeft/></button>
            <button className='carousel-next' onClick={nextSlide}><FiChevronRight/></button>

            {props.children}
        </div>
    )
}