import { NavLink } from "react-router-dom";
const MobileAppd = () => {


    return (
        <div>

            <div style={{ display: "flex" }}>
                <ul style={{textDecoration: "none", listStyle: "none", margin :"9px"}}>
                    <li style={{ margin: "5px", padding: "5px", border: "1px blue solid", background: "white" }}> <NavLink to="/" className="nac-link">Home</NavLink> </li>
                    <li style={{ margin: "5px" , padding: "5px", border: "1px blue solid", background: "white"}}> <NavLink to="/webd" className="nac-link">Web Development</NavLink> </li>
                    <li style={{ margin: "5px", padding: "5px", border: "1px blue solid", background: "white" }}> <NavLink to="/softd" className="nac-link"> Software Development</NavLink> </li>
                    <li style={{ margin: "5px", padding: "5px", border: "1px blue solid", background: "white" }}> <NavLink to="/dsai" className="nac-link">Data Science and Artificial Intelligence</NavLink> </li>
                </ul>
            </div>

            <p>Mobile application development is the branch of coding concerned with creating applications that run on mobile devices such as smartphones and tablets. Applications can be designed for different operating systems, with the two major mobile platforms being Android and iOS.</p> <br /><br />

            <p> Mobile applications can perform a huge variety of functions. Examples include banking applications, messaging applications, shopping applications, educational applications, fitness applications, games, transportation applications, and social-media applications.</p> <br /><br />

            <p>There are several approaches to mobile development. One approach is native development, where programmers create an application specifically for a particular operating system. Android applications are commonly developed using Kotlin or Java, while iOS applications are commonly developed using Swift.</p> <br /><br />

            <p>Another approach is cross-platform development. Instead of creating completely separate applications for Android and iOS, developers can use technologies that allow much of the same code to be used across multiple platforms. Examples include React Native and Flutter. This can save development time because developers do not necessarily have to build two completely independent applications.</p> <br /><br />

            <p>Mobile development also requires programmers to think about things that may be less important on traditional websites. For example, developers must consider different screen sizes, touch interactions, battery consumption, device storage, notifications, cameras, GPS, and other hardware features.</p> <br /><br />

            <p> A mobile developer therefore needs more than knowledge of programming syntax. They must understand how users interact with mobile devices and how applications behave under different conditions.</p> <br /><br />

            <p>Testing is also extremely important. An application may work perfectly on one phone but behave differently on another because of differences in screen size, operating-system versions, hardware capabilities, or available resources.</p> <br /><br />

            <p> Overall, mobile application development combines programming, interface design, device technology, and user experience to create software people can use directly from their mobile devices.</p>
        </div>
    )
}
export default MobileAppd;