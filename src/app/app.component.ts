import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   posts = [
     {
       title: 'Neat tree',
       imageUrl: 'assets/tree.jpeg',
       userName: 'nature',
       content: 'Saw this awsoeme tree during my hike today'
      },
      {
        title: 'Mountain biking',
        imageUrl: 'assets/biking.jpeg',
        userName: 'bikingmonster',
        content: 'Check my bike on the mountain, guys!'
       },
       {
        title: 'Snowy mountain',
        imageUrl: 'assets/mountain.jpeg',
        userName: 'mountainlover',
        content: 'Here is a picture of a beautiful mountain i saw today'
       },
       {
        title: 'Neat tree',
        imageUrl: 'assets/tree.jpeg',
        userName: 'nature',
        content: 'Saw this awsoeme tree during my hike today'
       },
       {
         title: 'Mountain biking',
         imageUrl: 'assets/biking.jpeg',
         userName: 'bikingmonster',
         content: 'Check my bike on the mountain, guys!'
        },
        {
         title: 'Snowy mountain',
         imageUrl: 'assets/mountain.jpeg',
         userName: 'mountainlover',
         content: 'Here is a picture of a beautiful mountain i saw today'
        },
        {
          title: 'Neat tree',
          imageUrl: 'assets/tree.jpeg',
          userName: 'nature',
          content: 'Saw this awsoeme tree during my hike today'
         },
         {
           title: 'Mountain biking',
           imageUrl: 'assets/biking.jpeg',
           userName: 'bikingmonster',
           content: 'Check my bike on the mountain, guys!'
          },
          {
           title: 'Snowy mountain',
           imageUrl: 'assets/mountain.jpeg',
           userName: 'mountainlover',
           content: 'Here is a picture of a beautiful mountain i saw today'
          }
   ]
}
