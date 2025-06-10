export interface SectionProps {
    name: string;
}
export interface CardItem {
    miniCard: React.ReactNode;
    caption: string;
}
export interface CardProps {
    cardTitle: string;
    items: CardItem[];
}
export interface MiniCardProps {
    miniCardTitle?: string;
    miniCardSubtitle1?: string;
    miniCardSubtitle2?: string;
    miniCardSubtitle3?: string;
    miniCardIcon?: string | React.ReactNode;
    miniCardModeColor?: string;
    miniCardPrice?:string;
}
export interface StyleMode {
  bg: string;
  text: string;
  subtitle: string;
  iconColor: string;
  cardIconBg: string;
}
export interface PayCardProps{
    cardMode: string;
    children?: string | React.ReactNode;
}
export interface PayCardMode{
    bg: string;
    iconColor: string;
}