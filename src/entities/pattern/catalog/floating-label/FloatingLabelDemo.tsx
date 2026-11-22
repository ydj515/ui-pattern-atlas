import { FloatingLabelInput } from "@/shared/ui/patterns/floating-label/FloatingLabelInput";

export function FloatingLabelDemo() {
  return (
    <form className="w-full max-w-xs space-y-3" onSubmit={(event) => event.preventDefault()}>
      <FloatingLabelInput label="이메일" type="email" autoComplete="email" />
      <FloatingLabelInput label="이름" autoComplete="name" />
    </form>
  );
}
