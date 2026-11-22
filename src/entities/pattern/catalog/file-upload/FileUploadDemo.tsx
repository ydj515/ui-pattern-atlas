import { useState } from "react";

import { FileUpload } from "@/shared/ui/patterns/file-upload/FileUpload";

export function FileUploadDemo() {
  const [files, setFiles] = useState<readonly File[]>([]);

  return (
    <div className="w-full max-w-xs space-y-2">
      <FileUpload
        label="증빙 사진"
        accept="image/*"
        maxSizeMb={5}
        hint="이미지 파일, 5MB 이하"
        dropLabel="여기로 끌어다 놓거나"
        browseLabel="파일 고르기"
        rejectText={(file) => `${file.name}은(는) 이미지가 아니거나 5MB를 넘어요`}
        files={files}
        onChange={setFiles}
      />
      <button
        type="button"
        onClick={() =>
          setFiles((current) => [
            ...current,
            new File([new Uint8Array(1_200_000)], "영수증.jpg", { type: "image/jpeg" }),
          ])
        }
        className="text-xs text-slate-500 underline underline-offset-2"
      >
        예시 사진 넣기
      </button>
    </div>
  );
}
