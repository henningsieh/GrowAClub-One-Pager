import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface GuaranteeCardProps {
  Icon: LucideIcon;
  title: string;
  content: string;
}

const BenefitCard: React.FC<GuaranteeCardProps> = ({
  Icon,
  title,
  content,
}) => {
  return (
    <Card className="bg-background">
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

export default BenefitCard;
