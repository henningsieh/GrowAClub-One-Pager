import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Adjust this import according to your project structure
import { LucideIcon } from "lucide-react"; // Assuming you're using lucide-react

// Define the props for the reusable InfoCard
interface InfoCardProps {
  Icon: LucideIcon; // The icon component
  title: string; // Title of the card
  content: string; // Content/body of the card
}

const InfoCard: React.FC<InfoCardProps> = ({ Icon, title, content }) => {
  return (
    <Card className="bg-zinc-100 dark:bg-zinc-800">
      <CardHeader>
        <Icon className="mx-auto mb-2 h-10 w-10 text-primary" />
        <CardTitle className="text-center text-3xl text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">{content}</CardContent>
    </Card>
  );
};

export default InfoCard;
