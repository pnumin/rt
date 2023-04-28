import BoxRow from './BoxRow' ;
import "./Box.css";
const Box = () => {
    let mvlist = [
        {
            "rnum": "1",
            "rank": "1",
            "rankInten": "0",
            "rankOldAndNew": "OLD",
            "movieCd": "20231089",
            "movieNm": "존 윅 4",
            "openDt": "2023-04-12",
            "salesAmt": "498804869",
            "salesShare": "49.1",
            "salesInten": "-61461999",
            "salesChange": "-11",
            "salesAcc": "8744300881",
            "audiCnt": "49024",
            "audiInten": "-6075",
            "audiChange": "-11",
            "audiAcc": "830385",
            "scrnCnt": "1418",
            "showCnt": "4178"
        },
        {
            "rnum": "2",
            "rank": "2",
            "rankInten": "0",
            "rankOldAndNew": "OLD",
            "movieCd": "20226270",
            "movieNm": "스즈메의 문단속",
            "openDt": "2023-03-08",
            "salesAmt": "156655224",
            "salesShare": "15.4",
            "salesInten": "-17701758",
            "salesChange": "-10.2",
            "salesAcc": "48680559102",
            "audiCnt": "15632",
            "audiInten": "-1794",
            "audiChange": "-10.3",
            "audiAcc": "4729901",
            "scrnCnt": "780",
            "showCnt": "2252"
        },
        {
            "rnum": "3",
            "rank": "3",
            "rankInten": "0",
            "rankOldAndNew": "OLD",
            "movieCd": "20226489",
            "movieNm": "리바운드",
            "openDt": "2023-04-05",
            "salesAmt": "91993050",
            "salesShare": "9.1",
            "salesInten": "-2717118",
            "salesChange": "-2.9",
            "salesAcc": "4866906220",
            "audiCnt": "9996",
            "audiInten": "145",
            "audiChange": "1.5",
            "audiAcc": "504939",
            "scrnCnt": "638",
            "showCnt": "1550"
        },
        {
            "rnum": "4",
            "rank": "4",
            "rankInten": "0",
            "rankOldAndNew": "OLD",
            "movieCd": "20200154",
            "movieNm": "킬링 로맨스",
            "openDt": "2023-04-14",
            "salesAmt": "90594302",
            "salesShare": "8.9",
            "salesInten": "7094113",
            "salesChange": "8.5",
            "salesAcc": "831714097",
            "audiCnt": "9642",
            "audiInten": "529",
            "audiChange": "5.8",
            "audiAcc": "85396",
            "scrnCnt": "809",
            "showCnt": "2401"
        },
        {
            "rnum": "5",
            "rank": "5",
            "rankInten": "0",
            "rankOldAndNew": "OLD",
            "movieCd": "20228555",
            "movieNm": "더 퍼스트 슬램덩크",
            "openDt": "2023-01-04",
            "salesAmt": "56945954",
            "salesShare": "5.6",
            "salesInten": "8015211",
            "salesChange": "16.4",
            "salesAcc": "46960068686",
            "audiCnt": "4448",
            "audiInten": "517",
            "audiChange": "13.2",
            "audiAcc": "4504617",
            "scrnCnt": "278",
            "showCnt": "432"
        },
        {
            "rnum": "6",
            "rank": "6",
            "rankInten": "1",
            "rankOldAndNew": "OLD",
            "movieCd": "20231009",
            "movieNm": "거울 속 외딴 성",
            "openDt": "2023-04-12",
            "salesAmt": "21669981",
            "salesShare": "2.1",
            "salesInten": "6209420",
            "salesChange": "40.2",
            "salesAcc": "277096588",
            "audiCnt": "2301",
            "audiInten": "776",
            "audiChange": "50.9",
            "audiAcc": "27730",
            "scrnCnt": "275",
            "showCnt": "370"
        },
        {
            "rnum": "7",
            "rank": "7",
            "rankInten": "2",
            "rankOldAndNew": "OLD",
            "movieCd": "20210544",
            "movieNm": "웅남이",
            "openDt": "2023-03-22",
            "salesAmt": "8480399",
            "salesShare": "0.8",
            "salesInten": "357399",
            "salesChange": "4.4",
            "salesAcc": "2837524871",
            "audiCnt": "1140",
            "audiInten": "204",
            "audiChange": "21.8",
            "audiAcc": "309765",
            "scrnCnt": "105",
            "showCnt": "127"
        },
        {
            "rnum": "8",
            "rank": "8",
            "rankInten": "0",
            "rankOldAndNew": "OLD",
            "movieCd": "20231010",
            "movieNm": "에어",
            "openDt": "2023-04-05",
            "salesAmt": "10565114",
            "salesShare": "1.0",
            "salesInten": "-6336",
            "salesChange": "-0.1",
            "salesAcc": "1012026465",
            "audiCnt": "1058",
            "audiInten": "9",
            "audiChange": "0.9",
            "audiAcc": "103796",
            "scrnCnt": "218",
            "showCnt": "269"
        },
        {
            "rnum": "9",
            "rank": "9",
            "rankInten": "1",
            "rankOldAndNew": "OLD",
            "movieCd": "20226410",
            "movieNm": "던전 앤 드래곤: 도적들의 명예",
            "openDt": "2023-03-29",
            "salesAmt": "10091597",
            "salesShare": "1.0",
            "salesInten": "2323401",
            "salesChange": "29.9",
            "salesAcc": "2917979873",
            "audiCnt": "979",
            "audiInten": "217",
            "audiChange": "28.5",
            "audiAcc": "292067",
            "scrnCnt": "161",
            "showCnt": "223"
        },
        {
            "rnum": "10",
            "rank": "10",
            "rankInten": "0",
            "rankOldAndNew": "NEW",
            "movieCd": "20167904",
            "movieNm": "라라랜드",
            "openDt": "2016-12-07",
            "salesAmt": "7050392",
            "salesShare": "0.7",
            "salesInten": "7050392",
            "salesChange": "100",
            "salesAcc": "31093057900",
            "audiCnt": "875",
            "audiInten": "875",
            "audiChange": "100",
            "audiAcc": "3768585",
            "scrnCnt": "50",
            "showCnt": "55"
        }
    ]
    return (
        <main className="container">
            <article>
                <header>
                    <h1>박스오피스</h1>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>
                     
                    <BoxRow mvlist={mvlist} /> 
                </table>
            </article>
        </main>
    );
}

export default Box;