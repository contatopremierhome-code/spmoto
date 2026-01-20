'use server';

/**
 * @fileOverview A flow to generate localized customer testimonials that highlight both product quality and fast delivery within São Paulo.
 *
 * - generateLocalizedTestimonials - A function that generates localized testimonials.
 * - GenerateLocalizedTestimonialsInput - The input type for the generateLocalizedTestimonials function.
 * - GenerateLocalizedTestimonialsOutput - The return type for the generateLocalizedTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLocalizedTestimonialsInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  deliveryLocation: z.string().describe('The delivery location, specifically São Paulo.'),
  numberOfTestimonials: z.number().describe('The number of testimonials to generate.'),
});

export type GenerateLocalizedTestimonialsInput = z.infer<typeof GenerateLocalizedTestimonialsInputSchema>;

const GenerateLocalizedTestimonialsOutputSchema = z.object({
  testimonials: z.array(z.string()).describe('An array of generated testimonials.'),
});

export type GenerateLocalizedTestimonialsOutput = z.infer<typeof GenerateLocalizedTestimonialsOutputSchema>;

export async function generateLocalizedTestimonials(
  input: GenerateLocalizedTestimonialsInput
): Promise<GenerateLocalizedTestimonialsOutput> {
  return generateLocalizedTestimonialsFlow(input);
}

const generateLocalizedTestimonialsPrompt = ai.definePrompt({
  name: 'generateLocalizedTestimonialsPrompt',
  input: {schema: GenerateLocalizedTestimonialsInputSchema},
  output: {schema: GenerateLocalizedTestimonialsOutputSchema},
  prompt: `You are a marketing expert specializing in generating customer testimonials.

  Generate {{numberOfTestimonials}} testimonials for the product {{productName}}. The testimonials should focus on the product quality and fast delivery within {{deliveryLocation}}.

  Each testimonial should sound authentic and highlight specific benefits, such as the product's durability, ease of use, and how quickly it was delivered in São Paulo.

  The testimonials should be short, engaging, and reflect the satisfaction of a customer who has received the product promptly and found it to be of high quality.

  Example testimonial:
  "Top demais! O suporte é robusto, alumínio mesmo, não é aquelas porcarias de plástico. E a entrega? Comprei de manhã e chegou de tarde aqui na ZL. Salvou meu dia de trampo." - Marcos S., Motoboy em SP.

  Return the testimonials as an array of strings.
  `,
});

const generateLocalizedTestimonialsFlow = ai.defineFlow(
  {
    name: 'generateLocalizedTestimonialsFlow',
    inputSchema: GenerateLocalizedTestimonialsInputSchema,
    outputSchema: GenerateLocalizedTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await generateLocalizedTestimonialsPrompt(input);
    return output!;
  }
);
