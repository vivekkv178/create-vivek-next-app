import { useEffect, useState } from "react";
import { toast } from "@vivekkv178/library";
import useApi from "@/lib/useApi";
import { BE_ROUTES, HttpMethod } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { MainItem } from "../utils/types";

const useCommonState = () => {
  const [listLoading, setListLoading] = useState(false);
  const dispatch = useAppDispatch();

  const authState = useAppSelector((state) => state.auth);

  const [mainItems, setMainItems] = useState<MainItem[]>([]);
  const api = useApi();

  const listData = async () => {
    try {
      setListLoading(true);
      const data = await api.callApi({
        url: BE_ROUTES.GET_ORGS,
        method: HttpMethod.GET,
      });
      setMainItems(data);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while fetching.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setListLoading(false);
    }
  };

  useEffect(() => {
    if (authState?.user) listData();
  }, [authState?.user]);

  const refreshHandler = () => {
    listData();
  };

  return {
    listLoading,
    mainItems,
    refreshHandler,
  };
};

export default useCommonState;
