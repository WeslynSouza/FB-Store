import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import './styles.css';

export default props => {

    let slideIndex = 1;
    mostrarSlides(slideIndex);

    function mudaSlide(n){
        mostrarSlides(slideIndex += n);
    }

    function mostrarSlides(n) {
        let slides = document.getElementsByClassName('carousel-item');
        if(n > slides.length) slideIndex = 1;
        if(n < 1) slideIndex = slides.length;
        for (let i in slides.length) {
            slides[i].classList.remove('active');
        }
        slides[slideIndex - 1].classList.add('active');
    }
    
    return (
        <div>
            <div className='carousel'>
                <button className='carousel-prev' onClick={mudaSlide(-1)}><FiChevronLeft/></button>
                <button className='carousel-next' onClick={mudaSlide(1)}><FiChevronRight/></button>

                <div className='carousel-item '>
                    <img src={props.img1} alt="Slide 1"/>
                </div>

                <div className='carousel-item active'>
                    <img src={props.img2} alt="Slide 2"/>
                </div>

                <div className='carousel-item'>
                    <img src={props.img3} alt="Slide 3"/>
                </div>
            </div>
        </div>
    )
}