import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json() as {
            name: string;
            email: string;
            subject: string;
            message: string;
        };

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: "All fields are required." },
                { status: 400 }
            );
        }

        // If you have a Resend / Nodemailer setup, send the email here.
        // Example with Resend:
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'contact@manindersinghchandok.com',
        //   to: 'maninder.chandok@gmail.com',
        //   subject: `[Contact Form] ${subject}`,
        //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
        // });

        // For now, log the submission (replace with your email provider)
        console.log("Contact form submission:", { name, email, subject, message });

        return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { message: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
