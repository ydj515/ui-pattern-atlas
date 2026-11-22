import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { ImageCropper, type Crop } from "@/shared/ui/patterns/image-cropper/ImageCropper";

const photo = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fde68a"/><circle cx="100" cy="92" r="30" fill="#fcd9b6"/><path d="M50 200c4-40 26-60 50-60s46 20 50 60Z" fill="#2563eb"/></svg>`,
)}`;

function Controlled({ zoom }: { readonly zoom: number }) {
  const [crop, setCrop] = useState<Crop>({ x: 0, y: 0, zoom });
  return <ImageCropper src={photo} value={crop} onChange={setCrop} />;
}

const meta = {
  title: "Patterns/Special Input/Image Cropper",
  component: Controlled,
  args: { zoom: 1 },
} satisfies Meta<typeof Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fit: Story = {};
export const ZoomedIn: Story = { args: { zoom: 2 } };
