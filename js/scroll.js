
  if (window.screen.width >= 768) {
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('item-show');
          }
        });
      }
      
      let options = {
        threshold: [0.1] };
      let observer = new IntersectionObserver(onEntry, options);
      let elementsLeft = document.querySelectorAll('.item-anim-left');
      let elementsRight = document.querySelectorAll('.item-anim-right');
      let elementsScale = document.querySelectorAll('.item-anim-scale');
      let elementsTop = document.querySelectorAll('.item-anim-top');
    
      for (let elm of elementsLeft) {
        observer.observe(elm);
      }
      for (let elm of elementsRight) {
        observer.observe(elm);
      }
      for (let elm of elementsScale) {
        observer.observe(elm);
      }
      for (let elm of elementsTop) {
        observer.observe(elm);
      }
  }