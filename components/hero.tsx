import Image from "next/image";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import { getTranslate } from "../tolgee/server";

export default async function Hero() {
  const t = await getTranslate();

  return (
    <div className="relative bg-right bg-[url('/bbblurry.svg')] bg-no-repeat  bg-cover">
      <section className="hero max-w-[1300px] 3xl:max-w-screen-2xl mx-auto px-6 lg:px-12 h-fit py-12 md:h-[600px] lg:h-[800px] max-h-[900px] flex overflow-hidden">
        <div className="md:grid grid-cols-12 gap-4 self-center items-center content-center pt-24 md:pt-0 h-full w-full">
          <div className="col-span-7 self-center lg:justify-self-start">
            <h1 className="text-5xl font-bold font-headline">{t("title")}</h1>
            {/* <p className="py-6 font-body">{t("about")}</p> */}
            <p className="py-6 font-body">{t("hero-content")}</p>
            <div className="flex gap-4">
              <PrimaryButton url={t("Global.Link1")}>
                {t("Global.PrimaryButton")}
              </PrimaryButton>
              <SecondaryButton url={t("Global.Link2")}>
                {t("Global.SecondaryButton")}
              </SecondaryButton>
            </div>
          </div>
          <div className="col-span-5 self-center justify-self-end">
            <Image
              height={300}
              width={330}
              src="/mockup-image-01.jpg"
              alt="Hero"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
