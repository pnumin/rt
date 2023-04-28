import MyDivAUser1 from "./MyDivAUser1";
import MyDivAUser2 from "./MyDivAUser2";

const MyDivArticle = (probs) => {
    const aname = probs.aname ;
    
    return (
        <article>
            <header><h1>{aname || 'MyDiv0'}</h1></header>
            { !aname ? 'MyDiv0' 
                : aname.slice(-1) === '1'? <MyDivAUser1 user={aname} /> 
                : <MyDivAUser2 user={aname} />
            } 
        </article>
    );
}

export default MyDivArticle; 