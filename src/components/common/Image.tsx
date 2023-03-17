import { cva } from "class-variance-authority";
import clsx from "clsx";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { ComponentPropsWithoutRef } from "react";

export interface ImageProps extends ComponentPropsWithoutRef<"figure"> {
  nextImageConfig?: Omit<NextImageProps, "src" | "alt">;
  src: string;
  alt?: string;
}

const figureClass = cva(clsx("relative"));

const Image = (props: ImageProps) => {
  const { src, alt = "alt", className, nextImageConfig, ...rest } = props;
  return (
    <figure className={figureClass({ className })} {...rest}>
      <NextImage src={src} alt={alt} fill {...nextImageConfig} />
    </figure>
  );
};

export default Image;
