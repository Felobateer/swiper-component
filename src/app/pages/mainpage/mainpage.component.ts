import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularWalkthroughComponent } from '../../components/angular-walkthrough/angular-walkthrough.component';
import { SwiperComponentComponent } from '../../components/swiper-component/swiper-component.component';
import { LangService } from '../../services/lang.service';
import { Content } from '../../interfaces/content';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule ,AngularWalkthroughComponent, SwiperComponentComponent],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  // chatImg: string = require('assets/icons/chat.ico');
  titles: string[];
  descriptions: string[];
  language: string;

  constructor(private router: Router, private lang: LangService) {
    this.titles = [];
    this.descriptions = [];
    this.language = this.lang.getLang();
  }

  ngOnInit() {
    this.lang.getTranslation(this.language).subscribe((lang: Content) => {
      lang.slides.forEach(slide => {
        this.titles.push(slide.title);
        this.descriptions.push(slide.text);
      });
    });
  }

  exit() {
    this.router.navigate(['/']);
  }

  goChat() {
    this.router.navigate(['/chat']);
  }
}
