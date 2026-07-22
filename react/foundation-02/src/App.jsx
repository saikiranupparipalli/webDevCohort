import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Items from "./components/Items.jsx";

const products = [
  {
    id: 1,
    name: "Laptop",
    brand: "Dell",
    price: 65000,
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    brand: "Samsung",
    price: 32000,
    inStock: false,
  },
  {
    id: 3,
    name: "Headphones",
    brand: "Sony",
    price: 5500,
    inStock: true,
  },
];

function Shell({ title, children }) {
  return (
    <section>
      <h2>Reusable shell</h2>
      <p>{title}</p>
      {children}
    </section>
  );
}
// children acts like a reserved keyword in react
function App() {
  return (
    <>
      <h1>Hello from react</h1>
       <Shell title="The martian story">
        <div>
          <h2>inside the children keyword</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quis earum repellat eum aspernatur adipisci saepe eaque dolorum, laborum incidunt, quidem alias, sequi exercitationem sapiente cum eligendi. Numquam, quidem esse?</p>
        </div>
       </Shell>
      <section>
        {products.map((element) => {
          return (
           
            <Items
            key={element.id}
              brand={element.id === 1 ? "hp" : undefined}
              product={element}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
