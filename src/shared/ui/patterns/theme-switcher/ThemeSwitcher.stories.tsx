import type { Meta, StoryObj } from "@storybook/react-vite";

import { ThemeSwitcher } from "@/shared/ui/patterns/theme-switcher/ThemeSwitcher";

const meta = {
  title: "Patterns/Settings/Theme Switcher",
  component: ThemeSwitcher,
  args: { value: "system", onChange: () => undefined, systemTheme: "light" },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
} satisfies Meta<typeof ThemeSwitcher>;
export default meta;
type Story = StoryObj<typeof meta>;

export const System: Story = {};
export const Dark: Story = { args: { value: "dark", systemTheme: "dark" } };
