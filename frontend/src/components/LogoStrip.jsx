const partners = [
  'NORTHWIND', 'HELIX', 'LUMINA', 'OCTAVE', 'PARALLAX', 'MERIDIAN',
];

export default function LogoStrip() {
  return (
    <section className="bg-brand-white py-10 border-y border-brand-lineSoft">
      <div className="container-wide">
        <p className="text-center text-eyebrow uppercase text-brand-muted mb-6">
          Trusted by teams at
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center">
          {partners.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center h-9 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition"
            >
              <span className="font-display font-bold tracking-[0.18em] text-[0.95rem] text-brand-ink">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
