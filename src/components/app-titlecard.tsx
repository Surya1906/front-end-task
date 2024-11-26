import { Button } from "./ui/button";
import { SquarePlus } from "lucide-react";

type TitleCardProps = {
  title: string;
  subTitle?: string;
};

const AppTitleCard = ({ title, subTitle }: TitleCardProps) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">
          {subTitle ? subTitle : ""}
        </p>
      </div>
      <div>
        <Button className="w-full h-full">
          <SquarePlus />
          Create
        </Button>
      </div>
    </div>
  );
};

export default AppTitleCard;
