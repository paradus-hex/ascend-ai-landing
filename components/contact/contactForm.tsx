"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
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
  help: z.string().min(10, { message: "Minimum 10 character needed." }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  budget: z.string(),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      help: "",
      email: "",
      budget: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
      const time = new Date();
      const post = await axios.post('https://eopibqyhnfh45bi.m.pipedream.net',{
      "username": values.username,
      "help": values.help,
      "email": values.email,
      "budget": values.budget,
      "time": time.toLocaleString()
    });
  }

  return (
    <>
      <div className="lg:mx-[17rem] md:mx-[7rem] m-[2rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="font-nunito">
                  <FormLabel className="text-m lg:text-lg">Your Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-[#1519347D] border-2 border-[#A8E9FF] rounded-2xl p-6 text-m lg:text-lg"
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
                  <FormLabel className="text-m lg:text-lg">
                    How can we help you?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I want to build a custom AI chatbot for my e-commerce business that can serve as a customer care representative..."
                      {...field}
                      className="bg-[#1519347D] border-2 border-[#A8E9FF] rounded-2xl pb-20 text-m lg:text-lg overflow-hidden"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="lg:flex w-full gap-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full font-nunito">
                    <FormLabel className="text:m lg:text-lg">Your E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="johndoe@gmail.com"
                        {...field}
                        className="bg-[#1519347D] border-2 border-[#A8E9FF] rounded-2xl p-6 text-m lg:text-lg"
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
                  <FormItem className="w-full font-nunito pt-[2rem] lg:pt-[0rem]">
                    <FormLabel className="text-m lg:text-lg">
                      Budget of your project
                    </FormLabel>
                    <FormControl>
                      <Input
                    placeholder="Let's discuss"
                    {...field}
                    className="bg-[#1519347D] border-2 border-[#A8E9FF] rounded-2xl p-6 text-m lg:text-lg"
                  />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
