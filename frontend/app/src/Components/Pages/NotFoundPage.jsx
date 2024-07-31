import React from "react";

export default function NotFoundPage() {
  return (
    <>
      {" "}
      <section className="bg-home d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 text-center">
              <img
                src="assets/images/dist/404.svg"
                className="img-fluid"
                alt=""
              />
              <div className="text-uppercase mt-4 display-3">Oh ! no</div>
              <div className="text-capitalize text-dark mb-4 error-page">
                Page Not Found
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
