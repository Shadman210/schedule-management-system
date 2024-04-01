"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
    fullName: z.string().min(1, "Name is required."),
    email: z.string().min(1, "Email is required.").email(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});

type FormType = z.infer<typeof formSchema>;

export function SignunForm() {
    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <div className="flex flex-col space-y-1 mb-6">
                <h2 className=" text-lg font-semibold">
                    Create an account
                </h2>
                <div className="flex items-center text-xs font-light">
                    <div>Already have an account?</div>
                    <Link
                        className=" text-primary ml-1 hover:underline"
                        href="/sign-in"
                    >
                        Log in
                    </Link>
                </div>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email address</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder=""
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex items-center text-xs font-light py-4">
                    <div>By creating an account, you agree to Migranium&apos;s </div>
                    <Link
                        className=" text-primary ml-1 hover:underline"
                        href="/terms"
                    >
                        Terms
                    </Link>
                    and
                    <Link
                        className=" text-primary ml-1 hover:underline"
                        href="/privacy-policy"
                    >
                        Policies
                    </Link>
                </div>

                <Button type="submit">Sign up</Button>
            </form>
        </Form>
    );
}
