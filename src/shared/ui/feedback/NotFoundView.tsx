import { Link } from "react-router";
import { buttonClassName } from "@/shared/ui/primitives/Button";

export function NotFoundView() {
  return (
    <div className="mx-auto max-w-page px-4 py-24 sm:px-6">
      <title>페이지를 찾을 수 없어요 · UI Pattern Atlas</title>
      <h1 className="font-serif text-display font-bold">페이지를 찾을 수 없어요</h1>
      <p className="mt-3 max-w-md text-body text-graphite">
        주소가 바뀌었거나 아직 준비되지 않은 패턴입니다. 목록에서 다시 찾아보세요.
      </p>
      <Link to="/" className={`mt-8 ${buttonClassName("primary")}`}>
        패턴 목록으로
      </Link>
    </div>
  );
}
