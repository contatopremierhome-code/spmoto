import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const productImages: ImagePlaceholder[] = data.productImages;
export const testimonialAvatars: ImagePlaceholder[] = data.testimonialAvatars;

// Keep the old export for compatibility if anything uses it, although it seems not.
export const PlaceHolderImages: ImagePlaceholder[] = [...data.productImages, ...data.testimonialAvatars];
