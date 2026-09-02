import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { Table } from 'primeng/table';
import { Times } from '@primeicons/angular/times';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { Home } from '@primeicons/angular/home';
import { Bookmark } from '@primeicons/angular/bookmark';
import { ChartLine } from '@primeicons/angular/chart-line';
import { Search } from '@primeicons/angular/search';
import { Users } from '@primeicons/angular/users';
import { Comments } from '@primeicons/angular/comments';
import { Calendar } from '@primeicons/angular/calendar';
import { Cog } from '@primeicons/angular/cog';
import { Folder } from '@primeicons/angular/folder';
import { ChartBar } from '@primeicons/angular/chart-bar';
import { Bars } from '@primeicons/angular/bars';
import {Option} from '../shared/option/option';
import { HideDivider } from "../shared/hide-divider/hide-divider";
@Component({
  imports: [AvatarModule, DrawerModule, ButtonModule,
    RippleModule, StyleClassModule, Times, ChevronDown,
    Home, Bookmark, ChartLine, Search, Users,
    Comments, Calendar, Cog, Folder, ChartBar, Bars,
    Option, HideDivider],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class DrawerHeadlessDemo {
    visible: boolean = false;
  drawerRef: any;
    closeCallback(e: any): void {
        this.drawerRef.close(e);
    }
}
export class Sidebar {}
