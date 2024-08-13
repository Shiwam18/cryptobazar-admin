import Image from "next/image"

export default function RightContent(){
    return (
    <div className="content-page">
    {/* Start content */}
    <div className="content">
      {/* Top Bar Start */}
      <div className="topbar">
        <nav className="navbar-custom">
          <ul className="d-flex justify-content-end mb-0">
            {/* language*/}
            <li className="list-inline-item hide-phone app-search">
              <form role="search" className="">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                />
                <a href="">
                  <i className="fa fa-search" />
                </a>
              </form>
            </li>
            <li className="list-inline-item dropdown notification-list hide-phone">
              <a
                className="nav-link dropdown-toggle arrow-none waves-effect text-white"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <Image
                  src="/images/flags/us_flag.jpg"
                  className=" img-fluid ml-2"
                  width={0}
                  height={16}
                  alt=""
                />
              </a>
              <div className="dropdown-menu dropdown-menu-right language-switch">
                <a className="img-fluid dropdown-item" href="#">
                  <Image
                    className="img-fuid"
                    src="/images/flags/italy_flag.jpg"
                    alt=""
                    width={0}
                    height={16}
                  />
                  <span> Italian </span>
                </a>
                <a className="dropdown-item" href="#">
                  <Image
                    className="img-fluid"
                    src="/images/flags/french_flag.jpg"
                    alt=""
                    height={16}
                    width={0}
                  />
                  <span> French </span>
                </a>
                <a className="dropdown-item" href="#">
                  <Image
                    className="img-fluid"
                    src="/images/flags/spain_flag.jpg"
                    alt=""
                    height={16}
                    width={0}
                  />
                  <span> Spanish </span>
                </a>
                <a className="dropdown-item" href="#">
                  <Image
                  className="img-fluid"
                    src="/images/flags/russia_flag.jpg"
                    alt=""
                    height={16}
                    width={0}
                  />
                  <span> Russian </span>
                </a>
              </div>
            </li>
            <li className="list-inline-item dropdown notification-list">
              <a
                className="nav-link dropdown-toggle arrow-none waves-effect"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ti-email noti-icon" />
                <span className="badge badge-danger noti-icon-badge">5</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg">
                {/* item*/}
                <div className="dropdown-item noti-title">
                  <h5>
                    <span className="badge badge-danger float-right">745</span>
                    Messages
                  </h5>
                </div>
                {/* item*/}
                <a
                  href="#"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon">
                    <Image
                      src="/images/users/avatar-2.jpg"
                      alt="user-img"
                      className="img-fluid rounded-circle"
                      height={0} width={0}
                    />{" "}
                  </div>
                  <p className="notify-details">
                    <b>Charles M. Jones</b>
                    <small className="text-muted">
                      Dummy text of the printing and typesetting industry.
                    </small>
                  </p>
                </a>
                {/* item*/}
                <a
                  href="#"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon">
                    <Image
                      src="/images/users/avatar-3.jpg"
                      alt="user-img"
                      className="img-fluid rounded-circle"
                      width={0} height={0}
                    />{" "}
                  </div>
                  <p className="notify-details">
                    <b>Thomas J. Mimms</b>
                    <small className="text-muted">
                      You have 87 unread messages
                    </small>
                  </p>
                </a>
                {/* item*/}
                <a
                  href="#"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon">
                    <Image
                      src="/images/users/avatar-4.jpg"
                      alt="user-img"
                      className="img-fluid rounded-circle"
                      width={0} height={0}
                    />{" "}
                  </div>
                  <p className="notify-details">
                    <b>Luis M. Konrad</b>
                    <small className="text-muted">
                      It is a long established fact that a reader will
                    </small>
                  </p>
                </a>
                {/* All*/}
                <a
                  href="#"
                  className="dropdown-item notify-item"
                >
                  View All
                </a>
              </div>
            </li>
            <li className="list-inline-item dropdown notification-list">
              <a
                className="nav-link dropdown-toggle arrow-none waves-effect"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ti-bell noti-icon" />
                <span className="badge badge-success noti-icon-badge">23</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg">
                {/* item*/}
                <div className="dropdown-item noti-title">
                  <h5>
                    <span className="badge badge-danger float-right">87</span>
                    Notification
                  </h5>
                </div>
                {/* item*/}
                <a
                  href="#"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-primary">
                    <i className="mdi mdi-cart-outline" />
                  </div>
                  <p className="notify-details">
                    <b>Your order is placed</b>
                    <small className="text-muted">
                      Dummy text of the printing and typesetting industry.
                    </small>
                  </p>
                </a>
                {/* item*/}
                <a
                  href="#"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-success">
                    <i className="mdi mdi-message" />
                  </div>
                  <p className="notify-details">
                    <b>New Message received</b>
                    <small className="text-muted">
                      You have 87 unread messages
                    </small>
                  </p>
                </a>
                {/* item*/}
                <a
                  href="#"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-warning">
                    <i className="mdi mdi-martini" />
                  </div>
                  <p className="notify-details">
                    <b>Your item is shipped</b>
                    <small className="text-muted">
                      It is a long established fact that a reader will
                    </small>
                  </p>
                </a>
                {/* All*/}
                <a
                  href="#"
                  className="dropdown-item notify-item"
                >
                  View All
                </a>
              </div>
            </li>
            <li className="list-inline-item dropdown notification-list">
              <a
                className="nav-link dropdown-toggle arrow-none waves-effect nav-user"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <Image
                  src="/images/users/avatar-1.jpg"
                  alt="user"
                  className="img-fluid rounded-circle"
                  width={0} height={0}
                />
              </a>
              <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                {/* item*/}
                <div className="dropdown-item noti-title">
                  <h5>Welcome</h5>
                </div>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-account-circle m-r-5 text-muted" />{" "}
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-wallet m-r-5 text-muted" /> My Wallet
                </a>
                <a className="dropdown-item" href="#">
                  <span className="badge badge-success float-right">5</span>
                  <i className="mdi mdi-settings m-r-5 text-muted" /> Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-lock-open-outline m-r-5 text-muted" />{" "}
                  Lock screen
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-logout m-r-5 text-muted" /> Logout
                </a>
              </div>
            </li>
          </ul>
          <ul className="list-inline menu-left mb-0">
            <li className="float-left">
              <button className="button-menu-mobile open-left waves-light waves-effect">
                <i className="mdi mdi-menu" />
              </button>
            </li>
          </ul>
          <div className="clearfix" />
        </nav>
      </div>
      {/* Top Bar End */}
      <div className="page-content-wrapper ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="page-title-box">
                <div className="btn-group float-right">
                  <ol className="breadcrumb hide-phone p-0 m-0">
                    <li className="breadcrumb-item">
                      <a href="#">Zoter</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
                <h4 className="page-title">Dashboard</h4>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          {/* end page title end breadcrumb */}
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row">
                        <div className="col-3 align-self-center">
                          <div className="round">
                            <i className="mdi mdi-eye" />
                          </div>
                        </div>
                        <div className="col-9 align-self-center text-right">
                          <div className="m-l-10">
                            <h5 className="mt-0">18090</h5>
                            <p className="mb-0 text-muted">
                              Visits Today{" "}
                              <span className="badge bg-soft-success">
                                <i className="mdi mdi-arrow-up" />
                                2.35%
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="progress mt-3" style={{ height: 3 }}>
                        <div
                          className="progress-bar  bg-success"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow={35}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                </div>
                {/*end col*/}
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row">
                        <div className="col-3 align-self-center">
                          <div className="round">
                            <i className="mdi mdi-account-multiple-plus" />
                          </div>
                        </div>
                        <div className="col-9 text-right align-self-center">
                          <div className="m-l-10 ">
                            <h5 className="mt-0">562</h5>
                            <p className="mb-0 text-muted">New Users</p>
                          </div>
                        </div>
                      </div>
                      <div className="progress mt-3" style={{ height: 3 }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "48%" }}
                          aria-valuenow={48}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                </div>
                {/*end col*/}
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="search-type-arrow" />
                      <div className="d-flex flex-row">
                        <div className="col-3 align-self-center">
                          <div className="round ">
                            <i className="mdi mdi-cart" />
                          </div>
                        </div>
                        <div className="col-9 align-self-center text-right">
                          <div className="m-l-10 ">
                            <h5 className="mt-0">7514</h5>
                            <p className="mb-0 text-muted">New Orders</p>
                          </div>
                        </div>
                      </div>
                      <div className="progress mt-3" style={{ height: 3 }}>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "61%" }}
                          aria-valuenow={61}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
              
              {/*end card*/}
            </div>
            {/*end col*/}
            
            {/*end col*/}
          </div>
          {/*end row*/}
          
          {/* end row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body new-user">
                  <h5 className="header-title mb-4 mt-0">New Users</h5>
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th className="border-top-0">Users</th>
                          <th className="border-top-0">Name</th>
                          <th className="border-top-0">Country</th>
                          <th className="border-top-0">Reviews</th>
                          <th className="border-top-0">Socials</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              className="img-fluid rounded-circle"
                              src="/images/users/avatar-2.jpg"
                              alt="user"
                              width={30} height={0}
                            />{" "}
                          </td>
                          <td>
                            <a href="#">Ruby T. Curd</a>
                          </td>
                          <td>
                            <Image
                              src="/images/flags/us_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star-half text-warning" />
                            <i className="mdi mdi-star-outline text-warning" />
                          </td>
                          <td>
                            <ul className="list-unstyled list-inline mb-0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-facebook text-primary" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-linkedin text-danger" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-twitter-alt text-info" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image
                              className="img-fluid rounded-circle"
                              src="/images/users/avatar-3.jpg"
                              alt="user"
                              width={30} height={0}
                            />{" "}
                          </td>
                          <td>
                            <a href="#">William A. Johnson</a>
                          </td>
                          <td>
                            <Image
                              src="/images/flags/french_flag.jpg"
                              alt=""
                              className="img-fuild img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star-half text-warning" />
                            <i className="mdi mdi-star-outline text-warning" />
                          </td>
                          <td>
                            <ul className="list-unstyled list-inline mb-0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-facebook text-primary" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-linkedin text-danger" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-twitter-alt text-info" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image
                              className="img-fluid rounded-circle"
                              src="/images/users/avatar-4.jpg"
                              alt="user"
                              width={30} height={0}
                            />{" "}
                          </td>
                          <td>
                            <a href="#">Bobby M. Gray</a>
                          </td>
                          <td>
                            <Image
                              src="/images/flags/spain_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star-half text-warning" />
                            <i className="mdi mdi-star-outline text-warning" />
                          </td>
                          <td>
                            <ul className="list-unstyled list-inline mb-0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-facebook text-primary" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-linkedin text-danger" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-twitter-alt text-info" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image
                              className="img-fluid rounded-circle"
                              src="/images/users/avatar-5.jpg"
                              alt="user"
                              width={30} height={0}
                            />{" "}
                          </td>
                          <td>
                            <a href="#">Robert N. Carlile</a>
                          </td>
                          <td>
                            <Image
                              src="/images/flags/russia_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star-half text-warning" />
                            <i className="mdi mdi-star-outline text-warning" />
                          </td>
                          <td>
                            <ul className="list-unstyled list-inline mb-0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-facebook text-primary" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-linkedin text-danger" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-twitter-alt text-info" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image
                              className="img-fuild rounded-circle"
                              src="/images/users/avatar-6.jpg"
                              alt="user"
                              width={30} height={0}
                            />{" "}
                          </td>
                          <td>
                            <a href="#">Ruby T. Curd</a>
                          </td>
                          <td>
                            <Image
                              src="/images/flags/italy_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star-half text-warning" />
                            <i className="mdi mdi-star-outline text-warning" />
                          </td>
                          <td>
                            <ul className="list-unstyled list-inline mb-0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-facebook text-primary" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-linkedin text-danger" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-twitter-alt text-info" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr> 
                        <tr>
                          <td>
                            <Image
                              className="img-fluid rounded-circle"
                              src="/images/users/avatar-2.jpg"
                              alt="user"
                              width={30} height={0}
                            />{" "}
                          </td>
                          <td>
                            <a href="#">Ruby T. Curd</a>
                          </td>
                          <td>
                            <Image
                              src="/images/flags/us_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star-half text-warning" />
                            <i className="mdi mdi-star-outline text-warning" />
                          </td>
                          <td>
                            <ul className="list-unstyled list-inline mb-0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-facebook text-primary" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-linkedin text-danger" />
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <i className="ti-twitter-alt text-info" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
            </div>
            {/*end col*/}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body new-user">
                  <h5 className="header-title mb-4 mt-0">Order List</h5>
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th className="border-top-0">Product</th>
                          <th className="border-top-0">Pro Name</th>
                          <th className="border-top-0">Country</th>
                          <th className="border-top-0">Order Date/Time</th>
                          <th className="border-top-0">Pcs.</th>
                          <th className="border-top-0">Amount ($)</th>
                          <th className="border-top-0">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              className="img-fluid img-fluid"
                              src="/images/products/pro1.png"
                              alt="user"
                              width={0} height={0}
                            />{" "}
                          </td>
                          <td>Chair</td>
                          <td>
                            <Image
                              src="/images/flags/us_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>3/09/2018 4:29 PM</td>
                          <td>2</td>
                          <td> $ 50</td>
                          <td>
                            <span className="badge badge-boxed  badge-success">
                              Shipped
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image
                              className="image-fluid"
                              src="/images/products/pro2.png"
                              alt="user"
                              width={0} height={0}
                            />{" "}
                          </td>
                          <td>Mobile</td>
                          <td>
                            <Image
                              src="/images/flags/french_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>3/15/2018 1:09 PM</td>
                          <td>1</td>
                          <td> $ 70</td>
                          <td>
                            <span className="badge badge-boxed  badge-danger">
                              Delivered
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image
                              className="img-fluid"
                              src="/images/products/pro3.png"
                              alt="user"
                              width={0} height={0}
                            />{" "}
                          </td>
                          <td>LED</td>
                          <td>
                            <Image
                              src="/images/flags/spain_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>3/18/2018 12:09 PM</td>
                          <td>3</td>
                          <td> $ 200</td>
                          <td>
                            <span className="badge badge-boxed badge-warning">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image
                              className="img-fluid"
                              src="/images/products/pro4.png"
                              alt="user"
                              width={0} height={0}

                            />{" "}
                          </td>
                          <td>Chair</td>
                          <td>
                            <Image
                              src="/images/flags/russia_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>3/27/2018 8:27 PM</td>
                          <td>2</td>
                          <td> $ 20</td>
                          <td>
                            <span className="badge badge-boxed  badge-success">
                              Shipped
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image
                              className="img-fluid"
                              src="/images/products/pro2.png"
                              alt="user"
                              width={0} height={0}
                            />{" "}
                          </td>
                          <td>Mobile</td>
                          <td>
                            <Image
                              src="/images/flags/italy_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>4/01/2018 5:09 PM</td>
                          <td>1</td>
                          <td> $ 150</td>
                          <td>
                            <span className="badge badge-boxed badge-warning">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Image
                              className="img-fluid"
                              src="/images/products/pro1.png"
                              alt="user"
                              width={0} height={0}
                            />{" "}
                          </td>
                          <td>Chair</td>
                          <td>
                            <Image
                              src="/images/flags/us_flag.jpg"
                              alt=""
                              className="img-fluid img-flag"
                              width={0} height={0}
                            />
                          </td>
                          <td>3/09/2018 4:29 PM</td>
                          <td>2</td>
                          <td> $ 50</td>
                          <td>
                            <span className="badge badge-boxed  badge-success">
                              Shipped
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
            </div>
            {/*end col*/}
          </div>{" "}
          {/*end row*/}
        </div>
        {/* container */}
      </div>{" "}
      {/* Page content Wrapper */}
    </div>{" "}
    {/* content */}
    <footer className="footer">© 2019 Zoter by Mannatthemes.</footer>
  </div>
    )
}