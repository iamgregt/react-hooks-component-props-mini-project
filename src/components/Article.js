import React from "react";

function Article(props){
    return(
        <article>
            <h3 title={props.title}>{props.title}</h3>
            <small date={props.date}>{props.date}</small>
            <p preview={props.preview}>{props.preview}</p>
        </article>
    )
}

export default Article