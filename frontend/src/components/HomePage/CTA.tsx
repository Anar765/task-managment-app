import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <>
        {/* CTA Section */}
        <section className="py-20 bg-linear-to-br from-indigo-600 to-purple-600">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to get organized?
                </h2>
                <p className="text-xl text-indigo-100 mb-8">
                    Join thousands of developers who manage their tasks with DevTasks. Free forever, no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/signup" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg flex items-center justify-center gap-2">
                        Get Started Free
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default CTA