import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import React from "react";

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

let components = {
  Image: RoundedImage,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
