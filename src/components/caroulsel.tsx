import Link from "next/link";
import { GridTileImage } from "./grid/tile";

export async function Caroulsel() {
  const products = [
    {
      handle: "PratoPrime",
      title: "Prato Prime",
      priceRange: {
        maxVariantPrice: {
          amount: "29.99",
          currencyCode: "BRL",
        },
      },
      featuredImage: {
        url: "/screenshots/1.png",
      },
    },
    {
      handle: "MustacheBarber",
      title: "Mustache Barber",
      priceRange: {
        maxVariantPrice: {
          amount: "49.99",
          currencyCode: "USD",
        },
      },
      featuredImage: {
        url: "/screenshots/2.png",
      },
    },
    {
      handle: "EasyBox",
      title: "EasyBox",
      priceRange: {
        maxVariantPrice: {
          amount: "19.99",
          currencyCode: "USD",
        },
      },
      featuredImage: {
        url: "/screenshots/3.png",
      },
    },
  ];

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <>
      <div className="w-full overflow-x-auto pb-6 pt-1 [&::-webkit-scrollbar]:hidden">
        <ul className="flex animate-carousel gap-4 ">
          {carouselProducts.map((product, i) => (
            <li
              key={`${product.handle}${i}`}
              className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
            >
              <Link
                href={`https://${product.handle}.josielcardoso.com.br`}
                className="relative h-full w-full"
              >
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode:
                      product.priceRange.maxVariantPrice.currencyCode,
                  }}
                  src={product.featuredImage.url}
                  fill
                  sizes="(min-width: 1024px), 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
