import { Link } from "react-router";
import { useMessages } from "@/shared/i18n/messages";
import { buttonClassName } from "@/shared/ui/primitives/Button";

export function NotFoundView() {
  const messages = useMessages();
  return (
    <div className="mx-auto max-w-page px-4 py-24 sm:px-6">
      <title>{`${messages.notFound.title} · UI Pattern Atlas`}</title>
      <h1 className="font-serif text-display font-bold">{messages.notFound.title}</h1>
      <p className="mt-3 max-w-md text-body text-graphite">{messages.notFound.body}</p>
      <Link to="/" className={`mt-8 ${buttonClassName("primary")}`}>
        {messages.notFound.back}
      </Link>
    </div>
  );
}
