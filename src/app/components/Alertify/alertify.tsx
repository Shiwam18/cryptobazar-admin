import Image from "next/image";
import logoLg from "../../public/images/logo-lg.png"
import us_flag from "../../public/images/flags/us_flag.jpg"
import italy_flag from "../../public/images/flags/italy_flag.jpg"
import french_flag from "../../public/images/flags/french_flag.jpg"
import spain_flag from "../../public/images/flags/spain_flag.jpg"
import russian_flag from "../../public/images/flags/russia_flag.jpg"
import avatar_2 from "../../public/images/flags/russia_flag.jpg"
import avatar_3 from "../../public/images/flags/russia_flag.jpg"
import avatar_4 from "../../public/images/users/avatar-4.jpg"
import avatar_1 from "../../public/images/users/avatar-1.jpg"
export default function Alertify(){
    return(
        <>
        <div className="left side-menu">
      <button
        type="button"
        className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect"
      >
        <i className="ion-close" />
      </button>
      {/* LOGO */}
      <div className="topbar-left">
        <div className="text-center">
          {/*<a href="index.html" class="logo"><i class="mdi mdi-assistant"></i> Zoter</a>*/}
          <a href="index.html" className="logo">
            <Image width={0} height ={0}
              src={logoLg}
              alt=""
              className="logo-large"

            />
          </a>
        </div>
      </div>
      <div className="sidebar-inner niceScrollleft">
        <div id="sidebar-menu">
          <ul>
            <li className="menu-title">Main</li>
            <li>
              <a href="index.html" className="waves-effect">
                <i className="mdi mdi-airplay" />
                <span>
                  {" "}
                  Dashboard{" "}
                  <span className="badge badge-pill badge-primary float-right">
                    7
                  </span>
                </span>
              </a>
            </li>
            <li className="has_sub">
              <a href="#" className="waves-effect">
                <i className="mdi mdi-layers" /> <span> Advanced UI </span>{" "}
                <span className="float-right">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="advanced-highlight.html">Highlight</a>
                </li>
                <li>
                  <a href="advanced-rating.html">Rating</a>
                </li>
                <li>
                  <a href="advanced-alertify.html">Alertify</a>
                </li>
                <li>
                  <a href="advanced-rangeslider.html">Range Slider</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="calendar.html" className="waves-effect">
                <i className="mdi mdi-calendar-clock" />
                <span> Calendar </span>
              </a>
            </li>
            <li className="menu-title">Components</li>
            <li className="has_sub">
              <a href="#;" className="waves-effect">
                <i className="mdi mdi-bullseye" /> <span> UI Elements </span>{" "}
                <span className="float-right">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="ui-buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="ui-cards.html">Cards</a>
                </li>
                <li>
                  <a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
                </li>
                <li>
                  <a href="ui-modals.html">Modals</a>
                </li>
                <li>
                  <a href="ui-images.html">Images</a>
                </li>
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                <li>
                  <a href="ui-progressbars.html">Progress Bars</a>
                </li>
                <li>
                  <a href="ui-dropdowns.html">Dropdowns</a>
                </li>
                <li>
                  <a href="ui-lightbox.html">Lightbox</a>
                </li>
                <li>
                  <a href="ui-navs.html">Navs</a>
                </li>
                <li>
                  <a href="ui-pagination.html">Pagination</a>
                </li>
                <li>
                  <a href="ui-popover-tooltips.html">Popover &amp; Tooltips</a>
                </li>
                <li>
                  <a href="ui-badge.html">Badge</a>
                </li>
                <li>
                  <a href="ui-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="ui-video.html">Video</a>
                </li>
                <li>
                  <a href="ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="ui-sweet-alert.html">Sweet-Alert</a>
                </li>
                <li>
                  <a href="ui-grid.html">Grid</a>
                </li>
              </ul>
            </li>
            <li className="has_sub">
              <a href="#;" className="waves-effect">
                <i className="mdi mdi-clipboard-outline" />
                <span> Forms </span>{" "}
                <span className="badge badge-pill badge-info float-right">
                  8
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="form-elements.html">Form Elements</a>
                </li>
                <li>
                  <a href="form-validation.html">Form Validation</a>
                </li>
                <li>
                  <a href="form-advanced.html">Form Advanced</a>
                </li>
                <li>
                  <a href="form-editors.html">Form Editors</a>
                </li>
                <li>
                  <a href="form-uploads.html">Form File Upload</a>
                </li>
                <li>
                  <a href="form-mask.html">Form Mask</a>
                </li>
                <li>
                  <a href="form-summernote.html">Summernote</a>
                </li>
                <li>
                  <a href="form-xeditable.html">Form Xeditable</a>
                </li>
              </ul>
            </li>
            <li className="has_sub">
              <a href="#;" className="waves-effect">
                <i className="mdi mdi-gauge" />
                <span> Charts </span>{" "}
                <span className="float-right">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="charts-morris.html">Morris Chart</a>
                </li>
                <li>
                  <a href="charts-chartist.html">Chartist Chart</a>
                </li>
                <li>
                  <a href="charts-chartjs.html">Chartjs Chart</a>
                </li>
                <li>
                  <a href="charts-flot.html">Flot Chart</a>
                </li>
                <li>
                  <a href="charts-c3.html">C3 Chart</a>
                </li>
                <li>
                  <a href="charts-other.html">Jquery Knob Chart</a>
                </li>
              </ul>
            </li>
            <li className="has_sub">
              <a href="#;" className="waves-effect">
                <i className="mdi mdi-cards-outline" /> <span> Icons </span>{" "}
                <span className="float-right">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="icons-material.html">Material Design</a>
                </li>
                <li>
                  <a href="icons-ion.html">Ion Icons</a>
                </li>
                <li>
                  <a href="icons-fontawesome.html">Font Awesome</a>
                </li>
                <li>
                  <a href="icons-themify.html">Themify Icons</a>
                </li>
                <li>
                  <a href="icons-dripicons.html">Dripicons</a>
                </li>
                <li>
                  <a href="icons-typicons.html">Typicons Icons</a>
                </li>
              </ul>
            </li>
            <li className="has_sub">
              <a href="#;" className="waves-effect">
                <i className="mdi mdi-table" />
                <span> Tables </span>{" "}
                <span className="float-right">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="tables-basic.html">Basic Tables</a>
                </li>
                <li>
                  <a href="tables-datatable.html">Data Table</a>
                </li>
                <li>
                  <a href="tables-responsive.html">Responsive Table</a>
                </li>
                <li>
                  <a href="tables-editable.html">Editable Table</a>
                </li>
              </ul>
            </li>
            <li className="menu-title">Extra</li>
            <li className="has_sub">
              <a href="#;" className="waves-effect">
                <i className="mdi mdi-map-marker-multiple" />
                <span> Maps </span>{" "}
                <span className="badge badge-pill badge-danger float-right">
                  2
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="maps-google.html"> Google Map</a>
                </li>
                <li>
                  <a href="maps-vector.html"> Vector Map</a>
                </li>
              </ul>
            </li>
            <li className="has_sub">
              <a href="#;" className="waves-effect">
                <i className="mdi mdi-google-pages" />
                <span> Pages </span>{" "}
                <span className="float-right">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="pages-login.html">Login</a>
                </li>
                <li>
                  <a href="pages-register.html">Register</a>
                </li>
                <li>
                  <a href="pages-recoverpw.html">Recover Password</a>
                </li>
                <li>
                  <a href="pages-lock-screen.html">Lock Screen</a>
                </li>
                <li>
                  <a href="pages-blank.html">Blank Page</a>
                </li>
                <li>
                  <a href="pages-404.html">Error 404</a>
                </li>
                <li>
                  <a href="pages-500.html">Error 500</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
      </div>{" "}
      {/* end sidebarinner */}
    </div>
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        {/* Top Bar Start */}
        <div className="topbar">
          <nav className="navbar-custom">
            <ul className="list-inline float-right mb-0">
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
                  className="nav-Image dropdown-toggle arrow-none waves-effect text-white"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <Image width={0} 
                    src={us_flag}
                    className="ml-2"
                    height={16}
                    alt=""
                  />
                </a>
                <div className="dropdown-menu dropdown-menu-right language-switch">
                  <a className="dropdown-item" href="#">
                    <Image width={0} 
                      src={italy_flag}
                      alt=""
                      height={16}
                    />
                    <span> Italian </span>
                  </a>
                  <a className="dropdown-item" href="#">
                    <Image width={0} 
                      src={french_flag}
                      alt=""
                      height={16}
                    />
                    <span> French </span>
                  </a>
                  <a className="dropdown-item" href="#">
                    <Image width={0} 
                      src={spain_flag}
                      alt=""
                      height={16}
                    />
                    <span> Spanish </span>
                  </a>
                  <a className="dropdown-item" href="#">
                    <Image width={0} 
                      src={russian_flag}
                      alt=""
                      height={16}
                    />
                    <span> Russian </span>
                  </a>
                </div>
              </li>
              <li className="list-inline-item dropdown notification-list">
                <a
                  className="nav-Image dropdown-toggle arrow-none waves-effect"
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
                      <span className="badge badge-danger float-right">
                        745
                      </span>
                      Messages
                    </h5>
                  </div>
                  {/* item*/}
                  <a
                    href="#;"
                    className="dropdown-item notify-item"
                  >
                    <div className="notify-icon">
                      <Image width={0} height ={0}
                        src={avatar_2}
                        alt="user-Image"
                        className="Image-fluid rounded-circle"
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
                    href="#;"
                    className="dropdown-item notify-item"
                  >
                    <div className="notify-icon">
                      <Image width={0} height ={0}
                        src={avatar_3}
                        alt="user-Image"
                        className="Image-fluid rounded-circle"
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
                    href="#;"
                    className="dropdown-item notify-item"
                  >
                    <div className="notify-icon">
                      <Image width={0} height ={0}
                        
                      
                        src={avatar_4}
                        alt="user-Image"
                        className="Image-fluid rounded-circle"
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
                    href="#;"
                    className="dropdown-item notify-item"
                  >
                    View All
                  </a>
                </div>
              </li>
              <li className="list-inline-item dropdown notification-list">
                <a
                  className="nav-Image dropdown-toggle arrow-none waves-effect"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <i className="ti-bell noti-icon" />
                  <span className="badge badge-success noti-icon-badge">
                    23
                  </span>
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
                    href="#;"
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
                    href="#;"
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
                    href="#;"
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
                    href="#;"
                    className="dropdown-item notify-item"
                  >
                    View All
                  </a>
                </div>
              </li>
              <li className="list-inline-item dropdown notification-list">
                <a
                  className="nav-Image dropdown-toggle arrow-none waves-effect nav-user"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <Image width={0} height ={0}
                    src={avatar_1}
                    alt="user"
                    className="rounded-circle"
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
                      <li className="breadcrumb-item">
                        <a href="#">Advanced UI</a>
                      </li>
                      <li className="breadcrumb-item active">Alertify</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Alertify</h4>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            {/* end page title end breadcrumb */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="mt-0 header-title">Examples</h4>
                    <p className="text-muted mb-4 font-14">
                      Alertify.js is a small library which provides
                      light-weight, high performance browser dialogs.
                    </p>
                    <div className="row text-center">
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Alert Dialog</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-alert"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Confirm Dialog</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-confirm"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Prompt Dialog</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-prompt"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Custom Labels</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-labels"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Ajax - Multiple Dialog</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-ajax"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Standard Log</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-notification"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Standard Log With HTML</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-notification-html"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Standard Log with callback</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-notification-callback"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Success Log</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-success"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Success Log with callback</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-success-callback"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Error Log</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-error"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Error Log with callback</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-error-callback"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Closing Log On Click</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-click-to-close"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Disable Log On Click</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-disable-click-to-close"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Hide in 10 seconds</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-delay"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Persistent Log</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-forever"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">
                          Maximum Number of Log Messages
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-max-log-items"
                        >
                          Click me
                        </button>
                      </div>
                      <div className="col-xs-6 col-sm-3 mb-5">
                        <p className="text-muted">Resetting Default Values</p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          id="alertify-reset"
                        >
                          Click me
                        </button>
                      </div>
                    </div>{" "}
                    {/* end row */}
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
            </div>{" "}
            {/* end row */}
          </div>
          {/* container */}
        </div>{" "}
        {/* Page content Wrapper */}
      </div>{" "}
      {/* content */}
      <footer className="footer">© 2019 Zoter by Mannatthemes.</footer>
    </div>
        </>
    )
}