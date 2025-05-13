import Link from "next/link"

const Cabecera = () => {
    return (
        <div>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <img className="h-8 w-auto" src="https://st2.depositphotos.com/1768926/10934/v/450/depositphotos_109347560-stock-illustration-water-wave-logo-template.jpg" alt="logo" />
                <Link href="/peliculas">
                    <h2>Página de Películas</h2>
                </Link>
            </nav>
            <hr/>
            <br/>
        </div>
    )
}

export default Cabecera