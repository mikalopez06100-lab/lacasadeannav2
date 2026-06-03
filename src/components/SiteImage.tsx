import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
  priority?: boolean;
};

export function SiteImage({ alt, priority, className, ...props }: Props) {
  return (
    <Image
      alt={alt}
      className={className}
      priority={priority}
      decoding="async"
      sizes={props.sizes ?? "(max-width: 980px) 90vw, 50vw"}
      {...props}
    />
  );
}
