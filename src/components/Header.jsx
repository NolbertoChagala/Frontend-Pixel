import '../styles/Header.css';

export default function Header() {
  return (
    <header id="header" className="header"  role="banner" aria-label="Introducción Pixel Studio">
      <h1 className="header-title">Pixel Studio</h1>
      <p className="header-subtitle">
        Creamos <span className="highlight">marcas únicas</span> y <span className="highlight">experiencias digitales</span> que conectan con tu audiencia.
      </p>
      <div className="underline" aria-hidden="true"></div>
    </header>
  );
}
