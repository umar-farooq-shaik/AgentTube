"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";

export default function ClientWrapper({ children }) {
  const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
  if (!schematicPubKey) {
    throw new Error(
      "No Schematic Publishable Key found. Please add it to your .env.local file."
    );
  }
  return (
    <ClerkProvider>
      <SchematicProvider publishableKey={schematicPubKey}>
        {children}
      </SchematicProvider>
    </ClerkProvider>
  );
}