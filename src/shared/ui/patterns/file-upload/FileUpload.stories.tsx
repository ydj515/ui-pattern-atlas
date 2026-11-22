import type { Meta, StoryObj } from "@storybook/react-vite";

import { FileUpload } from "@/shared/ui/patterns/file-upload/FileUpload";

const meta = {
  title: "Patterns/Special Input/File Upload",
  component: FileUpload,
  args: {
    label: "증빙 사진",
    accept: "image/*",
    hint: "이미지 파일, 5MB 이하",
    files: [],
    onChange: () => {},
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const WithFiles: Story = {
  args: { files: [new File([new Uint8Array(1_200_000)], "영수증.jpg", { type: "image/jpeg" })] },
};
