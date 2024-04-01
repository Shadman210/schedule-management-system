"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RoutePath } from "@/lib/utils/constants";

const formSchema = z.object({
    email: z.string().min(1, "Email is required.").email(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});

type FormType = z.infer<typeof formSchema>;

export function SignInForm() {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);
            const res = await signIn("credentials", {
                ...values,
                redirect: false,
            });
            if (res?.error) {
                throw new Error(res.error);
            }
            toast({
                description: "Logged In Successfully",
            });
            router.push(RoutePath.WAITLIST);
        } catch (e: any) {
            toast({
                title: "Login failed!",
                description: e.message,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <div className="flex flex-col space-y-1 mb-6">
                <h2 className=" text-lg font-semibold">
                    Log in to your account
                </h2>
                <div className="flex items-center text-xs font-light">
                    <div>Don&apos;t have an account?</div>
                    <Link
                        className=" text-primary font-semibold ml-1 hover:underline"
                        href="/sign-up"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <Button loading={loading} type="submit">
                    Login
                </Button>
            </form>
        </Form>
    );
}
