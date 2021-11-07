import classes from './AboutMe.module.css'
const AboutMe = () => {
    return (
        <div className={classes.maim}>
            <div style={{ padding: '20px' }}>I mastered it on my own native js at <a href='https://learn.javascript.ru/'>https://learn.javascript.ru/</a></div>
            <div style={{ paddingLeft: '20px' }}><b>Completed projects:</b></div>
            <div style={{ paddingLeft: '20px' }}>
                <div style={{ paddingLeft: '10px' }}> <b>A</b> single-page application in React with TypeScript connection (props, typing), Redux, which includes the use of hooks: useState (filter, conditional rendering), useEffect.</div>
                <div style={{ paddingLeft: '10px' }}> <b>T</b>o do List, Counter, Accordin, Rating.</div>
                <div style={{ paddingLeft: '10px' }}> <b>W</b>riting unit tests for your applications.</div>
            </div>
            <div style={{ padding: '20px' }}>GitHub link: <a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'>https://github.com/Diana-ctrl</a></div>
            <div style={{ padding: '20px' }}>
                <div>Links to completed tasks: </div>
                <div>
                    <a href='https://leetcode.com/Diana_Lyah/'>https://leetcode.com/Diana_Lyah/</a>
                </div>
                <div>
                    <a href='https://www.codewars.com/users/Diana-ctrl'>https://www.codewars.com/users/Diana-ctrl</a>
                </div>
                <div>
                    <a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'>https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/</a>
                </div>
            </div>
            <div style={{ padding: '20px' }}>
                <div>2021</div>
                Programming courses in <a href='https://it-incubator.by/'>IT-INCUBATOR</a>
                <div>Front-end development</div>
                <div>2020</div>
                <a href='https://abitur.bsuir.by/programmnoe-obespechenie-informatsionnykh-tekhnologiy'>Belarusian State University of Informatics and Radioelectronics</a>
                <div>Incomplete distance education, Information technology software</div>
                <div>2019</div>
                <a href='https://skyengschool.com/'>Skyeng: Online English School</a>
                <div>General English, Pre-Intermediate</div>
                <div>2018</div>
                <a href='https://by.belstu.by/'>Belarusian State Technological University</a>
                <div>Organic Technology, Certification Specialist</div>
            </div>
        </div >
    )

}
export default AboutMe;