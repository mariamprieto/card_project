import React, { useEffect, useState } from "react"

function cardCourse() {

    const [courses, setCourse] = useState([])

    useEffect(() => {
        fetch("json/data.json")
            .then(response => response.json())
            .then(datos => {
                setPostres(datos)
            })
    }, [])

    return courses
}

export default function DisplayCourse() {

    const card =cardCourse()

    return (

        
        card.map(item => (
            <div className="container">
                    
                <h2>{item.name}</h2>
                <h3>{item.address}</h3>
                <p> {item.phone}</p>
                <img src={`${process.env.PUBLIC_URL}/imagenes/${item.img}`} alt={item.name} width="30px" className="img-fluid" />
            </div>

        ))  

    

    );
}
