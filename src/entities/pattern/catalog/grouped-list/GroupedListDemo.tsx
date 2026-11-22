import { GroupedList } from "@/shared/ui/patterns/grouped-list/GroupedList";

const GROUPS = [
  { title: "ㄱ", items: ["강민지", "고은우", "김하늘", "김서연"] },
  { title: "ㄴ", items: ["나유진", "남도현"] },
  { title: "ㅂ", items: ["박서준", "백지호", "변하린"] },
  { title: "ㅇ", items: ["윤채원", "이도윤", "임서아"] },
  { title: "ㅊ", items: ["최유나", "추민재"] },
] as const;

export function GroupedListDemo() {
  return (
    <div className="w-full max-w-xs">
      <GroupedList label="연락처" groups={GROUPS} height={260} />
    </div>
  );
}
