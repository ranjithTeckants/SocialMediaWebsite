import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RajarajanArtWorks';


  cards =[
    {
      name:"What's App",
      imageUrl:"../assets/WhatsApp.png",
    },
    {
      name:"Instagram",
      imageUrl:"../assets/Instagram.png",
    },
    // {
    //   name:"Website",
    //   imageUrl:"../assets/Website.png",
    // },
    
    {
      name:"Location",
      imageUrl:"../assets/Location.png",
    },

    {
      name:"Review",
      imageUrl:"../assets/Review.png",
    },
    {
      name:"Mobile",
      imageUrl:"../assets/Mobile.png",
    },

    {
      name:"Email",
      imageUrl:"../assets/Email.png",
    },
    // {
    //   name:"Face book",
    //   imageUrl:"../assets/Facebook.png",
    // },
    
    
   
    
    
   
  ]

  onCardClick(card: any) {
    switch (card) {
      case "What's App":
        this.openWhatsApp();
        break;
      // case "Face book":
      //   this.openFacebook();
      //   break;
      case "Email":
        this.openEmail();
        break;
      case "Mobile":
        this.openMobile();
        break;
      // case "Website":
      //   this.openWebsite();
      //   break;
      case "Review":
        this.openReview();
        break;
      case "Instagram":
        this.openInstagram();
        break;
      case "Location":
        this.openLocation();
        break;
      default:
        console.log('No action defined for this card');
        break;
    }
  }


  openMobile() {
    window.open('tel:+918667827964', '_self');
  }


  openEmail() {
    window.open('mailto:ctvinalaguthangamaligai@gmail.com');
  }


  openWhatsApp() {
    window.open('https://chat.whatsapp.com/Kejj5YlrAlp1T2gDXdsbgT', '_blank');
  }

 
  // openWebsite() {
  //   window.open('https://www.traditionaltanjorepaintings.com/', '_blank');
  // }


  // openFacebook() {
  //   window.open('', '_blank');
  // }


  openLocation() {
    window.open('https://www.google.com/maps/dir//79,+Amman+Sannathi+St,+Kallukatti,+Karaikudi,+Tamil+Nadu+630001/@10.0666775,78.6836963,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b005df5ec870c35:0x1bf24b6385b036e4!2m2!1d78.7660982!2d10.0666877?hl=en-IN&entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  }

  openReview(){
     window.open('https://search.google.com/local/writereview?placeid=ChIJNQyH7PVdADsR5DawhWNL8hs&source=g.page.m.ia._&laa=nmx-review-solicitation-ia2', '_blank');
  }
  openInstagram(){
     window.open('https://www.instagram.com/alagu_thanga_maligai?igsh=ZGx5eWdnb3dnanEw', '_blank');
  }

}
