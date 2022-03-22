import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tasks';

  currentDate: Date = new Date();

  footerIMGs = [
    {
      url: 'https://previews.123rf.com/images/coolhand1180/coolhand11801804/coolhand1180180400025/99857951-top-view-of-office-desk-work-with-computer-supplies-keyboard-graphic-tablet-on-wooden-table-creative.jpg',
      alt: 'img',
    },
    {
      url: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGRlc2t8ZW58MHx8MHx8&w=1000&q=80',
      alt: 'img',
    },
    {
      url: 'https://usu.org.au/wp-content/uploads/2018/07/desk-work-web.jpg',
      alt: 'img',
    },
  ];
}
