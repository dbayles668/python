async function submitForm(formData){
  "use server";
  const formFields = {
    email: formData.get("email"),
    message: formData.get("message")
  };
  console.log(formFields);
  return formFields;

}
export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
    <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
    <form className="space-y-4 " action={submitForm}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" type="email" name="email" required className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" required rows="4"  className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>
      <button type="submit"  className="text-white bg-blue-600 rounded-md px-2">Send Message</button>
    </form>
    </div>
    </main>
    </div>
  );
}
