"use client";
import React, { useEffect } from "react";
import "./RedirectWindow.css";

export default function RedirectWindow(props) {
  useEffect(() => {
    window.location.assign(props.url);
  }, []);

  return (
    <div className="redirect_window_container">
      <div className="download">
        <span>
          Redirecting. Still waiting? Click <a href={props.url}>here.</a>
        </span>
      </div>
    </div>
  );
}
