import React, { Component } from 'react'
import Tour from '../Tour';
import './TourList.scss';
import {tourData} from '../../tourData';

export default class TourList extends Component {
    state={
        tours: tourData
    };

    removeTourHandler = id =>{
        console.log(id);
    };

    render() {
        // console.log(this.state.tours);

        const {tours} = this.state;

        return (
            <section className = 'tourlist'>
                {
                    tours.map(tour => (<Tour 
                                            key={tour.id} 
                                            tour={tour}
                                            removeTour={this.removeTourHandler}
                                        >
                                            
                                        </Tour>))
                }
            </section>
        )
    }
}
