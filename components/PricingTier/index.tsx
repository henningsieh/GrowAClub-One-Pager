import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Euro, Users } from "lucide-react";
import { Badge } from "../ui/badge";

interface PricingTierProps {
  title: string;
  price: string;
  memberCountMin: number;
  memberCountMax: number;
  isPopular?: boolean; // Optional prop
}

export const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  memberCountMin,
  memberCountMax,
  isPopular = false,
}) => (
  <Card
    className={`flex flex-col justify-between dark:bg-stone-950 ${isPopular ? "border-2 border-green-500 dark:border-yellow-500" : ""}`}
  >
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-2xl font-bold text-green-600 dark:text-yellow-500">
          {title}
        </CardTitle>
        {isPopular && (
          <Badge className="-mr-2 -mt-8 bg-green-400 text-gray-800 hover:bg-green-500 dark:bg-green-600 dark:text-yellow-950 dark:hover:bg-green-700">
            Beliebt
          </Badge>
        )}
      </div>
      <CardDescription>
        Für Anbauvereine mit {memberCountMin}-{memberCountMax} Mitgliedern
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-left text-sm text-red-600">ab dem 13. Monat</p>
      <div className="my-4">
        <span className="text-6xl font-bold">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">/Monat</span>
      </div>
      <ul className="mb-6 space-y-2">
        <li className="flex items-center">
          <Euro className="mr-2 h-4 w-4 text-green-500 dark:text-yellow-500" />
          <span>
            Max.{" "}
            {(parseFloat(price.replace("€", "")) / memberCountMin)
              .toFixed(2)
              .replace(/\./, ",")}{" "}
            € / Mitglied
          </span>
        </li>
        <li className="flex items-center">
          <Users className="mr-2 h-4 w-4 text-green-500 dark:text-yellow-500" />
          <span>Bis zu {memberCountMax} Mitglieder</span>
        </li>

        <li className="flex items-center">
          <Check className="mr-2 h-4 w-4 text-green-500 dark:text-yellow-500" />
          <span>Alle Funktionen inklusive</span>
        </li>
      </ul>
    </CardContent>
    <div className="p-6 pt-0">
      <Button
        className={`w-full px-8 py-4 text-lg text-white ${isPopular ? "bg-green-700 hover:bg-green-800 dark:bg-yellow-600 dark:hover:bg-yellow-500" : "border-green-700 text-green-700 dark:border-yellow-500 dark:text-yellow-500"}`}
        variant={isPopular ? "default" : "outline"}
      >
        Jetzt abonnieren
      </Button>
    </div>
  </Card>
);
