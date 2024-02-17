import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const NewIssuePageLoading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="1.5rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default NewIssuePageLoading;
