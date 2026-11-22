import type { Meta, StoryObj } from "@storybook/react-vite";

import { BlurUpImage } from "@/shared/ui/patterns/blur-up-image/BlurUpImage";

const preview = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"><rect width="4" height="1" fill="#a5d8f0"/><rect y="1" width="4" height="1" fill="#8a94a0"/><rect y="2" width="4" height="1" fill="#2a8094"/></svg>`,
)}`;
const photo = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect width="320" height="200" fill="#bae6fd"/><path d="M0 120 70 70l50 35 60-55 70 60 70-30v50H0Z" fill="#475569"/><path d="M0 135h320v65H0Z" fill="#0e7490"/></svg>`,
)}`;

const meta = {
  title: "Patterns/Loading/Blur-up Image",
  component: BlurUpImage,
  args: {
    src: photo,
    placeholderSrc: preview,
    alt: "산 아래로 펼쳐진 바다",
    width: 320,
    height: 200,
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof BlurUpImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loaded: Story = {};
/** Before the full image URL is known: only the blurred preview shows. */
export const PreviewOnly: Story = { args: { src: undefined } };
