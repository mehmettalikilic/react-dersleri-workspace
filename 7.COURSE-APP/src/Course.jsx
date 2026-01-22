import React from 'react'

function Course({ course }) {
    const { id, title, descriiption, price, link, image } = course;
  return (
    <div className="course">
        <div >
            <img src={image} alt={title} />
            <h4 className = "title">{title}</h4>
            <h5>{descriiption}</h5>
            <h3>Price: {price} $</h3>
            <h6><a href={link}>Kursa Git</a></h6>

        </div>

    </div>
  )
}

export default Course