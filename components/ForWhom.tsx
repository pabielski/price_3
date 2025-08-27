import Image from "next/image";
import { getTranslate } from "@/tolgee/server";
import { Button } from "@heroui/button";

export default async function ForWhom() {
  const t = await getTranslate();

  const forWhomData = [
    {
      id: 1,
      title: t("ForWhom.cards.0.title"),
      photo: "/competitor-analysis.webp",
      items: [
        t("ForWhom.cards.0.items.0"),
        t("ForWhom.cards.0.items.1"),
        t("ForWhom.cards.0.items.2"),
        t("ForWhom.cards.0.items.3"),
        t("ForWhom.cards.0.items.4"),
      ],
    },
    {
      id: 2,
      title: t("ForWhom.cards.1.title"),
      photo: "/price-recommendations.webp",
      items: [
        t("ForWhom.cards.1.items.0"),
        t("ForWhom.cards.1.items.1"),
        t("ForWhom.cards.1.items.2"),
        t("ForWhom.cards.1.items.3"),
        t("ForWhom.cards.1.items.4"),
      ],
    },
    {
      id: 3,
      title: t("ForWhom.cards.2.title"),
      photo: "/advanced-analytics.webp",
      items: [
        t("ForWhom.cards.2.items.0"),
        t("ForWhom.cards.2.items.1"),
        t("ForWhom.cards.2.items.2"),
        t("ForWhom.cards.2.items.3"),
        t("ForWhom.cards.2.items.4"),
      ],
    },
  ];

  return (
    <section id="dla-kogo" className="py-16 px-5">
      <div className="container mx-auto max-w-[1350px] ">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-poppins mb-4 text-center">
            {t("ForWhom.title")}
          </h2>

          <p className="text-base text-muted-foreground max-w-4xl mx-auto mt-4">
            {t("ForWhom.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {forWhomData.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border overflow-hidden backdrop-blur-sm rounded-xl hover:shadow-md transition-all duration-300 shadow-sm "
            >
              <div className="relative h-64">
                <Image
                  src={item.photo}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.items.map((listItem, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-sm bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-10">
          <Button className="bg-kwgreen text-white" color="success">
            {t("ForWhom.videoButton")}
          </Button>
          <Button className="bg-kwgreen text-white" color="success">
            {t("ForWhom.functionButton")}
          </Button>
        </div>
      </div>
    </section>
  );
}
