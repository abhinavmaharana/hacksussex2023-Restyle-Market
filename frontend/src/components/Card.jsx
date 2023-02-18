import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} className="card__image" />
            <div className="card__info">
              <h2 className="card__title">{props.title}</h2>
              <h4 className="card__location">{props.location}</h4>
              <p className="card__description">{props.description}</p>
              <p className="card__price">Original price: {props.price}</p>
              <button className="card__button">Trade now</button>
            </div>
          </div>
    )
}