import type { Meta, StoryObj } from "@storybook/react-vite";

import { LanguagePicker } from "@/shared/ui/patterns/language-picker/LanguagePicker";

const meta = {
  title: "Patterns/Settings/Language Picker",
  component: LanguagePicker,
  args: {
    languages: [
      { code: "ko", native: "한국어", local: "한국어" },
      { code: "en", native: "English", local: "영어" },
      { code: "ja", native: "日本語", local: "일본어" },
    ],
    value: "ko",
    onChange: () => undefined,
  },
  decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof LanguagePicker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const English: Story = { args: { value: "en" } };
