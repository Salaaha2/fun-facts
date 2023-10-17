import React from 'react'

 const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a href="_" className="brand-logo">Fun Facts</a>
            <ul className="right">
                <li><a href="/">Home</a></li>
                <li><a href="/funfactone">Fun Fact One</a></li>
                <li><a href="/funfacttwo">Fun Fact Two</a></li>
                <li><a href="/funfactthree">Fun Fact Three</a></li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar