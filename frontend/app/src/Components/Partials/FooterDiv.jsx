import React from "react";

export default function FooterDiv() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-py-30 footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-start">
                  <p className="mb-0">
                    © IPSSI - 2024 - Build with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by students of
                    Sayf BEJAOUI{" "}
                  </p>
                </div>
              </div>

              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled text-sm-end mb-0"></ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
