import Image from "next/image";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { getTranslate } from "@/tolgee/server";

export default async function InfoSection() {
  const t = await getTranslate();

  return (
    <section
      id="info-section"
      className="bg-gradient-to-r from-[#09203d] to-[#020020] py-12 md:py-24"
    >
      <div className="info max-w-[1300px] 3xl:max-w-screen-2xl mx-auto px-6 md:px-12 text-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Tekst */}
          <div className="md:col-span-6 self-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-poppins text-center md:text-left">
              {t("title")}
            </h2>
            <p className="my-8 text-center md:text-left">
              {t("info-content-1")}
            </p>
            <p className="my-8 text-center md:text-left">
              {t("info-content-2")}
            </p>
            <SecondaryButton url={t("Gallery_Link")}>
              {t("Gallery_Button")}
            </SecondaryButton>
          </div>

          {/* Obraz */}
          <div className="md:col-span-6 self-center">
            <Image
              src="https://placehold.co/900x600/png"
              alt="info"
              width={900}
              height={600}
              className="object-contain mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
