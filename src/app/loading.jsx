import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner
        size="lg"
        color="primary"
        label="Loading cars..."
      />
    </div>
  );
};

export default Loading;