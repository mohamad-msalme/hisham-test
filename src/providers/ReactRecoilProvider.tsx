import React from "react";
import { RecoilRoot } from "recoil";

export const ReactRecoilProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => <RecoilRoot>{children}</RecoilRoot>;
