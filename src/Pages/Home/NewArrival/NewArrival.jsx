import { useEffect, useState } from "react";

// 🔹 Yulduzlar chiqarish funksiyasi
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex gap-1 text-yellow-400 text-lg">
      {Array(fullStars)
        .fill("★")
        .map((s, i) => (
          <span key={"full" + i}>{s}</span>
        ))}
      {halfStar && <span>☆</span>}
      {Array(emptyStars)
        .fill("☆")
        .map((s, i) => (
          <span key={"empty" + i}>{s}</span>
        ))}
    </div>
  );
};

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div>
      <div className="">
        <h1 className="title font-bold max-[650px]:text-4xl max-[450px]:text-3xl text-[48px] text-center">
          NEW ARRIVALS
        </h1>
      </div>
      <div className="body py-13">
        <div className="cards max-[1330px]:grid-cols-3 max-[1000px]:grid-cols-2 grid grid-cols-4 w-fit m-auto max-[680px]:gap-10 gap-5 px-4 max-[680px]:w-full max-[680px]:overflow-x-auto max-[680px]:flex max-[680px]:grid-cols-none">
          {products.map((product) => (
            <div
              key={product.id}
              className="card  hover:scale-102 transition duration-300"
            >
              <div className="img bg-[#f0eeed] w-[295px] h-[295px] rounded-[20px] flex items-center justify-center overflow-hidden">
                <img
                  src={product.images[0]}
                  alt=""
                  className="h-full object-contain"
                />
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <h1 className="font-bold text-[20px]">{product.title}</h1>
                <div className="flex items-center gap-3">
                  {renderStars(product.rating)}
                  <p className="title">{product.rating}/5</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="title">${product.price}</p>
                  <p className="title font-medium text-[12px] text-[#f33] bg-[#ffebeb] w-fit py-1.5 px-2.5 rounded-[62px]">
                    -{product.discountPercentage}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center py-9">
          <button className="font-medium hover:scale-105 active:scale-100 transition duration-300 border rounded-[62px] border-[#e1e1e1] px-20 py-4">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
