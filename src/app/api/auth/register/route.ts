import { NextResponse } from "next/server";
import { backendClient } from "@/sanity/lib/backend-client";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const { name, email, password, phone } = (await req.json()) as any;

        if (!name || !email || !password || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const existingUser = await backendClient.fetch(
            `*[_type == "user" && email == $email][0]`,
            { email }
        );

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await backendClient.create({
            _type: "user",
            name,
            email,
            phone,
            password: hashedPassword,
            emailVerified: new Date().toISOString(),
        });

        return NextResponse.json(
            { message: "User created successfully", user: newUser },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
