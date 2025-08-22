import { getTranslate } from "@/tolgee/server";
import { Chip } from "@heroui/react";
import Image from "next/image";
import { CheckCircle2, CircleCheck } from "lucide-react";

export default async function ProductsSection() {
  const t = await getTranslate();

  const productsData = [
    {
      id: 1,
      type: "LITE",
      title: t("ProductsSection.lite.title"),
      description: t("ProductsSection.lite.description"),
      photo: "/price-recommender-lite.webp",
      chipColor: "primary" as const,
      iconColor: "text-blue-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      features: [
        {
          bold: t("ProductsSection.lite.features.item1.bold"),
          normal: t("ProductsSection.lite.features.item1.normal"),
        },
        {
          bold: t("ProductsSection.lite.features.item2.bold"),
          normal: t("ProductsSection.lite.features.item2.normal"),
        },
      ],
      imageOrder: "order-2 lg:order-1",
      textOrder: "order-1 lg:order-2",
    },
    {
      id: 2,
      type: "PRO",
      title: t("ProductsSection.pro.title"),
      description: t("ProductsSection.pro.description"),
      photo: "/price-recommender-pro.webp",
      chipColor: "warning" as const,
      iconColor: "text-orange-500",
      bgColor: "bg-white",
      features: [
        {
          bold: t("ProductsSection.pro.features.item1.bold"),
          normal: t("ProductsSection.pro.features.item1.normal"),
        },
        {
          bold: t("ProductsSection.pro.features.item2.bold"),
          normal: t("ProductsSection.pro.features.item2.normal"),
        },
      ],
      imageOrder: "order-2 lg:order-1",
      textOrder: "order-1 lg:order-2",
    },
  ];

  return (
    <div className="bg-white">
      {productsData.map((product, index) => (
        <section key={product.id} className={`py-24 ${product.bgColor}`}>
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Section */}
              <div className={index === 0 ? "" : product.textOrder}>
                <div className="flex items-center mb-4">
                  <Chip
                    color={product.chipColor}
                    variant="solid"
                    className="mr-4"
                  >
                    {product.type}
                  </Chip>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {product.title}
                  </h2>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <ul className="space-y-6">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          {index === 0 ? (
                            <CircleCheck
                              className={`w-5 h-5 ${product.iconColor} mr-3 flex-shrink-0`}
                            />
                          ) : (
                            <CheckCircle2
                              className={`w-5 h-5 ${product.iconColor} mr-3 flex-shrink-0`}
                            />
                          )}
                          <span>
                            <strong>{feature.bold}</strong> {feature.normal}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className={index === 0 ? "" : product.imageOrder}>
                <Image
                  src={product.photo}
                  alt={product.type}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
