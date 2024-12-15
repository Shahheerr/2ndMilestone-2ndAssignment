import Card from "../component/Card";

export default function About() {
    return (
        <div className="space-y-8 m-10">
            <h1 className="text-4xl font-bold text-center text-purple-800">About Us</h1>
            <Card>
                <p className="text-xl text-gray-700 mb-4">We are a team dedicated to creating simple and effective web solutions.</p>
                <p className="text-lg text-purple-600">Our goal is to demonstrate the power of React and Tailwind CSS in building responsive and attractive websites.</p>
            </Card>
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Mission</h2>
                    <p className="text-gray-700">To create beautiful and functional websites that delight users and clients alike.</p>
                </Card>
                <Card className="text-center">
                    <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Vision</h2>
                    <p className="text-gray-700">To become the go-to resource for modern web development techniques and best practices.</p>
                </Card>
                <Card className="text-center">
                    <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Values</h2>
                    <p className="text-gray-700">Innovation, collaboration, and continuous learning drive everything we do.</p>
                </Card>
            </div>
        </div>
    )
}

