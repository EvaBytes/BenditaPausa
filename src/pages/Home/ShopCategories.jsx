import React, { useRef } from "react";
import { Wrapper, ScrollContainer, CategoryCard, Arrow } from "../../styles/ShopCategoriesStyles.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { title: "Lanas", image: "src/assets/Lana.jpg", link: "/tienda/lanas" },
  { title: "Kits", image: "src/assets/Kits.jpg", link: "/tienda/kits" },
  { title: "Accesorios", image: "src/assets/Accesorios.jpg", link: "/tienda/accesorios" },
  { title: "Textil", image: "src/assets/Textil.jpg", link: "/tienda/textil" },
  { title: "Vivir la lana", image: "src/assets/vivir-la-lana.jpg", link: "/tienda/vivir-la-lana" },
  { title: "Algodón", image: "src/assets/Algodón.jpg", link: "/tienda/algodon" },
];

const ShopCategoriesSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Wrapper>
      <h2>Nuestros productos</h2>

      <Arrow className="left" onClick={() => scroll("left")}>
        <ChevronLeft size={28} />
      </Arrow>

      <ScrollContainer ref={scrollRef}>
        {categories.map((cat) => (
          <CategoryCard href={cat.link} key={cat.title}>
            <div className="card-inner">
                <div className="overlay" />
                <img src={cat.image} alt={cat.title} />
                <h3>{cat.title}</h3>
            </div>
          </CategoryCard>
        ))}
      </ScrollContainer>

      <Arrow className="right" onClick={() => scroll("right")}>
        <ChevronRight size={28} />
      </Arrow>
    </Wrapper>
  );
};

export { ShopCategoriesSection };
