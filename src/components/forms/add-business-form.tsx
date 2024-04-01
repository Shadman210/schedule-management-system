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
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from "next/navigation";

const formSchema = z.object({
    businessName: z.string(),

});

type FormType = z.infer<typeof formSchema>;

export function AddBusinessForm() {

    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState(1)

    const router = useRouter()
    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            businessName: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true)
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
            router.push("/dashboard");
        } catch (e: any) {
            toast({
                title: 'Login failed!',
                description: e.message,
                variant: 'destructive'
            })
        } finally {
            setLoading(false)
        }
    };

    const renderAddBusinessForm = () => {
        if (step === 1) {
            return <Form {...form}>
                <div className="flex flex-col justify-center items-start min-w-[600px] rounded shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] px-8 py-10 bg-white">
                    <h2 className="text-lg font-semibold ">
                        Tell us about your business
                    </h2>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="my-8 space-y-8 w-full">
                        <FormField
                            control={form.control}
                            name="businessName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button loading={loading} type="submit">Next</Button>
                    </form>
                </div>

            </Form>
        } else if (step === 2) {
            return <></>
        } else {
            return <></>
        }
    }

    return (
        <>{renderAddBusinessForm()}</>
    );
}
