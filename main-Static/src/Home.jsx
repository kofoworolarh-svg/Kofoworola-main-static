import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <div style={{margin: "10px"}}>
            <h1>Coding</h1>
            <h2>What is coding all about?</h2>
            <p>Coding is the process of writing instructions that a computer can understand and execute in order to perform specific tasks or solve particular problems. These instructions are written using programming languages such as JavaScript, Python, Java, C++, C#, HTML, and CSS. A person who writes these instructions is commonly called a programmer or developer.</p> <br />

            <p>At its simplest level, coding is a way of communicating with a computer. Computers do not naturally understand human language in the same way people do, so programmers use programming languages to give them precise instructions. These instructions can tell a computer how to display information, calculate numbers, store data, respond to a user's actions, communicate with a server, or perform complex operations.</p> <br />

            <p>Coding is used in almost every area of modern technology. Websites, mobile applications, video games, banking systems, social-media platforms, artificial-intelligence systems, medical software, and even systems inside cars can all depend on code. For example, when you click a button on a website and something happens, code is responsible for detecting your action and determining what should happen next.</p> <br />

            <p>Coding also involves problem-solving and logical thinking, not simply typing commands. Programmers first understand a problem, break it into smaller parts, determine the steps needed to solve it, and then translate those steps into code. They also test their programs, identify errors known as bugs, and correct them.</p> <br />

            <p>In summary, coding is the practical process of creating computer instructions to build software, automate tasks, process information, and solve problems.</p>

            <div style={{display: "flex"}}>
                <li style={{margin: "5px"}}> <NavLink to="/webd" className="nac-link">Web Development</NavLink> </li>
                <li style={{margin: "5px"}}> <NavLink to="/madd" className="nac-link"> Mobile Application Development</NavLink> </li>
                <li style={{margin: "5px"}}> <NavLink to="/softd" className="nac-link">Software Development</NavLink> </li>
                <li style={{margin: "5px"}}> <NavLink to="/dsai" className="nac-link">Data Science and Artificial Intelligence</NavLink> </li>
            </div>
        </div>
    )
}
export default Home;