import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
    <section className="section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                    <h4 className="mb-4">Avantages d'une Revue de CV par IA</h4>
                    <p className="para-desc mx-auto text-muted">Notre évaluateur de CV par IA est un outil conçu pour fournir une analyse immédiate et complète de votre CV.</p>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="card features feature-primary explore-feature border-0 rounded text-center">
                    <div className="card-body">
                        <div className="icons rounded-circle shadow-lg d-inline-block mb-2 h3">
                            <i className="uil uil-clock"></i>
                        </div>
                        <div className="content mt-4">
                            <Link to="" className="title h5 text-dark">Retour Immédiat</Link>
                            <p className="text-muted mt-3 mb-0">Recevez instantanément des retours actionnables sur les forces et faiblesses de votre CV, permettant des améliorations rapides.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="card features feature-primary explore-feature border-0 rounded text-center">
                    <div className="card-body">
                        <div className="icons rounded-circle shadow-lg d-inline-block mb-2 h3">
                            <i className="uil uil-file-bookmark-alt"></i>
                        </div>
                        <div className="content mt-4">
                            <Link to="" className="title h5 text-dark">Évaluation Objective</Link>
                            <p className="text-muted mt-3 mb-0">Obtenez une évaluation impartiale de votre CV, libre d'erreurs humaines ou de biais subjectifs</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="card features feature-primary explore-feature border-0 rounded text-center">
                    <div className="card-body">
                        <div className="icons rounded-circle shadow-lg d-inline-block mb-2 h3">
                            <i className="uil uil-keyboard"></i>
                        </div>
                        <div className="content mt-4">
                            <Link href="" className="title h5 text-dark">Concentrez-vous sur les Mots-clés Pertinents</Link>
                            <p className="text-muted mt-3 mb-0">Intégrez des mots-clés spécifiques à l'industrie pour améliorer la visibilité de votre CV dans les systèmes de suivi des candidatures</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}
