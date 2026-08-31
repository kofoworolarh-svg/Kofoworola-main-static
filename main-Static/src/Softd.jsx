import { NavLink } from "react-router-dom";

const Softd = () => {
    return (
        <div className="soft-page">

            {/* Navigation */}
            <nav className="soft-navigation">

                <NavLink to="/" className="soft-nav-link">
                    Home
                </NavLink>

                <NavLink to="/webd" className="soft-nav-link">
                    Web Development
                </NavLink>

                <NavLink to="/madd" className="soft-nav-link">
                    Mobile Application Development
                </NavLink>

                <NavLink to="/dsai" className="soft-nav-link">
                    Data Science & Artificial Intelligence
                </NavLink>

            </nav>


            {/* Main Content */}
            <main className="soft-content">

                <h1>Software Development</h1>

                <h2>What is Software Development?</h2>

                <p>
                    Software development is a broad branch of coding that involves
                    designing, creating, testing, maintaining, and improving
                    computer software. While web and mobile development focus on
                    particular types of applications, software development covers
                    a much wider range of programs.
                </p>

                <p>
                    Software can include desktop applications, business systems,
                    operating systems, productivity tools, scientific programs,
                    financial systems, and many other types of computer applications.
                </p>

                <p>
                    A software developer usually begins by identifying a problem or
                    requirement. For example, a company might need software that
                    allows employees to manage customers and generate reports. The
                    developer then determines what the software needs to accomplish
                    and designs a solution.
                </p>

                <p>
                    Programming languages used in software development depend heavily
                    on the type of software being created. Languages such as C++,
                    C#, Java, Python, JavaScript, and Rust can all be used for
                    different purposes.
                </p>

                <p>
                    An important part of software development is software
                    architecture. Architecture refers to how the different parts
                    of a program are organized and how they communicate with each
                    other. Good architecture can make software easier to understand,
                    test, maintain, and expand.
                </p>

                <p>
                    Software developers also spend significant amounts of time
                    debugging. A bug is an error or unexpected behavior in a
                    program. Developers must investigate why the problem occurs,
                    identify the relevant part of the code, make a correction,
                    and test the program again.
                </p>

                <p>
                    Testing is another major component. Developers may perform
                    unit testing, integration testing, system testing, and other
                    forms of testing to ensure that software behaves correctly.
                </p>

                <p>
                    Software development also continues after a program is released.
                    Developers may need to fix security problems, correct bugs,
                    improve performance, add features, and adapt the software to
                    new operating systems or technologies.
                </p>

                <p>
                    Therefore, software development is not simply "writing code."
                    It is a complete process involving planning, programming,
                    testing, debugging, deployment, maintenance, and continuous
                    improvement.
                </p>

            </main>

        </div>
    );
};

export default Softd;