import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export function ContentCard({
  href,
  title,
  excerpt,
  image,
  meta,
  badge
}: {
  href: string;
  title: string;
  excerpt: string;
  image: string;
  meta: string;
  badge?: string;
}) {
  return (
    <Card className="overflow-hidden">
      <Link href={href} className="block">
        <div className="relative aspect-[16/10]">
          <Image src={image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
        </div>
        <CardContent className="pt-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {badge ? <Badge>{badge}</Badge> : null}
            <span>{meta.includes("-") ? formatDate(meta) : meta}</span>
          </div>
          <h2 className="mt-3 text-xl font-semibold leading-tight">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  );
}
