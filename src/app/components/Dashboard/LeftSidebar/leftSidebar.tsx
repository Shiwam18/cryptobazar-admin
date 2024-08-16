import Image from "next/image"
import logoLg from "../../../../../public/images/footer-logo.png"
import french_logo from "../../../public/images/flags/french_flag.jpg"

export default function LeftSidebar() {
    return (
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
            
            <a href="#" className="w-100 img-fluid logo">
                <Image src={logoLg} width={100} height={40} alt="logo" className="img-fluid logo-large" />
            </a>
            </div>
        </div>
        <div className="sidebar-inner ">
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
                    <i className="mdi mdi-layers" /> <span> Menu </span>{" "}
                    <span className="float-right">
                    <i className="mdi mdi-chevron-right" />
                    </span>
                </a>
                <ul className="list-unstyled">
                    <li>
                    <a href="advanced-highlight.html">My Form</a>
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
                <a href="#" className="waves-effect">
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
                <a href="#" className="waves-effect">
                    <i className="mdi mdi-clipboard-outline" />
                    <span> Forms </span>{" "}
                    <span className="badge badge-pill badge-info float-right">8</span>
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
                <a href="#" className="waves-effect">
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
                <a href="#" className="waves-effect">
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
                <a href="#" className="waves-effect">
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
                <a href="#" className="waves-effect">
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
                <a href="#" className="waves-effect">
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
    )
}