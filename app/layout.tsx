
import "../styles/globals.scss"
import "../styles/app.scss"
import { FC } from "react"
import clsx from "clsx"

import ProvidersWrapper from "./ProvidersWrapper";
import Header from "../components/Header";

type LayoutProps = {
  children?: React.ReactNode
  className?: string
}

const RootLayout: FC<LayoutProps> = ({ children, className }) => {
  return (

    <html lang="en">
      <body>
        <div className={clsx("min-h-screen max-w-full overflow-x-hidden", className)}>
          <div className="container mx-auto my-24">
            <ProvidersWrapper>
              <Header />
              {children}
            </ProvidersWrapper>
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout