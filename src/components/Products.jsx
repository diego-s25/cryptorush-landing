// src/components/Products.jsx
// NOTE: Uses only the customer-provided titles. No descriptions are added.

const ITEMS = [
  // Keep exactly what you already have (titles/kinds from the “new bible” doc)
  // Examples:
  {
    kind: "Producto",
    title: "WRush Wallet",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Ficons%2FWRush%20Wallet.svg?alt=media&token=592de6df-18bc-4489-808b-d01484b1e5c3",
  },
  {
    kind: "Producto",
    title: "Tokenización de Activos Físicos",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Ficons%2FTokenizacio%CC%81n.svg?alt=media&token=9b71b92f-f8c3-43b7-bb9b-c58b9c2c8ed3",
  },
  {
    kind: "Servicio",
    title: "SaaS (Software as a Service)",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Ficons%2FSaaS.svg?alt=media&token=8a0996fa-63f4-4194-b8c4-6eb810f9eca0",
  },
  {
    kind: "Servicio",
    title: "Desarrollo y posicionamiento de productos blockchain",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Ficons%2FDesarrollo.svg?alt=media&token=bfb03208-b44b-46b1-8bc6-de41c9c979bb",
  },
  {
    kind: "Servicio",
    title: "Asesoria y consultoria técnica de productos blockchain",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Ficons%2Fconsultoria%20te%CC%81cnica.svg?alt=media&token=33f01354-4751-495a-906d-f1c0fd3a6424",
  },
  {
    kind: "Servicio",
    title: "Asesoria y consultoria legal de productos blockchain",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Ficons%2Fconsultoria%20legal.svg?alt=media&token=3171c5b5-e0f2-4a0f-8407-c5d92b1d4ed4",
  },
  {
    kind: "Servicio",
    title: "Asesoria y consultoria de mercadeo de productos blockchain",
    icon: "https://firebasestorage.googleapis.com/v0/b/spranger-ventures.appspot.com/o/CryptoRush%2Ficons%2Fconsultoria%20de%20mercadeo.svg?alt=media&token=a62baee3-80b2-466e-855d-f54c77737f04",
  },
];

export default function Products() {
  return (
    <section id="products" className="container">
      <h2 className="heading-lg">Productos &amp; Servicios</h2>

      <div className="products">
        {ITEMS.map((item) => (
          <div key={item.title} className="product-card">
            <img
              src={item.icon}
              alt={item.title}
              className="product-card__icon"
            />
            <span className="product-kind">{item.kind}</span>
            <h3 className="product-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
