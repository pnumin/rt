import './MyDiv.css' ;
import style from './MyDiv2.module.css' ;
const MyDivAUser2 = ({user}) => {

    return (
        <ul className={style.div2ul}>
            <li>{user}</li>
            <li>{user+'2'}</li>
        </ul>
    );
}

export default MyDivAUser2 ;