import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import emailjs from "@emailjs/browser";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS is not configured. Please create a `.env` file and set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY."
        );
      }

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };

      try {
        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );

        if (response.status !== 200) {
          throw new Error(response.text || "Failed to send email");
        }

        return response;
      } catch (error: any) {
        console.error("EmailJS Error:", error);
        throw new Error(error?.text || error?.message || "An unexpected error occurred while sending the email.");
      }
    },
  });
}
