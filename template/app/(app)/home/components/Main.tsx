/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useComponentContext } from "../context/context";
import {
  Button,
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardFooter,
} from "@vivekkv178/library";
import { MainItem } from "../utils/types";
import { useAppDispatch } from "@/lib/reduxHooks";

type MainProps = {
  mainItem: MainItem;
};

const MainComp: React.FC<MainProps> = ({ mainItem }) => {
  const { commonState } = useComponentContext();
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <img
            className="h-8 w-8 text-muted-foreground tw-rounded-full"
            src={mainItem?.image_url}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{mainItem?.name}</div>
        <p className="text-xs text-muted-foreground">{`$${mainItem?.price}`}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2">
        {/* Quantity Selector */}
        <div className="flex items-center tw-gap-x-2">
          <Button onClick={() => {}} variant="outline">
            -
          </Button>
          <span>{1}</span>
          <Button onClick={() => {}} variant="outline">
            +
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MainComp;
