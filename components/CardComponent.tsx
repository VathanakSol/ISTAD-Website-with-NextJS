export default function CardComponent() {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-2 animate__animated animate__fadeInUp w-[60vw]"> {/* Grid Setup */}
          <a href="#">
            <div className="bg-white rounded-lg shadow p-4"> {/* Card Container */}
              <img src="https://api.istad.co/media/image/665bb2ec-bd8b-4dc0-bbc0-c652aacc422b.png" alt="" className="w-full rounded-t-lg" /> 
              <div className="p-3">  {/* Card Content */}
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-gray-500">
                    <i className="fas fa-tag mr-1 card-info-icon"></i> 
                    <span className="card-info">Job Announcement</span>
                  </p>
                  <p className="text-sm text-gray-500">17-Sep-2024</p>
                </div>
                <p className="font-medium text-base mb-2">
                  WebEssentials ប្រកាសរើសបុគ្គលិក Software Developer និង Senior Software Developer
                </p>
              </div>
            </div>
          </a>
        </div>
      </>
    );
  }