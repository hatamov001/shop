// import React from "react"
import './App.css'
import { useState } from 'react'

function App () {
  // const [name, setName] = useState('Jahongir')

  return (
    <>
      <section>
        <div className='container'>
          <div className='content'>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
              <div class='container-fluid'>
                <a class='navbar-brand' href='#'>
                  Start Bootstrap
                </a>
                <button
                  class='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNavDropdown'
                  aria-controls='navbarNavDropdown'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span class='navbar-toggler-icon'></span>
                </button>
                <div
                  class='collapse navbar-collapse justify-content-between'
                  id='navbarNavDropdown'
                >
                  <ul class='navbar-nav'>
                    <div className='d-flex justify-content-between '>
                      <div className='d-flex'>
                        <li class='nav-item'>
                          <a
                            class='nav-link active'
                            aria-current='page'
                            href='#'
                          >
                            Home
                          </a>
                        </li>
                        <li class='nav-item'>
                          <a class='nav-link' href='#'>
                            About
                          </a>
                        </li>
                        <li class='nav-item dropdown'>
                          <a
                            class='nav-link dropdown-toggle'
                            id="navbarDropdown"
                            href='#'
                            role='button'
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Shop
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                            <li>
                              <a class='dropdown-item' href='#'>
                                Action
                              </a>
                            </li>
                            <li>
                              <a class='dropdown-item' href='#'>
                                Another action
                              </a>
                            </li>
                            <li>
                              <a class='dropdown-item' href='#'>
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </div>
                  </ul>
                  <div>
                    <button className='btn btn-outline-dark d-flex gap-2'>
                      <i class='bi bi-cart-fill'></i>{' '}
                      <p className='m-0'>Card</p>{' '}
                      <i class='bi bi-0-circle-fill'></i>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <header class='p-5 mb-5  bg-black text-white text-center'>
          <h1 className=''>Shop in style</h1>
          <p class='text-white-50 '>With this shop hompeage template</p>
        </header>

        <div className='container'>
          <div className='content_cards pt-5 pb-5'>
            <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
              <div class='col mb-5'>
                <div class='card h-100'>
                  <img
                    class='card-img-top'
                    src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                    alt='...'
                  />
                  <div class='card-body p-4'>
                    <div class='text-center'>
                      <h5 class='fw-bolder'>Fancy Product</h5>
                      $40.00 - $80.00
                    </div>
                  </div>
                  <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div class='text-center'>
                      <a class='btn btn-outline-dark mt-auto' href='#'>
                        View options
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col mb-5'>
                <div class='card h-100'>
                  <img
                    class='card-img-top'
                    src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                    alt='...'
                  />
                  <div
                    class='badge bg-dark text-white position-absolute'
                    style={{ top: '0.5rem', right: '0.5rem' }}
                  >
                    Sale
                  </div>
                  <div class='card-body p-4'>
                    <div class='text-center'>
                      <h5 class='fw-bolder'>Special Item</h5>
                      <div class='d-flex justify-content-center small text-warning mb-2'>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                      </div>
                      <span class='text-muted text-decoration-line-through'>
                        $20.00
                      </span>
                      $18.00
                    </div>
                  </div>
                  <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div class='text-center'>
                      <a class='btn btn-outline-dark mt-auto' href='#'>
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col mb-5'>
                <div class='card h-100'>
                  <img
                    class='card-img-top'
                    src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                    alt='...'
                  />
                   <div
                    class='badge bg-dark text-white position-absolute'
                    style={{ top: '0.5rem', right: '0.5rem' }}
                  >
                    Sale
                  </div>
                  <div class='card-body p-4'>
                    <div class='text-center'>
                      <h5 class='fw-bolder'>Sale Item</h5>
                      $50.00 $25.00
                    </div>
                  </div>
                  <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div class='text-center'>
                      <a class='btn btn-outline-dark mt-auto' href='#'>
                        View options
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col mb-5'>
                <div class='card h-100'>
                  <img
                    class='card-img-top'
                    src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                    alt='...'
                  />
                  <div class='card-body p-4'>
                    <div class='text-center'>
                      <h5 class='fw-bolder'>Popular Item</h5>
                      <div class='d-flex justify-content-center small text-warning mb-2'>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                      </div>
                      <span class='text-muted text-decoration-line-through'>
                        
                      </span>
                      $40.00
                    </div>
                  </div>
                  <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div class='text-center'>
                      <a class='btn btn-outline-dark mt-auto' href='#'>
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col mb-5'>
                <div class='card h-100'>
                  <img
                    class='card-img-top'
                    src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                    alt='...'
                  />
                  <div
                    class='badge bg-dark text-white position-absolute'
                    style={{ top: '0.5rem', right: '0.5rem' }}
                  >
                    Sale
                  </div>
                  <div class='card-body p-4'>
                    <div class='text-center'>
                      <h5 class='fw-bolder'>Fancy Product</h5>
                      $40.00 - $80.00
                    </div>
                  </div>
                  <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div class='text-center'>
                      <a class='btn btn-outline-dark mt-auto' href='#'>
                        View options
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col mb-5'>
                <div class='card h-100'>
                  <img
                    class='card-img-top'
                    src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                    alt='...'
                  />
                  <div class='card-body p-4'>
                    <div class='text-center'>
                      <h5 class='fw-bolder'>Fancy Product</h5>
                      $40.00 - $80.00
                    </div>
                  </div>
                  <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div class='text-center'>
                      <a class='btn btn-outline-dark mt-auto' href='#'>
                        View options
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col mb-5'>
                <div class='card h-100'>
                  <img
                    class='card-img-top'
                    src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                    alt='...'
                  />
                  <div
                    class='badge bg-dark text-white position-absolute'
                    style={{ top: '0.5rem', right: '0.5rem' }}
                  >
                    Sale
                  </div>
                  <div class='card-body p-4'>
                    <div class='text-center'>
                      <h5 class='fw-bolder'>Special Item</h5>
                      <div class='d-flex justify-content-center small text-warning mb-2'>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                      </div>
                      <span class='text-muted text-decoration-line-through'>
                        $20.00
                      </span>
                      $18.00
                    </div>
                  </div>
                  <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div class='text-center'>
                      <a class='btn btn-outline-dark mt-auto' href='#'>
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col mb-5'>
                <div class='card h-100'>
                  <img
                    class='card-img-top'
                    src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
                    alt='...'
                  />
                  <div class='card-body p-4'>
                    <div class='text-center'>
                      <h5 class='fw-bolder'>Popular Item</h5>
                      <div class='d-flex justify-content-center small text-warning mb-2'>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                        <div class='bi-star-fill'></div>
                      </div>
                      <span class='text-muted text-decoration-line-through'>
                       
                      </span>
                      $40.00
                    </div>
                  </div>
                  <div class='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div class='text-center'>
                      <a class='btn btn-outline-dark mt-auto' href='#'>
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class='p-5   bg-black text-white text-center'>
          <p class='m-0'>Copyright © Your Website 2023</p>
        </footer>
      </section>
    </>
  )
}

export default App
