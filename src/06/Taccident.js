import dataTaccident from './dataTaccident.json';
import TaccidentNav from './TaccidentNav';
import TaccidentNav2 from './TaccidentNav2';
import { useState, useEffect } from 'react';
import style from './Taccdent.module.css' ;

const Taccident = () => {
    const data = dataTaccident.data;
    let c1 = data.map((item) => item.사고유형_대분류);
    c1 = new Set(c1);
    c1 = [...c1];

    let c2 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);
    console.log(c1)
    console.log(c2)
 
    const [sel1, setSel1] = useState(c1[0]);
    const [sel2, setSel2] = useState();
    const [selData, setSelData] = useState({});
    const [viewTag, setviewTag] = useState('');

    useEffect(()=>{setviewTag('')},[])
    useEffect(()=>{
        console.log('대분류',sel1)
        setSelData({}) ;
        setSel2();
        setviewTag('') ;
    }, [sel1]);

    useEffect(()=>{
        console.log('중분류',sel2)
        if (sel2 !== undefined) {
            let temp = data.filter((item) => 
                            item.사고유형_대분류 ===sel2[0] && item.사고유형_중분류 ===sel2[1])
            setSelData(temp[0]);
        }
        
    }, [data,sel2]);

    useEffect(()=>{
        console.log('선택항목',selData)
        if (selData !== undefined && Object.keys(selData).length !== 0) { 
            const vkey = ["사고건수", "사망자수","중상자수","경상자수","부상신고자수"]
            let ttag = vkey.map((k) => 
                <div key={k}>
                <span className={style.sp1}>{k}</span>
                <span className={style.sp2}>{parseInt(selData[k]).toLocaleString()}</span>
                </div>
                );

            setviewTag(ttag);
        }
        
         
    }, [selData]);

    return (
        <>
            <main className="container">
                <article>
                    <TaccidentNav c1={c1} sel1={sel1} setSel1={setSel1} />
                    <TaccidentNav2 sel1={sel1} c2={c2} sel2={sel2} setSel2={setSel2} />
                    <div className='grid'>
                        {viewTag}
                    </div>
                </article>
            </main>
        </>
    );
}

export default Taccident;