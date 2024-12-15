import Card from "./component/Card";

export default function Home() {
  return (
    <div className="space-y-8 m-10">
      <h1 className="text-4xl font-bold text-center text-purple-800">Welcome to our Beautiful Website</h1>
      <Card className="text-center">
        <p className="text-xl text-gray-700 mb-4">This is a simple demonstration of a multi-page website built with Next.js and styled with Tailwind CSS.</p>
        <p className="text-lg text-purple-600">Feel free to navigate through the pages using the links in the header.</p>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Responsive Design</h2>
          <p className="text-gray-700">Our website adapts seamlessly to various screen sizes, ensuring a great user experience on all devices.</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Modern Styling</h2>
          <p className="text-gray-700">We use Tailwind CSS to create a beautiful and consistent design throughout the website.</p>
        </Card>
      </div>
    </div>
  )
}

