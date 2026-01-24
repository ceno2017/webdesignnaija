import SigninButton from "@/app/_components/SigninButton";

export const metadata = {
  title: "Login page",
};

function page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Sign in to access our portfolio
      </h2>
      <SigninButton />
    </div>
  );
}

export default page;
