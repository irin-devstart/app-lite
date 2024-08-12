import React from "react";
import { MainTemplate, Typography } from "../../components";
import { AddCircle } from "../../components/atoms/Icon";
import QueryKeys from "../../common/constants/QueryKey";
import { getShippingComps } from "../../services/api/ShippingComps";
import { useQuery } from "@tanstack/react-query";

const ShippingCompsList = () => {
  const getShippingCompsList = useQuery({
    queryKey: [QueryKeys.shippingComps],
    keepPreviousData: true,
    queryFn: getShippingComps,
  });

  return (
    <MainTemplate
      header={
        <div className="flex gap-3 items-center">
          <Typography fontSize="text-2xl" fontWeight="extrabold">
            Shipping Comps
          </Typography>
          <AddCircle
            color="inherit"
            className="mt-2 cursor-pointer bg-blue-500 rounded-[500%]"
          />
        </div>
      }
    ></MainTemplate>
  );
};

export default ShippingCompsList;
