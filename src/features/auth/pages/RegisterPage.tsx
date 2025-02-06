import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Form } from "~/components/ui/form";
import { RegisterFormInner } from "../components/RegisterFormInner";
import { registerFormSchema, type RegisterFormSchema } from "../forms/register";

const RegisterPage = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleSubmit = (values: RegisterFormSchema) => {
    alert("Submitted!! " + values.email);
  };

  return (
    <PageContainer>
      <SectionContainer
        padded
        className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center"
      >
        <Card className="w-full max-w-[480px] self-center">
          <CardHeader className="flex flex-col items-center justify-center">
            {/* Logo Here */}
            <h1 className="text-primary text-3xl font-bold">
              Create an Account
            </h1>
            <p className="text-muted-foreground">
              Qepoin kreator favorite kamu{" "}
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <RegisterFormInner onSubmit={handleSubmit} />
            </Form>
            {/* CONTINUE WITH GOOGLE */}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between gap-x-4">
              <div className="h-[2px] w-full border-t-2"></div>
              <p className="text-muted-foreground flex-1 text-nowrap text-sm">
                or continue with
              </p>
              <div className="h-[2px] w-full border-t-2"></div>
            </div>
            <Button variant={"secondary"} size={"lg"} className="w-full">
              <FcGoogle />
              Sign Up with <span className="font-bold">Google</span>
            </Button>
            <p className="text-muted-foreground text-sm">
              Already have an account?{" "}
              <Link className="text-blue-500 underline" href={"/login"}>
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
};

export default RegisterPage;
