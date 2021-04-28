import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render(){

        const { name, type, averageWeight, image } = this.props.pokemon;

        return(
            <section className="containerPokemons">
                <div>
                    <p>{ name }</p>
                    <p>{ type }</p>
                    <p>Average Weight:{ averageWeight.value }{ averageWeight.measurementUnit }</p>
                </div>
                <div>
                    <img src= {image} alt={name}></img>
                </div>
            </section>
            
            
        );
    }
}

Pokemon.propTypes = {
   name: PropTypes.string,
   type: PropTypes.string,
   averageWeight: PropTypes.shape({
       value: PropTypes.number,
       measurementUnit: PropTypes.string
   }),
   image: PropTypes.string
}

export default Pokemon; 
