import style from './Taccdent.module.css' ;
const TaccidentNav = ({ c1, sel1, setSel1 }) => {

    const liTags = c1.map((item, idx) =>
        <li key={idx}>
            <button onClick={()=>setSel1(item)} 
            className={item === sel1? style.bt1 : style.bt11}>{item}</button>
        </li>
    );

    return (
        <nav>
            <ul>
                <li><strong>교통사고 대분류</strong></li>
            </ul>
            <ul>
                {liTags}
            </ul>
        </nav>
    );
}

export default TaccidentNav;