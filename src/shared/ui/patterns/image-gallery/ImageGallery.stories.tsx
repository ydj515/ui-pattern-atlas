import type { Meta, StoryObj } from "@storybook/react-vite";

import { ImageGallery } from "@/shared/ui/patterns/image-gallery/ImageGallery";

const images = ["bg-rose-300", "bg-amber-300", "bg-sky-300"].map((tone, index) => ({
  id: tone,
  alt: `상품 사진 ${index + 1}`,
  render: () => <div className={`size-full ${tone}`} />,
}));

const meta = {
  title: "Patterns/Cards and Gallery/Image Gallery",
  component: ImageGallery,
  args: { label: "상품 사진", images },
  argTypes: { images: { control: false } },
  decorators: [(Story) => <div className="w-60">{Story()}</div>],
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreePhotos: Story = {};
export const Renamed: Story = { args: { label: "후기 사진" } };
