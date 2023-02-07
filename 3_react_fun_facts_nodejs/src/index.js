// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer"

import React from "react"
import ReactDOM from "react-dom"

// const funFact = (
//     <div>
//     <img src="./react-logo.png" alt="react logo" width="40px"/>
//     <h1>Fun Facts about React</h1>
//     <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise app, including mobile apps</li>
//     </ul>
//     </div>

// )

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(funFact)

/// practice example
function Header() {
    return (
      <header>
        <nav class="nav">
          <img src="./react-logo.png" alt="react" className="nav-logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }

function Footer() {
  return (
    <footer>
      <small>&copy; Pratik development. All rights reserved.</small>
    </footer>
  );
}

function Main() {
  return (
    <div className="main">
      <h1>Reasons I'm excited to learn react</h1>
      <ol className="reasons">
        <li>Its a popular library. So its cool to learn it</li>
        <li>More likely to get me a job</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />

      {/* or uncomment and use below code */}
      {/* {Header()} */}
      {/* {Main()} */}
      {/* {Footer()} */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Page />)
// or
root.render(Page());
