import React from "react";

export default function CvDiv() {
  return (
    <>
      <div className="col-lg-8 col-12">
        <div className="component-wrapper rounded shadow">
          <div className="p-4 border-bottom">
            <h5 className="title mb-0"> Les CVs </h5>
          </div>

          <div className="p-4">
            <div className="table-responsive bg-white shadow rounded">
              <table className="table table-hover mb-0 table-center">
                <thead>
                  <tr>
                    <th scope="col" className="border-bottom">
                      Nom
                    </th>
                    <th scope="col" className="border-bottom">
                      Prénom
                    </th>
                    <th scope="col" className="border-bottom">
                      Email
                    </th>
                    <th scope="col" className="border-bottom">
                      Poste
                    </th>
                    <th scope="col" className="border-bottom">
                      Score
                    </th>
                    <th scope="col" className="border-bottom">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Ange</th>
                    <td>Bérenger</td>
                    <td>angy@gmail.com</td>
                    <td>Medecin</td>
                    <td>30%</td>
                    <td>-</td>
                  </tr>
               
                   
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
