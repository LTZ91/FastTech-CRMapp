import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Router} from "@angular/router";

var misc: any = {
  sidebar_mini_active: true
};

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
  permissions?: string | string[]
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
  permissions?: string | string[]
}

export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
  permissions?: string | string[]

}

//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/home",
    title: "Pagina Inicial",
    type: "link",
    icontype: "fa fa-home text-default",
    // permissions: ['P_DASHBOARD_MODULE', 'ADM']
  },
  {
    path: "/list-user",
    title: "Usuários",
    type: "link",
    icontype: "fas fa-users-cog text-default",
    isCollapsed: true,
    // permissions: ['ADM','P_ADMINISTRATION_MODULE'],

  },
  {
    path: "/list-technician",
    title: "Técnicos",
    type: "link",
    icontype: "fa-solid fa-clipboard-user text-default",
    isCollapsed: true,
    // permissions: ['ADM','P_ADMINISTRATION_MODULE'],

  },
  {
    path: "/list-client",
    title: "Clientes",
    type: "link",
    icontype: "fa-solid fa-users text-default",
    // permissions: ['ADM','P_ADMINISTRATION_MODULE'],

  },
  {
    path: "/list-services",
    title: "Serviços",
    type: "link",
    icontype: "fa-solid fa-briefcase text-default",
    // permissions: ['ADM','P_ADMINISTRATION_MODULE'],

  },
  {
    path: "/list-contract",
    title: "Contratos",
    type: "link",
    icontype: "fa-solid fa-file-lines text-default",
    isCollapsed: true,
    // permissions: ['P_DASHBOARD_MODULE', 'ADM']
    children: [
      {
        path: "/create-contract",
        title: "View Contracts",
        type: "link",
        // permissions: ['ADM'],
      }
    ]
  },
  {
    path: "/list-intervention-request",
    title: "Tickets",
    type: "link",
    icontype: "fa-solid fa-ticket text-default",
    // permissions: ['ADM','P_ADMINISTRATION_MODULE'],

  },
  {
    path: "/list-intervention-report",
    title: "Relatórios de Intervenção",
    type: "link",
    icontype: "fa-solid fa-list-check text-default",
    // permissions: ['ADM','P_ADMINISTRATION_MODULE'],

  },

  // {
  //   path: "/Setup",
  //   title: "SIDE_BAR.SETUP",
  //   type: "sub",
  //   icontype: "ni ni-settings-gear-65 text-black",
  //   collapse: "forms",
  //   isCollapsed: true,
  //   // permissions: ['ADM', 'P_SETUP_MODULE'],
  //   children: [
  //     {
  //       path: "/agent",
  //       title: "SIDE_BAR.AGENT",
  //       type: "link",
  //       // permissions: ['ADM']
  //     },
  //     {
  //       path: "/cargo-owner",
  //       title: "SIDE_BAR.CARGO_OWNER",
  //       type: "link",
  //       // permissions: ['ADM']
  //     },
  //     {
  //       path: "/cargo-grade",
  //       title: "SIDE_BAR.CARGO_GRADE",
  //       type: "link",
  //       // permissions: ['ADM','P_CARGO_MODULE']
  //     },
  //     {
  //       path: "/cargo",
  //       title: "SIDE_BAR.CARGO",
  //       type: "link",
  //       // permissions: ['ADM','P_CARGO_MODULE']
  //     },
  //     {
  //       path: "/storage-area",
  //       title: "SIDE_BAR.STORAGE_AREA",
  //       type: "link",
  //       // permissions: ['ADM','P_STORAGE_AREA_MODULE']
  //     },
  //     {
  //       path: "/storage-area-type",
  //       title: "SIDE_BAR.STORAGE_AREA_TYPE",
  //       type: "link",
  //       // permissions: ['ADM', 'P_STORAGE_AREA_MODULE']
  //     },
  //     {
  //       path: "/loading-site",
  //       title: "SIDE_BAR.LOADING_SITE",
  //       type: "link",
  //       // permissions: ['ADM']
  //     },
  //     {
  //       path: "/unit-of-measure",
  //       title: "SIDE_BAR.UNIT_OF_MEASURE",
  //       type: "link",
  //       // permissions: ['ADM', 'P_UNIT_OF_MEASURE_MODULE']
  //     },
  //     {
  //       path: "/unit-measure-type",
  //       title: "SIDE_BAR.UNIT_OF_MEASURE_TYPE",
  //       type: "link",
  //       // permissions: ['ADM', 'P_UNIT_OF_MEASURE_MODULE']
  //     },
  //     {
  //       path: "/transporter",
  //       title: "SIDE_BAR.TRANSPORTER",
  //       type: "link",
  //       // permissions: ['ADM', 'P_TEMPERATURE_READING_MODULE']
  //     },
  //     {
  //       path: "/zone-type",
  //       title: "SIDE_BAR.ZONE_TYPE",
  //       type: "link",
  //       // permissions: ['ADM']
  //     },
  //     {
  //       path: "/port",
  //       title: "SIDE_BAR.PORT",
  //       type: "link",
  //       // permissions: ['ADM']
  //     },
  //     {
  //       path: "/decline-reason",
  //       title: "SIDE_BAR.DECLINE_REASON",
  //       type: "link",
  //       // permissions: ['ADM']
  //     },
  //     {
  //       path: "/decline-reason-type",
  //       title: "SIDE_BAR.DECLINE_REASON_TYPE",
  //       type: "link",
  //       // permissions: ['ADM']
  //     },
  //     {
  //       path: "/equipment-type",
  //       title: "SIDE_BAR.EQUIPMENT_TYPE",
  //       type: "link",
  //       // permissions: ['ADM'],
  //     },
  //     {
  //       path: "/equipment-status",
  //       title: "SIDE_BAR.EQUIPMENT_STATUS",
  //       type: "link",
  //       // permissions: ['ADM'],
  //     },
  //     {
  //       path: "/equipment",
  //       title: "SIDE_BAR.EQUIPMENT",
  //       type: "link",
  //       // permissions: ['ADM'],
  //     },
  //   ]
  // },
  // {
  //   path: "/service-requisitions",
  //   title: "SIDE_BAR.SERVICE_REQUISITION",
  //   type: "link",
  //   icontype: "fas fa-calendar-check text-black",
  //   // permissions: ['ADM', 'P_SERVICE_REQUISITION_MODULE']
  // },
  // {
  //   path: "/road-notice/service-requisition",
  //   title: "SIDE_BAR.ROAD_NOTICE",
  //   type: "link",
  //   icontype: "fa-solid fa-truck-front text-black",
  //   // permissions: ['ADM', 'P_ROAD_NOTICE_MODULE'],
  // },
  // {
  //   path: "/rail-notice",
  //   title: "SIDE_BAR.RAIL_NOTICE",
  //   type: "link",
  //   icontype: "bi bi-train-front-fill",
  //   // permissions: ['ADM', 'P_RAIL_NOTICE_MODULE'],
  // },
  // {
  //   path: "/road",
  //   title: "SIDE_BAR.CARGO_RECEIVE",
  //   type: "sub",
  //   icontype: "fa-solid fa-clipboard-list text-black",
  //   collapse: "forms",
  //   isCollapsed: true,
  //   // permissions: ['ADM', 'P_ROAD_CARGO_RECEPTION_MODULE', 'P_RAIL_CARGO_RECEPTION_MODULE'],
  //   children: [
  //     {
  //       path: "/road-reception",
  //       title: "SIDE_BAR.ROAD_RECEIVE",
  //       type: "link",
  //       // permissions: ['ADM', 'P_ROAD_CARGO_RECEPTION_MODULE'],
  //     },
  //     {
  //       path: "/rail-reception",
  //       title: "SIDE_BAR.RAIL_RECEIVE",
  //       type: "link",
  //       // permissions: ['P_RAIL_CARGO_RECEPTION_MODULE', 'ADM']
  //     },
  //   ]
  // },
  // {
  //   path: "/equipment-allocation",
  //   title: "SIDE_BAR.EQUIPMENT_ALLOCATION",
  //   type: "link",
  //   icontype: "fa-solid fa-gears",
  //   // permissions: ['ADM','P_EQUIPMENT_ALLOCATION_EQUIPMENT_ALLOCATION'],
  // },
  // {
  //   path: "/stock",
  //   title: "SIDE_BAR.STOCK",
  //   type: "sub",
  //   icontype: "fas fa-boxes text-black",
  //   collapse: "forms",
  //   isCollapsed: true,
  //   // permissions: ['ADM','P_STOCK_MODULE'],
  //   children: [
  //     {
  //       path: "/stock-adjustment",
  //       title: "SIDE_BAR.STOCK_ADJUSTMENT",
  //       type: "link",
  //       permissions: ['ADM','P_STOCK_MODULE_ADJUST'],
  //     },
  //     {
  //       path: "/stock-transfer",
  //       title: "SIDE_BAR.STOCK_TRANSFER",
  //       type: "link",
  //       // permissions: ['ADM','P_STOCK_MODULE_TRANSFER'],
  //     },
  //
  //   ]
  // },
  // {
  //   path: "/temperature",
  //   title: "SIDE_BAR.TEMPERATURE_READING",
  //   type: "link",
  //   icontype: "fa-solid fa-temperature-three-quarters",
  //   // permissions: ['ADM', 'P_TEMPERATURE_READING_MODULE'],
  // },
];
/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit{

  public menuItems: any = [];
  public isCollapsed = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
    this.minimizeSidebar();
  }

  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }

  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }

  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
    this.minimizeSidebar();
  }
}
