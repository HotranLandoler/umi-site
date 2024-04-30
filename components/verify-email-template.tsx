import Logo from "./logo";

interface EmailTemplateProps {
  verificationCode: string;
}

export default function VerificationEmail({
  verificationCode,
}: EmailTemplateProps) {
  return (
    <article className="text-center">
      <Logo className="mx-auto mb-4 max-w-32" />
      <h1>欢迎加入UMi</h1>
      <p>
        这是你的验证码：
        <strong className="text-lg font-bold">{verificationCode}</strong>
      </p>
    </article>
  );
}
