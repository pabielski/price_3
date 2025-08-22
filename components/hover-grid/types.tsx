export interface InfoCardData {
  title: string;
  content: string;
  imageUrl: string;
  clickable?: boolean; // Opcjonalne pole, które określa, czy kafelek jest klikalny
  modalBoxTitle?: string; // Opcjonalny tytuł modala
  modalBoxContent?: string; // Opcjonalna treść modala
}
