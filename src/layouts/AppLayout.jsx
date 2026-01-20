import Header from "../components/Header"; //Importo Header
import { Outlet } from "react-router-dom"; //Importo Outlet per il corpo della pagina

export default function AppLayout({nameApp}) {
    return (
        <>
        <Header nameApp={nameApp}/>
        <Outlet />
        </>
    );
}