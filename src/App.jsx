import PdfDocx from "./Components/pdfCard"
import pdfs from "./Components/data/pdfData"
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold text-center mb-8">
        Study Materials
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

      {
        pdfs.map((item)=>(
          <PdfDocx
          key={item.id}
          title={item.title}
          description={item.description}
          file={item.file}
          />

          
        ))
      }

      </div>

    </div>
  )
}

export default App