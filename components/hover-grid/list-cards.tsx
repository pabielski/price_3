import InfoGridSection from "../InfoGridSection";
import { getTranslate } from "@/tolgee/server";
interface InfoCardData {
  title: string;
  content: string;
  imageUrl: string;
  clickable?: boolean;
  modalBoxTitle?: string;
  modalBoxContent?: string;
}
export default async function CardsList() {
  const t = await getTranslate();

  // Generowanie 4 kart z płaskich kluczy Tolgee
  const jsonData: InfoCardData[] = [];

  for (let i = 0; i < 4; i++) {
    const card: InfoCardData = {
      title: t(`cards.${i}.title`),
      content: t(`cards.${i}.content`),
      imageUrl: "",
    };

    // Sprawdź czy karta ma modal
    const modalBoxTitle = t(`cards.${i}.modalBoxTitle`);
    const modalBoxContent = t(`cards.${i}.modalBoxContent`);

    if (
      modalBoxTitle &&
      modalBoxContent &&
      modalBoxTitle !== `cards.${i}.modalBoxTitle`
    ) {
      card.clickable = true;
      card.modalBoxTitle = modalBoxTitle;
      card.modalBoxContent = modalBoxContent;
    }

    jsonData.push(card);
  }

  return <InfoGridSection jsonData={jsonData} />;
}
