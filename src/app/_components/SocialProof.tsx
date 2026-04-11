export default function SocialProof() {
  const logos = [
    'Despacho García & Asoc.',
    'Notaría Puig',
    'Asesoría Roca',
    'Bufete Casals',
    'Gestoría Pla',
  ]

  return (
    <section className="social-proof" id="social-proof">
      <div className="container">
        <p className="eyebrow social-proof__eyebrow reveal">
          Profesionales que confían en Ulpiano
        </p>
        <div className="social-proof__logos reveal">
          {logos.map((logo) => (
            <span key={logo} className="logo-proof">{logo}</span>
          ))}
        </div>
        <div className="social-proof__metric reveal">
          <div className="social-proof__number">35%</div>
          <p className="social-proof__label">de reducción en tiempo de gestión por expediente</p>
        </div>
      </div>
    </section>
  )
}
