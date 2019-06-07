import React from 'react'

function House(props){
    let showHouses = props.houses.map((house, index) =>{
        return(
            <div>
                <h1>{house.name}</h1>
                <h1>{house.address}</h1>
            </div>
        )
    })
    return(
        <div>
            {showHouses}
        </div>
        
    )
}
export default House