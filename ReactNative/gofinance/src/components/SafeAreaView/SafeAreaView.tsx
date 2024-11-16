import { ReactNode } from "react";
import { CustomSafeAreaView } from "./styles";

interface Props {
  children: ReactNode
}

export function SafeAreaView({ children }: Props) {
  return (
    <CustomSafeAreaView>
      {children}
    </CustomSafeAreaView>
  )
}