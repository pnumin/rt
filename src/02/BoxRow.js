import { useState } from "react";

const BoxRow = ({mvlist}) => {
    let mvTag = [];
    const [item, setItem] = useState('영화를 선택하세요.');
    const showItem = (mv) => {
        let tagItem = `[${mv.movieCd}] ${mv.movieNm} 개봉일 : ${mv.openDt} ` ;
        setItem(tagItem) ;
    }
    for (let mv of mvlist) {
        let inten = '-' ;
        if (mv.rankInten > 0) {
            inten = <span className="spup">{ '▲' + mv.rankInten }</span>;
        }
        else if (mv.rankInten < 0) {
            inten = <span className="spdown">{ '▼' + -(mv.rankInten) }</span>;
        }
        mvTag.push(
            <tr key={mv.movieCd} onClick={()=> showItem(mv)}>
                <td>{mv.rank}</td>
                <td>{mv.movieNm}</td>
                <td><span  className='tdsale'>{parseInt(mv.salesAmt).toLocaleString('ko-KR')}</span></td>
                <td>{inten}</td>
            </tr>
        )
    }

    return (
        <>
        <tbody>
            {mvTag}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={4} className="tfootTd">{item}</td>
            </tr>
        </tfoot>
        </> 
                
    );
}

export default BoxRow;