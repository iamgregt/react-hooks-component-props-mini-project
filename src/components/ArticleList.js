import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    console.log(posts)
    return(
        <main>
        {posts.map(article => {
            return(
                <Article article={article} key={article.id} />
            )
        })}
        </main>
    )
}

export default ArticleList
