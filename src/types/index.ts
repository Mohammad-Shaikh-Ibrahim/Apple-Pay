export interface SectionProps {
    name: string;
}
export interface CardProps {
    cardTitle?: string;
    children: React.ReactNode;
}
export interface MiniCardProps {
    miniCardTitle?: string;
    miniCardSubtitle1?: string;
    miniCardSubtitle2?: string;
    miniCardSubtitle3?: string;
    miniCardIcon?: string | React.ReactNode;
    miniCardBgColor?: string;
}