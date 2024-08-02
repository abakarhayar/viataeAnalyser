import React from "react";

export default function SearchDiv() {
  return (
    <>

<div className="col-lg-8 col-12">
        <div className="component-wrapper rounded shadow">
          <div className="p-4 border-bottom">
            <h5 className="title mb-0"><form class="card rounded ">
          <div class="row text-start">
            <div class="col-lg-5 col-md-4">
              <div class="mb-0">
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="Titre du poste "
                />
              </div>
            </div>

            <div class="col-lg-7 col-md-8">
              <div class="row align-items-center">
                <div class="col-md-6 mt-4 mt-sm-0">
                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Critères de selection"
                  />
                </div>

                <div class="col-md-4 mt-4 mt-sm-0">
                  <div class="d-grid">
                    <input
                      type="submit"
                      id="search"
                      name="search"
                      class="searchbtn btn btn-primary"
                      value="Recherche"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form></h5>
          </div>

          <div className="p-4">
            <div className="table-responsive bg-white shadow rounded">
              <table className="table table-hover mb-0 table-center ">
                <thead>
                  <tr>
                    <th scope="col" className="border-bottom text-center">
                      Titre de l'emploi
                    </th>
                    <th scope="col" className="border-bottom text-center">
                      Années d'expérience
                    </th>
                    <th scope="col" className="border-bottom text-center">
                      Score CV
                    </th>
                    <th scope="col" className="border-bottom text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  
                    <tr key="">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-justify">
              
                      </td>
                    </tr>
               
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-12">
        
      </div>
    </>
  );
}
