import { NavLink } from "react-router-dom";

const Dsai = () => {
    return (
        <div className="dsai-page">

            {/* Navigation */}
            <nav className="dsai-navigation">

                <NavLink to="/" className="dsai-nav-link">
                    Home
                </NavLink>

                <NavLink to="/webd" className="dsai-nav-link">
                    Web Development
                </NavLink>

                <NavLink to="/madd" className="dsai-nav-link">
                    Mobile Application Development
                </NavLink>

                <NavLink to="/softd" className="dsai-nav-link">
                    Software Development
                </NavLink>

            </nav>


            {/* Main Content */}
            <main className="dsai-content">

                <h1>Data Science & Artificial Intelligence</h1>

                <h2>
                    What is Data Science and Artificial Intelligence?
                </h2>

                <p>
                    Data science and artificial intelligence are important
                    branches of coding that focus on using computers to analyze
                    information, discover patterns, make predictions, and perform
                    tasks that normally require some form of human intelligence.
                </p>

                <p>
                    Data science involves collecting, organizing, analyzing, and
                    interpreting large amounts of data. Organizations can use
                    data to make better decisions. For example, an online store
                    might analyze customers' purchasing behavior to determine
                    which products are most popular.
                </p>

                <p>
                    One of the most commonly used programming languages in data
                    science is Python. Python has numerous libraries that make it
                    useful for working with data, including tools for numerical
                    calculations, data manipulation, visualization, and machine
                    learning.
                </p>

                <p>
                    Artificial intelligence (AI) is a broader field concerned
                    with creating computer systems that can perform tasks
                    associated with intelligence. These tasks can include
                    recognizing images, understanding language, recommending
                    products, generating content, identifying patterns, and
                    making predictions.
                </p>

                <p>
                    A major area of AI is machine learning. Instead of explicitly
                    programming every possible situation, developers provide
                    algorithms with data from which the system can learn patterns.
                    For example, a machine-learning system can be trained using
                    thousands of examples of emails labeled as either spam or
                    legitimate. After learning from those examples, it can attempt
                    to classify new emails.
                </p>

                <p>
                    Another important area is deep learning, which uses neural
                    networks containing multiple layers to process complex
                    patterns. Deep-learning systems are used in areas such as
                    image recognition, speech recognition, natural-language
                    processing, and recommendation systems.
                </p>

                <p>
                    Coding plays an important role throughout this process.
                    Developers write programs that collect data, clean it, train
                    models, evaluate their performance, and integrate the resulting
                    models into applications.
                </p>

                <p>
                    This branch is particularly powerful because it allows
                    computers to work with enormous amounts of information and
                    identify patterns that might be difficult for humans to detect
                    manually. As a result, data science and AI are increasingly
                    being applied in fields such as finance, education, healthcare,
                    transportation, marketing, scientific research, and technology.
                </p>

            </main>

        </div>
    );
};

export default Dsai;