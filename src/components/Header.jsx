import { NavLink } from "react-router-dom"; //Importo NavLink
export default function Header({ nameApp }) { //nameAPP viene pasatto attraverso props del App.jsx
    //constante di headersLinks per stampare dopo dinamicamente con map
    const headersLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Movies",
            path: "/movies"
        },
    ];
    return (
        <header className="fixed-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    {/*   Condizione ternario per fare la condizione del Movie App
                   Se nameApp è diverso da stringa vuota, allora metto nameApp. Altrimenti metto Default App*/}
                    <a className="navbar-brand" href="#">{nameApp !== "" ? nameApp : "Default App"}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* Uso di map per stampare dinamicamente la lista dei links, map mi prendi come parametro la funzione di callback */}
                            {headersLinks.map((link, index) => (
                                <li className="nav-item" key={index}>
                                    <NavLink className="nav-link " aria-current="page" to={link.path}>{link.title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}