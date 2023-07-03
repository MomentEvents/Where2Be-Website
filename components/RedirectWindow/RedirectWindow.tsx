"use client";
import React, { useEffect } from "react";

type RedirectWindowProps = {
  url: string;
};
export default function RedirectWindow(props: RedirectWindowProps) {
  useEffect(() => {
    window.location.assign(props.url);
  }, []);
  return (
    <div className="download">
      Redirecting. Still waiting? Click <a href={props.url}>here.</a>
    </div>
  );
}
