import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { type RegisterFormSchema } from "../forms/register";
import { useState } from "react";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";

type OnSubmitFormInnerProps = {
  onSubmit: (values: RegisterFormSchema) => void;
};

export const RegisterFormInner = (props: OnSubmitFormInnerProps) => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const form = useFormContext<RegisterFormSchema>();
  return (
    <form onSubmit={form.handleSubmit(props.onSubmit)} className="space-y-6">
      <FormField
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
        name="email"
      />
      <FormField
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={showPass ? "text" : "password"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
        name="password"
      />
      <Label className="flex items-center gap-2">
        <Checkbox
          checked={showPass}
          onCheckedChange={(checked) => setShowPass(!!checked)}
        />
        Show Password
      </Label>
      <Button className="w-full">Sign Up</Button>
    </form>
  );
};
