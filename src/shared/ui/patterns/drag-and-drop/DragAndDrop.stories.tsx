import type { Meta, StoryObj } from "@storybook/react-vite";
import { DraggableItem, DropZone } from "@/shared/ui/patterns/drag-and-drop/DragAndDrop";

const meta = {
  title: "Patterns/Gestures/Drag and Drop",
  component: DropZone,
  args: { label: "보관함", onDropItem: () => {} },
} satisfies Meta<typeof DropZone>;
export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyZone: Story = {
  args: { children: <p className="text-sm text-slate-500">여기에 끌어다 놓기</p> },
};
export const WithItem: Story = {
  args: {
    children: (
      <DraggableItem id="report" moveLabel="보고서를 보관함으로 옮기기" onMove={() => {}}>
        보고서
      </DraggableItem>
    ),
  },
};
