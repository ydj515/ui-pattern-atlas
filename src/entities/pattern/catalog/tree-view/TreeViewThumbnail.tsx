import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function Icon({ folder }: { readonly folder: boolean }) {
  return (
    <span
      className={`size-[6px] rounded-[1px] ${folder ? "bg-amber-400" : "border border-slate-400"}`}
    />
  );
}

function Row({
  top,
  level,
  label,
  folder,
  open = false,
  className = "",
}: {
  readonly top: number;
  readonly level: number;
  readonly label: string;
  readonly folder: boolean;
  readonly open?: boolean;
  readonly className?: string;
}) {
  return (
    <p
      className={`absolute flex h-[12px] w-[104px] items-center gap-[3px] rounded-[3px] text-[6px] ${className}`}
      style={{ top, left: 4, paddingLeft: 3 + (level - 1) * 10 }}
    >
      <span className={`w-[4px] text-[5px] text-slate-400 ${open ? "rotate-90" : ""}`}>
        {folder ? "›" : ""}
      </span>
      <Icon folder={folder} />
      {label}
    </p>
  );
}

/** Same files as TreeViewDemo: open 아이콘 → select 홈.svg. */
export function TreeViewThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[32px] h-[86px] w-[112px] rounded-md border border-slate-200">
        <Row top={3} level={1} label="디자인" folder open />
        <Row top={15} level={2} label="로고.svg" folder={false} />
        <Row
          top={15}
          level={2}
          label="로고.svg"
          folder={false}
          className="thumb-anim thumb-tv-logo bg-blue-50 font-medium text-blue-900 opacity-0"
        />
        <Row top={27} level={2} label="아이콘" folder />
        <div className="thumb-anim thumb-tv-kids">
          <Row top={39} level={3} label="홈.svg" folder={false} />
          <Row
            top={39}
            level={3}
            label="홈.svg"
            folder={false}
            className="thumb-anim thumb-tv-home bg-blue-50 font-medium text-blue-900"
          />
          <Row top={51} level={3} label="검색.svg" folder={false} />
        </div>
        <div className="thumb-anim thumb-tv-push" style={{ transform: "translateY(24px)" }}>
          <Row top={39} level={1} label="문서" folder />
          <Row top={51} level={1} label="README.md" folder={false} />
        </div>
      </div>
      <p className="thumb-anim thumb-tv-logo absolute top-[96px] left-[32px] text-[6px] text-slate-500 opacity-0">
        열린 파일: 로고.svg
      </p>
      <p className="thumb-anim thumb-tv-home absolute top-[96px] left-[32px] text-[6px] text-slate-500">
        열린 파일: 홈.svg
      </p>
      <ThumbCursor motion="thumb-tv-cursor" />
    </ThumbStage>
  );
}
