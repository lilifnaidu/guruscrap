const PdfDocx = ({ title, description, file }) => {

  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">

      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">📄</span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {description && (
        <p>
          {description}
        </p>
      )}

      <div >

        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          View
        </a>

        <a 
          href={file}
           target="_blank"
          download
          className="px-4"
        >
          Download
        </a>

      </div>

    </div>
  )
}

export default PdfDocx