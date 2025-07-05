// src/components/ContactForm.tsx

"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    console.log(data)
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full max-w-lg mx-auto p-6 bg-white rounded-lg border border-gray-100 shadow-sm"> {/* Reduced space-y, padding, rounded corners, and shadow */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">Get in Touch</h2> {/* Slightly smaller title */}
      <div>
        <Input
          type="text"
          placeholder="Your Name"
          {...register("name")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors" // Reduced padding, font size, ring size
        />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>  
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Your Email"
          {...register("email")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Textarea
          placeholder="Your Message"
          rows={5} // Maintained rows for content
          {...register("message")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors resize-y"
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed" // Reduced padding, font size
      >
        {isSubmitting ? "Sending Message..." : "Send Message"}
      </Button>

      {isSubmitSuccessful && (
        <p className="text-green-600 text-sm text-center mt-3 font-medium">
          Message sent successfully! We will get back to you shortly.
        </p>
      )}
    </form>
  )
}