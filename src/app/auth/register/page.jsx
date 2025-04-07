import FormCard from "@/components/auth/FormCard";

export default function Register() {
  return (
    <>
      <div className="flex justify-center w-full h-screen items-center">
        <FormCard action={"register"} />
      </div>
    </>
  );
}
