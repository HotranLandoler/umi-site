import Logo from "./logo";

interface EmailTemplateProps {
  verificationCode: string;
}

export default function VerificationEmail({
  verificationCode,
}: EmailTemplateProps) {
  return (
    <article>
      <h1>欢迎加入UMi</h1>
      <p>这是你的验证码：</p>
      <p>
        <strong>{verificationCode}</strong>
      </p>
    </article>
  );
}
