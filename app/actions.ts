"use server"

import { z } from "zod"

// Define the schema for validation
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
})

export async function joinWaitlist(prevState: any, formData: FormData) {
  const email = formData.get("email")

  // Validate the email
  const validatedFields = formSchema.safeParse({
    email,
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Mozhii Waitlist <onboarding@resend.dev>',
        to: 'mozhii2025@gmail.com',
        subject: 'New Waitlist Sign Up',
        text: `New user joined the waitlist: ${email}`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API Error:", errorData);
      throw new Error('Failed to send email');
    }

    return {
      success: true,
      message: "You have been added to the waitlist!",
    }
  } catch (error) {
    console.error("Resend Error:", error)
    return {
      success: false,
      message: "Failed to join waitlist. Please try again later.",
    }
  }
}
