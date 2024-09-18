import NextImage, { ImageProps as NextImageProps } from "next/image";

export interface ImageProps extends NextImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
}

const Image = (props: ImageProps) => {
  return (
    <>
      <NextImage
        {...props}
        src={`/aboutme${props.src}`}
        width={props.width}
        height={props.height}
        alt={props.alt}
        className="mx-auto !mb-2 rounded-lg"
      />
      {props.description && (
        <p className="text-center text-xs text-primary/60">
          {props.description}
        </p>
      )}
    </>
  );
};

export default Image;
