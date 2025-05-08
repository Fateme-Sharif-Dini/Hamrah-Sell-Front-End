import { z } from 'zod';

export const textInputSchema = z.object({
  username: z.string().min(3, 'حداقل باید ۳ حرف داشته باشد'),
});
