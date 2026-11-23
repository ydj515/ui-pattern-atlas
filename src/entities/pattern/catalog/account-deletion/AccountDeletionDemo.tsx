import { AccountDeletion } from "@/shared/ui/patterns/account-deletion/AccountDeletion";

export function AccountDeletionDemo() {
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <AccountDeletion
        losses={["주문 내역 3건", "적립금 2,300원", "찜한 상품 12개"]}
        reasons={["자주 쓰지 않아요", "원하는 상품이 없어요", "다른 계정을 쓰고 있어요"]}
        confirmWord="탈퇴"
        graceDays={30}
        onDelete={() => undefined}
        labels={{
          title: "회원 탈퇴",
          lose: "탈퇴하면 함께 사라져요",
          reason: "떠나는 이유(선택)",
          noReason: "고르지 않음",
          confirm: (word) => `계속하려면 '${word}'를 입력해 주세요`,
          submit: "탈퇴하기",
          done: (days) => `탈퇴를 접수했어요. ${days}일 안에 다시 로그인하면 취소돼요.`,
        }}
      />
    </section>
  );
}
