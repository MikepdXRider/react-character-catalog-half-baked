import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Welcome to the Rick &amp; Morty Character Catalog!</h1>
      <Link to="/characters">View Characters</Link>
    </>
  );
}
