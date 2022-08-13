import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import Content from "../components/Content";
const Main: React.FC = memo(() => {
  return (
    <div className="container-sm">
      <Content />
    </div>
  );
});
export default Main;
