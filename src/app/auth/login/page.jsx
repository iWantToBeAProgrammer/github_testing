import FormCard from "@/components/auth/FormCard";

export default function Login() {
  return (
    <>
      <div className="flex justify-center w-full h-screen items-center">
        <FormCard action={"login"}/>
      </div>
    </>
  );
}
