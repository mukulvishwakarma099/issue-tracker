import React from "react";
import prisma from "@/prisma/client";
import IssueFrom from "../../_components/IssueForm";
import { notFound } from "next/navigation";

interface EditIssuePageProps {
  params: { id: string };
}
const EditIssuePage = async ({ params }: EditIssuePageProps) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return <IssueFrom issue={issue} />;
};

export default EditIssuePage;
