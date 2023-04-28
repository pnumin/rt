import './MyDiv.css' ;
import style from './MyDiv1.module.css' ;
import { useState } from 'react';

const MyDivAUser1 = ({user}) => {
    const [cnt, setCnt] = useState(0) ;

    const likeBt = () => {
        setCnt(cnt + 1) ;
        console.log("cnt =", cnt);
    }
    return (
        <>
            <ul className={style.div1ul}>
                <li>{user}</li>
                <li>{user+'1'}</li>
            </ul>
            <footer>
                <h2><span onClick={()=>likeBt()}>❤️</span> {cnt}</h2>
            </footer>
        </>
    );
}

export default MyDivAUser1 ;

