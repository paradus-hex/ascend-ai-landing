"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import React from "react";
import { useForm } from "react-hook-form";
import  Button  from "@/components/button";
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
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  help: z.string(),
  email: z.string(),
  budget: z.string(),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = () => {
    console.log(`First`);
  };
  return (
    <>
    <div className="mx-[20rem] mb-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="font-nunito">
                <FormLabel className="text-lg">Your Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="bg-[#1519347D] border-2 border-[#A8E9FF] rounded-2xl p-6 text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="help"
            render={({ field }) => (
              <FormItem className="font-nunito ">
                <FormLabel className="text-lg">How can we help you?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I want to build a custom AI chatbot for my e-commerce business that can serve as a customer care representative..."
                    {...field}
                    className="bg-[#1519347D] border-2 border-[#A8E9FF] rounded-2xl pb-20 text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full font-nunito">
                <FormLabel className="text-lg">Your E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe@gmail.com"
                    {...field}
                    className="bg-[#1519347D] border-2 border-[#A8E9FF] rounded-2xl p-6 text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem className="w-full font-nunito">
                <FormLabel className="text-lg">Budget of your project</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className="bg-[#1519347D] border-2 border-[#A8E9FF] rounded-2xl p-6 text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          </div>
          <div className="text-end">

          <Button text="Submit" />
          </div>
        </form>
      </Form>
    </div>
    </>
  );
};

export default ContactForm;
