import React from "react";

function About(props){
    return(
       <aside>
           <img src={props.image} placeholder="https://via.placeholder.com/215" alt="blog logo"/>
           <p about={props.about}>{props.about}</p>
       </aside> 
    )
}

export default About