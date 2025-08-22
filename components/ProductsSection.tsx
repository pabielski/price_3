import { getTranslate } from "@/tolgee/server";
import { Chip } from "@heroui/react";
import Image from "next/image";
import { CheckCircle2, CircleCheck } from "lucide-react";

export default async function ProductsSection() {
  const t = await getTranslate();

  return (
    <div className="bg-white">
      {/* LITE Section - Text on left, image on right */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Section - Left */}
            <div>
              <div className="flex items-center mb-4">
                <Chip color="primary" variant="solid" className="mr-4">
                  LITE
                </Chip>
                <h2 className="text-4xl font-bold text-gray-900">
                  {t("ProductsSection.lite.title")}
                </h2>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>{t("ProductsSection.lite.description.bold")}</strong>{" "}
                {t("ProductsSection.lite.description")}
              </p>

              <div className="space-y-6">
                <div>
                  <ul className="space-y-6">
                    <li className="flex items-center text-gray-600">
                      <CircleCheck className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>
                        <strong>
                          {t(
                            "ProductsSection.lite.features.recommendations.items.bold.0"
                          )}{" "}
                        </strong>
                        {t(
                          "ProductsSection.lite.features.recommendations.items.0"
                        )}
                      </span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>
                        <strong>
                          {t(
                            "ProductsSection.lite.features.recommendations.items.bold.1"
                          )}{" "}
                        </strong>
                        {t(
                          "ProductsSection.lite.features.recommendations.items.1"
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Section - Right */}
            <div>
              <Image
                src="/price-recommender-lite.webp"
                alt="Lite"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRO Section - Image on left, text on right */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section - Left */}
            <div className="order-2 lg:order-1">
              <Image
                src="/price-recommender-pro.webp"
                alt="Pro"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Text Section - Right */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Chip color="warning" variant="solid" className="mr-4">
                  PRO
                </Chip>
                <h2 className="text-4xl font-bold text-gray-900">
                  {t("ProductsSection.pro.title")}
                </h2>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>{t("ProductsSection.pro.description.bold")}</strong>{" "}
                {t("ProductsSection.pro.description")}
              </p>

              <div className="space-y-6">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span>
                        <strong>
                          {t(
                            "ProductsSection.pro.features.market.items.bold.0"
                          )}{" "}
                        </strong>
                        {t("ProductsSection.pro.features.market.items.0")}
                      </span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span>
                        <strong>
                          {t(
                            "ProductsSection.pro.features.market.items.bold.1"
                          )}{" "}
                        </strong>
                        {t("ProductsSection.pro.features.market.items.1")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
