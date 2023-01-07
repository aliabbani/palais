import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridExample() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <div className="main px-2 md:px-2 flex flex-col md:flex-row md:flex-wrap gap-x-8 gap-y-8 md:gap-x-0 md:gap-y-8 py-16 md:py-16 justify-evenly">
      {/* first */}
      <div className="border border-slate-400 basis-5/12">
        <div>
          <img
            className=""
            src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          />
        </div>
        <div className="px-2">
          <h1>Palais</h1>
          <div>
            lorem icons lorem iconslorem icons lorem iconslorem iconslorem icons{" "}
          </div>
        </div>
      </div>
      {/* second */}
      <div className="border border-slate-400 basis-5/12">
        <div>
          <img
            className=""
            src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          />
        </div>
        <div className="px-2">
          <h1>Palais circle</h1>
          <div>
            lorem icons lorem iconslorem icons lorem iconslorem iconslorem
            iconslorem icons lorem iconslorem icons lorem iconslorem iconslorem
            iconslorem icons lorem iconslorem icons lorem iconslorem iconslorem
            iconslorem icons lorem iconslorem icons lorem iconslorem iconslorem
            iconslorem icons lorem iconslorem icons lorem iconslorem iconslorem
            icons
          </div>
        </div>
      </div>
      {/* third */}
      <div className="border border-slate-400 basis-5/12">
        <div>
          <img
            className=""
            src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          />
        </div>
        <div className="px-2">
          <h1>Le Petit Palais</h1>
          <div>
            lorem icons lorem iconslorem icons lorem iconslorem iconslorem icons{" "}
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="border border-slate-400 basis-5/12">
        <div>
          <img
            className=""
            src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          />
        </div>
        <div className="px-2">
          <h1>Royal Burger</h1>
          <div>
            lorem icons lorem iconslorem icons lorem iconslorlorem icons lorem
            iconslorem icons lorem iconslorem iconslorem iconslorem icons lorem
            iconslorem icons lorem iconslorem iconslorem iconslorem icons lorem
            iconslorem icons lorem iconslorem iconslorem iconslorem icons lorem
            iconslorem icons lorem iconslorem iconslorem icons
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridExample;
