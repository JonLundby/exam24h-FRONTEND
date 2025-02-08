export default function Home() {
    return (
        <div
            className="container-fluid d-flex flex-column text-white"
            style={{
                backgroundImage: `url("/steven-lelham-atSaEOeE8Nk-unsplash.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "85vh",
                width: "100vw",
            }}
        >
            {/* Centered at the top */}
            <h1 className="text-center mt-2">Home</h1>

            {/* Content section positioned below & left-aligned */}
            <div className="container-start bg-white bg-opacity-75 text-dark h5 m-4 p-3" style={{ width: "40%", borderRadius: "10px" }}>
                <p>
                    This is my 3rd semester 24-hour exam studying data science at Copenhagen school of design and technology.
                    <br />
                    <br />
                    The assignment is to create a web application that can manage participants and their results in an athletic competition.
                    A new athlete can be added and existing athletes can be editet and/or deleted. Results can be only deleted for now. Also
                    a user can search for an athlete by name and sort the list of athletes based the column names.
                    <br />
                    <br />
                    The exam was not meant to achieve a fully working applicatiopn but just to implement as much funcionality as possible.
                    If time allows it I will add more detail and functionality afterwards.
                </p>
            </div>
        </div>
    );
}
