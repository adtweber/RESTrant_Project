const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST Rant</h1>
                <a href='/places'>Come see our places</a>
                <div>
                    <img src= "/images/chiafruitdrink.jpg" alt="chia fruit drink"></img>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home