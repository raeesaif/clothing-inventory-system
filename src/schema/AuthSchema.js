import { data } from "react-router-dom";
import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().min(1,"Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})


export const SignUpSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1,"Email is required").email("Invalid email address"),
    companyName: z.string().min(1, "Company name is required"),
    phone: z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

