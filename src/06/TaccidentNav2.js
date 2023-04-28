import style from './Taccdent.module.css' ;
const TaccidentNav2 = ({ sel1, c2, sel2, setSel2 }) => {
    const c2F = c2.filter((item) => item[0]===sel1);

    const liTags = c2F.map((item, idx) =>
        <li key={idx}>
            <button onClick={()=>setSel2(item)} 
            className={sel2 && item[1] === sel2[1]? style.bt1 : style.bt11}>{item[1]}</button>
        </li> 
    );

    return (
        <nav>
            <ul>
                <li><strong>교통사고 중분류</strong></li>
            </ul>
            <ul>
                {liTags}
            </ul>
        </nav>
    );
}

export default TaccidentNav2;