const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST Rant</h1>
                <a href='/places'>Come see our places</a>
                <div>
                    <img src="https://betterwithcats.net/wp-content/uploads/2022/08/Why-Are-Orange-Cats-So-Dumb-A-Myth-Or-A-Real-Thing-728x410.jpg" alt="Cat" />
                    <div>
                        Cat by <a href="betterwithcats">betterwithcats</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home