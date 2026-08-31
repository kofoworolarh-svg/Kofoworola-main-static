import { NavLink } from "react-router-dom";
const MobileAppd = () => {
    return (
        <div className="mobile-page">

            {/* Navigation */}
            <nav className="mobile-navigation">

                <NavLink to="/" className="mobile-nav-link">
                    Home
                </NavLink>

                <NavLink to="/webd" className="mobile-nav-link">
                    Web Development
                </NavLink>

                <NavLink to="/softd" className="mobile-nav-link">
                    Software Development
                </NavLink>

                <NavLink to="/dsai" className="mobile-nav-link">
                    Data Science & Artificial Intelligence
                </NavLink>

            </nav>


            {/* Main Content */}
            <main className="mobile-content">

                <h1>Mobile Application Development</h1>

                <h2>What is Mobile Application Development?</h2>

                <p>
                    Mobile application development is the branch of coding
                    concerned with creating applications that run on mobile
                    devices such as smartphones and tablets. Applications can
                    be designed for different operating systems, with the two
                    major mobile platforms being Android and iOS.
                </p>

                <p>
                    Mobile applications can perform a huge variety of functions.
                    Examples include banking applications, messaging applications,
                    shopping applications, educational applications, fitness
                    applications, games, transportation applications, and
                    social-media applications.
                </p>

                <p>
                    There are several approaches to mobile development. One
                    approach is native development, where programmers create an
                    application specifically for a particular operating system.
                    Android applications are commonly developed using Kotlin or
                    Java, while iOS applications are commonly developed using Swift.
                </p>

                <p>
                    Another approach is cross-platform development. Instead of
                    creating completely separate applications for Android and iOS,
                    developers can use technologies that allow much of the same
                    code to be used across multiple platforms. Examples include
                    React Native and Flutter. This can save development time because
                    developers do not necessarily have to build two completely
                    independent applications.
                </p>

                <p>
                    Mobile development also requires programmers to think about
                    things that may be less important on traditional websites.
                    For example, developers must consider different screen sizes,
                    touch interactions, battery consumption, device storage,
                    notifications, cameras, GPS, and other hardware features.
                </p>

                <p>
                    A mobile developer therefore needs more than knowledge of
                    programming syntax. They must understand how users interact
                    with mobile devices and how applications behave under
                    different conditions.
                </p>

                <p>
                    Testing is also extremely important. An application may work
                    perfectly on one phone but behave differently on another
                    because of differences in screen size, operating-system
                    versions, hardware capabilities, or available resources.
                </p>

                <p>
                    Overall, mobile application development combines programming,
                    interface design, device technology, and user experience to
                    create software people can use directly from their mobile
                    devices.
                </p>

            </main>

        </div>
    );
};

export default MobileAppd;