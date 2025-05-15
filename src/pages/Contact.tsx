import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTools,
  FaUserTie,
} from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

import CustomInputField from "@/components/custom-input/CustomInputField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

export default function ContactFormPreview() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Failed to send your message. Please try again.");
    }
  }

  return (
    <div className="py-20 text-gray-800 bg-gray-50">
      <Helmet>
        <title>Contact Us - Bike Shop || Online Delivery</title>
      </Helmet>
      <div className="px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold uppercase text-primary">
            Contact Us
          </h2>
          <div className="flex items-center justify-center mt-4">
            <span className="w-16 h-1 mr-2 bg-orange-500"></span>
            <span className="w-3 h-3 rotate-45 bg-orange-500"></span>
            <span className="w-16 h-1 ml-2 bg-orange-500"></span>
          </div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-600">
            If you would like to find out more about how we can help you, give
            us a call or drop an email. We welcome your comments and
            suggestions.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base">
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="mt-1 text-primary" />
                  <p>
                    +8801994361085, +8801829662328, +8801914163150,
                    +8801719313438
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-primary" />
                  <p>bikeShop25@gmail.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-primary" />
                  <p>Dhaka, Bangladesh</p>
                </div>

                <hr className="my-4" />

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="mt-1 text-primary" />
                    <p>
                      <strong>Billing:</strong> accounts@bikeShop25.com
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaTools className="mt-1 text-primary" />
                    <p>
                      <strong>Technical:</strong> noc@bikeShop25.com
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="mt-1 text-primary" />
                    <p>
                      <strong>Sales:</strong> sales@bikshopbd25.com
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaUserTie className="mt-1 text-primary" />
                    <p>
                      <strong>Management:</strong> admin@bikeShop25.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button variant="outline">Visit Page</Button>
                  <Button variant="outline">Join Group</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="px-8 py-2 bg-white rounded-lg shadow-md">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <h3 className="mb-6 text-2xl font-semibold text-center text-primary">
                  Send Us a Message
                </h3>
                <CustomInputField
                  name="name"
                  label="Full Name"
                  placeholder="Enter your name"
                  type="text"
                  control={form.control}
                />
                <CustomInputField
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  control={form.control}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
