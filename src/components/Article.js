import React from "react";

function Article({
    article,
    title=article.title,
    date="January 1, 1970",
    preview=article.preview
})
{
    console.log(article)
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article