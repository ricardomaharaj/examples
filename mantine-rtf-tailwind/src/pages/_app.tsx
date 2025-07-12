import type { AppProps } from "next/app"

import "~/styles/globals.css"

/* do not import mantine styles, we style it ourselves */
// import "@mantine/core/styles.css"
// import "@mantine/tiptap/styles.css"

/* our custom mantine rtf styles */
import "~/styles/mantine-rtf.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="m-4">
      <Component {...pageProps} />
    </div>
  )
}
