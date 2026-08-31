import { NavLink } from "react-router-dom";


const Webd = () => {
    return (
        <div className="web-page">

            {/* Navigation */}
            <nav className="web-navigation">

                <NavLink to="/" className="web-nav-link">
                    Home
                </NavLink>

                <NavLink to="/softd" className="web-nav-link">
                    Software Development
                </NavLink>

                <NavLink to="/madd" className="web-nav-link">
                    Mobile Application Development
                </NavLink>

                <NavLink to="/dsai" className="web-nav-link">
                    Data Science & Artificial Intelligence
                </NavLink>

            </nav>


            {/* Main Content */}
            <main className="web-content">

                <h1>Web Development</h1>

                <h2>What is Web Development?</h2>

                <p>
                    Web development is one of the most important branches of
                    coding because it focuses on creating websites and web
                    applications that people access through the internet or a
                    web browser. Everything from a simple personal webpage to
                    a large e-commerce platform can involve web development.
                </p>

                <p>
                    Web development is generally divided into front-end
                    development, back-end development, and full-stack
                    development.
                </p>

                <p>
                    Front-end development focuses on what users see and
                    interact with on a website. It involves elements such as
                    navigation menus, buttons, images, forms, animations,
                    product cards, and page layouts. Common technologies
                    include HTML, CSS, and JavaScript. HTML provides the
                    structure of a webpage, CSS controls its appearance and
                    layout, while JavaScript allows the webpage to respond
                    dynamically to user actions.
                </p>

                <p>
                    For example, when you are building a React application
                    and create a navigation link that changes color when the
                    user visits /tops, you are working with front-end
                    development. React itself is a JavaScript library
                    commonly used to create interactive user interfaces.
                </p>

                <p>
                    Back-end development, on the other hand, deals with what
                    happens behind the scenes. It can involve databases,
                    authentication, APIs, servers, payments, and processing
                    information submitted by users. Technologies such as
                    Node.js, Python, PHP, Java, and C# can be used for
                    back-end development.
                </p>

                <p>
                    Full-stack development combines both front-end and
                    back-end development. A full-stack developer can build
                    the visible interface while also working on the server
                    and database that support it.
                </p>

                <p>
                    Web development is particularly important because
                    businesses, schools, organizations, stores, and
                    individuals increasingly rely on websites and web
                    applications to provide information and services.
                </p>

            </main>

        </div>
    );
};

export default Webd;
