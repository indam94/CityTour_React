import React, { Component } from 'react'
import './Tour.scss'
import "@fortawesome/fontawesome-free/css/all.min.css"

export default class Tour extends Component {
    render() {

        console.log(this.props);
        const {id, city, img, name, info} = this.props.tour;
        const { removeTour } = this.props;
        // console.log({newYork});
        return (
            <article className='tour'>
                <div className="img-container">
                    <img src={img} alt="img of the tour"/>
                    <span className="close-btn">
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info 
                        <span>
                            <i className="fas fa-caret-square-down"/>
                        </span>
                    </h5>
                </div>
            </article>
            
        )
    }
}
