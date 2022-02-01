import React from "react";
import Article from "./Article";

function ArticleList(props){
    return(
        <main>
        {props.map(article => {
            return(
                <Article article={article} />
            )
        })}
        </main>
    )
}

export default ArticleList
