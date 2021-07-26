import { gsap } from "gsap"


  export const animateLayout = (style, sectionID) => {
    const targetClass = '.example-image__img.is-' + sectionID.toLowerCase();
    if (style === 'single') {
      gsap.to(targetClass, {
        width: function (index) {
          if (index === 0) {
            return '84%';
          }
        },
        duration: 1,
        left: '8%',
        top: '15%',
        autoAlpha: function (index) {
          if (index !== 0) {
            return 0
          } else {
            return 1
          }
        }
      });
    } else if (style === 'double') {
      gsap.to(targetClass, {
        duration: 1,
        width: (index) => (index <= 1) ? '50%' : 'auto',
        left: (index) => (index === 0) ? '8%' : '42%',
        top: (index) => (index === 0) ? '15%' : '-15%',
        autoAlpha: (index) => (index > 1) ? 0 : 1,
      });
    } else if (style === 'triple') {
      gsap.fromTo(targetClass, {
        autoAlpha: 0,
        width: '62%',
        left: (index) => (index === 0) ? '8%' : `${(index+1) * 10}%`,
        top: (index) => (index === 0) ? '15%' : `${(index+1) * 8}%`,
      }, {
        duration: .75,
        // left: (index) => (index === 0) ? '8%' : `+=${index * 4}%`,
        top: (index) => (index === 0) ? '15%' : `${(index+1) * 12}%`,
        autoAlpha: 1,
        ease: 'Power2.easeOut',
        stagger: .875
      });
    }
  }