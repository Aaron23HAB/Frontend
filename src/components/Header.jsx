import { Auth } from "./Auth"

export const Header = () => {
    return (
      <header>
        <h1> App de notas </h1>
        <nav>
        <Auth />
      </nav>
      </header>
    );
}