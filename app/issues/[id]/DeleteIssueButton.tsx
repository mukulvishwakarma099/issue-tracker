import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <TrashIcon />
      <Link href={""}>Delete Issue</Link>
    </Button>
  );
};

export default DeleteIssueButton;
