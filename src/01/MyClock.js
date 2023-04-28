import MyClockImage from './MyClockImage' ;
import MyClockTime from './MyClockTime' ;

const MyClock = () => {

    return (
        <main className="container">
            <article data-theme="dark">
                <MyClockImage />
                <footer>
                    <MyClockTime />
                </footer>
                
            </article>
        </main>
    ) ;
}

export default MyClock ;