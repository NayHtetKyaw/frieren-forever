"use client";

import {Notification } from "@mantine/core";
import { createTheme, MantineProvider, Container } from "@mantine/core";

const theme = createTheme({
  colors: {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5c5f66",
      "#373A40",
      "#2C2E33",
      "#25262b",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },
});


export default function MantineWrapper({ children }: {children: React.ReactNode}) {
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <Notification />
        <Container>
          {children}
        </Container>
      </MantineProvider>
    </>
  );
}