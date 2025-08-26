"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { useTranslate } from "@tolgee/react";
import { Chip } from "@heroui/chip";

// Komponent do automatycznego kolorowania słów LITE i PRO
const ColoredDescription = ({ text }: { text: string }) => {
  // Kolorujemy słowa LITE i PRO używając prostego replace
  const coloredText = text
    .replace(
      /LITE/g,
      '<span style="color: #2563eb; font-weight: 600;">LITE</span>'
    )
    .replace(
      /PRO/g,
      '<span style="color: #ea580c; font-weight: 600;">PRO</span>'
    );

  return <span dangerouslySetInnerHTML={{ __html: coloredText }} />;
};

export default function ComparisonTable() {
  const { t } = useTranslate();

  const features = [
    {
      name: t("ComparisonTable.features.competition_data"),
      lite: t("ComparisonTable.values.one_hotel"),
      pro: t("ComparisonTable.values.five_hotels"),
    },
    {
      name: t("ComparisonTable.features.reports_analytics"),
      lite: t("ComparisonTable.values.basic"),
      pro: t("ComparisonTable.values.advanced"),
    },
    {
      name: t("ComparisonTable.features.price_recommendations"),
      lite: t("ComparisonTable.values.daily"),
      pro: t("ComparisonTable.values.realtime"),
    },
  ];

  return (
    <section id="features-tabs-section" className="py-24 bg-white sm:py-32">
      <div className="mx-auto  px-6 lg:px-8">
        {/* Features Table */}
        <div className="mt-16">
          <div className="max-w-[1300px] mx-auto">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-poppins mb-4 text-center">
              {t("ComparisonTable.title")}
            </h2>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto mt-4 text-center mb-12">
              <ColoredDescription text={t("ComparisonTable.subtitle")} />
            </p>

            <div className="overflow-hidden border border-gray-200/50 bg-white ">
              <Table
                aria-label="Porównanie funkcji planów"
                classNames={{
                  base: "",
                  table: "",
                  thead: "bg-gradient-to-r from-gray-50/80 to-gray-100/80",
                  th: "text-left py-6 px-6 text-sm font-semibold text-gray-700 border-b border-gray-200/60",
                  tbody: "divide-y divide-gray-100",
                  tr: "hover:bg-gray-50/50 transition-colors duration-200",
                  td: "py-6 px-6 text-sm text-gray-600 align-middle",
                }}
                removeWrapper={false}
                radius="none"
                shadow="none"
              >
                <TableHeader>
                  <TableColumn className="w-2/5">
                    <span className="text-lg font-semibold text-gray-800">
                      {t("ComparisonTable.functions")}
                    </span>
                  </TableColumn>
                  <TableColumn className="w-1/3 text-center">
                    <div className="flex justify-center">
                      <Chip
                        variant="flat"
                        color="primary"
                        className="text-sm font-medium px-4 py-2"
                      >
                        {t("ComparisonTable.lite.title")}
                      </Chip>
                    </div>
                  </TableColumn>
                  <TableColumn className="w-1/3 text-center">
                    <div className="flex justify-center">
                      <Chip
                        variant="flat"
                        color="warning"
                        className="text-sm font-medium px-4 py-2"
                      >
                        {t("ComparisonTable.pro.title")}
                      </Chip>
                    </div>
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {features.map((feature, index) => (
                    <TableRow key={index} className="group">
                      <TableCell>
                        <div className="flex items-center">
                          <Chip
                            variant="flat"
                            className="text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200"
                          >
                            {feature.name}
                          </Chip>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <Chip
                            variant="light"
                            color="primary"
                            className="text-sm font-medium px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200"
                          >
                            {feature.lite}
                          </Chip>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <Chip
                            variant="light"
                            color="warning"
                            className="text-sm font-medium px-3 py-1.5 bg-orange-50 text-orange-700 border border-orange-200"
                          >
                            {feature.pro}
                          </Chip>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
