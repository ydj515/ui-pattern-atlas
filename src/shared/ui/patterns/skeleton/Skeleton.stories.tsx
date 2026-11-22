import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton, SkeletonRegion } from "./Skeleton";

function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3.5 w-28" />
        <Skeleton className="h-3 w-44" />
      </div>
    </div>
  );
}

const meta = {
  title: "Patterns/Status/Skeleton",
  component: SkeletonRegion,
  args: {
    loading: true,
    loadingLabel: "프로필을 불러오는 중이에요",
    fallback: <ProfileSkeleton />,
    children: (
      <div>
        <p className="text-sm font-semibold">김하늘</p>
        <p className="text-xs text-slate-500">프로덕트 디자이너 · 서울</p>
      </div>
    ),
  },
  argTypes: { fallback: { control: false }, children: { control: false } },
  decorators: [
    (Story) => (
      <div className="w-80 rounded-xl border border-slate-200 bg-white p-4">{Story()}</div>
    ),
  ],
} satisfies Meta<typeof SkeletonRegion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {};
export const Loaded: Story = { args: { loading: false } };
