import { Link } from "react-router-dom";
export default function ArticleList({articles}){
    return (
        <>
        {articles.map(a => (
            <Link key={a.name} to={'/articles/' + a.name}>
            <h3>{a.title}</h3>
            </Link>
        ))}
        </>
    )
}