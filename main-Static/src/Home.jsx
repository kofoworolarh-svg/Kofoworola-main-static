    import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <div className="home-container">

            <div className="home-content">

                <h1 className="main-title">Coding</h1>

                <h2 className="sub-title">
                    What is coding all about?
                </h2>

                <p>
                    Coding is the process of writing instructions that a computer
                    can understand and execute in order to perform specific tasks
                    or solve particular problems. These instructions are written
                    using programming languages such as JavaScript, Python, Java,
                    C++, C#, HTML, and CSS. A person who writes these instructions
                    is commonly called a programmer or developer.
                </p>

                <p>
                    At its simplest level, coding is a way of communicating with a
                    computer. Computers do not naturally understand human language
                    in the same way people do, so programmers use programming
                    languages to give them precise instructions. These instructions
                    can tell a computer how to display information, calculate
                    numbers, store data, respond to a user's actions, communicate
                    with a server, or perform complex operations.
                </p>

                <p>
                    Coding is used in almost every area of modern technology.
                    Websites, mobile applications, video games, banking systems,
                    social-media platforms, artificial-intelligence systems,
                    medical software, and even systems inside cars can all depend
                    on code. For example, when you click a button on a website and
                    something happens, code is responsible for detecting your
                    action and determining what should happen next.
                </p>

                <p>
                    Coding also involves problem-solving and logical thinking, not
                    simply typing commands. Programmers first understand a problem,
                    break it into smaller parts, determine the steps needed to solve
                    it, and then translate those steps into code. They also test
                    their programs, identify errors known as bugs, and correct them.
                </p>

                <p>
                    In summary, coding is the practical process of creating computer
                    instructions to build software, automate tasks, process
                    information, and solve problems.
                </p>

                <h2 className="branches-title">
                    Explore Coding Branches
                </h2>

                <div className="navigation-container">

                    <NavLink
                        to="/webd"
                        className="coding-link"
                    >
                        <span>01</span>
                        <div>
                            <h3>Web Development</h3>
                            <p>Learn how websites and web applications are built.</p>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/madd"
                        className="coding-link"
                    >
                        <span>02</span>
                        <div>
                            <h3>Mobile Application Development</h3>
                            <p>Explore how applications for mobile devices are created.</p>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/softd"
                        className="coding-link"
                    >
                        <span>03</span>
                        <div>
                            <h3>Software Development</h3>
                            <p>Discover how complete software systems are designed and developed.</p>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/dsai"
                        className="coding-link"
                    >
                        <span>04</span>
                        <div>
                            <h3>Data Science & Artificial Intelligence</h3>
                            <p>Learn how data and intelligent systems are used to solve problems.</p>
                        </div>
                    </NavLink>

                </div>

            </div>

        </div>
    );
};

export default Home;
