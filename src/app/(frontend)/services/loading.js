import LoadingIndicator from "@/components/ui/loading-indicator";
import React from "react";

const LoadingComponent = () => {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <LoadingIndicator />
    </div>
  );
};

export default LoadingComponent;
