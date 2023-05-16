const tabs = document.querySelectorAll('[data-tab-target]')
tabContents = document.querySelectorAll('[data-tab-content]')

window.addEventListener("load", () => {
  window.setTimeout(function() {
    const copyright = document.querySelector('#copyright');
    const year = new Date().getFullYear();
    copyright.innerHTML = `&copy; ${year === 2023 ? year : `2023 - ${year}`}`
    var tab = document.querySelector('[href="#home"]');
    var target = document.querySelector("#home");
    if (window.location.hash) {
      target = document.querySelector(window.location.hash);
      tab = document.querySelector('[href="' + window.location.hash + '"]');
    }
    if (tab) {
      tab.classList.add('active')
    }
    if (target) {
      target.classList.add('active')
    }
  }, 100);
})

tabs.forEach(tab => {
    tab.addEventListener(('click'), (event) => {
      const href = tab.getAttribute("href");
      if (href.charAt(0) != '#')
        return;
      event.preventDefault();
      event.stopPropagation();
      if (window.location.hash != href)
				window.location.hash = href;
    })
})

window.addEventListener("hashchange", () => {
  if (window.location.hash) {
    const tab = document.querySelector('[href="' + window.location.hash + '"]');
    const target = document.querySelector(window.location.hash);
    tabs.forEach(temp => {
      temp.classList.remove('active')
    })
    tabContents.forEach(temp => {
      temp.classList.remove('active')
    })
    if (tab){
      tab.classList.add('active')
    }
    if(target) {
      target.classList.add('active')
    }
  }
})
