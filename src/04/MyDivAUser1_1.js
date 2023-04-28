import './MyDiv.css' ;
import style from './MyDiv1.module.css' ;

const MyDivAUser1 = ({user}) => {
    let cnt = 0 ;

    const likeBt = (n) => {
        cnt = cnt + n ; 
        console.log("cnt =", cnt);
    }
    return (
        <>
            <ul className={style.div1ul}>
                <li>{user}</li>
                <li>{user+'1'}</li>
            </ul>
            <footer>
                <h2><span onClick={()=>likeBt(1)}>❤️</span> {cnt}</h2>
            </footer>
        </>
    );
}

export default MyDivAUser1 ;

