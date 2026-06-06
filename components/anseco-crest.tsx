import Image from "next/image";

export function AnsecoCrest({ className = "h-11 w-10" }: { className?: string }) {
  return (
    <Image
      src="/images/optimized/anseco-logo-transparent.png"
      alt="ANSECO crest"
      className={`${className} object-contain`}
      width={953}
      height={1040}
    />
  );
}
