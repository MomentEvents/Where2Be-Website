import LandingPage from "@/components/MainComponents/LandingPage/LandingPage";
import { SCHOOLS } from "@/constants/schools";
import React from "react";
import { notFound } from "next/navigation";

export default function Page({ params }) {
  const schoolId = params.schoolId.toLowerCase();

  if (!SCHOOLS[schoolId]) {
    return notFound();
  }
  return (
    <LandingPage
      schoolName={SCHOOLS[schoolId].Name}
      isSchoolReleased={SCHOOLS[schoolId].IsReleased}
    />
  );
}
