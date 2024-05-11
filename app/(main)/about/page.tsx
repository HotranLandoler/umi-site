import Image from "next/image";
import image from "@/public/assets/umi-christmas.gif";

export default function About() {
  return (
    <div className="main-container">
      <h1 className="page-heading">关于我们</h1>
      <Image className="mb-4 rounded-lg" src={image} alt="" unoptimized />
      <p>UMi好耶😆</p>
    </div>
  );
}
