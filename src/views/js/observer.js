function SetObserver(idToObserv, thresholdValue,intersectionRatioValue,callbackFun) {
  let callback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > intersectionRatioValue) {
        callbackFun();
        let unobserve = document.getElementById(idToObserv);
        observer.unobserve(unobserve);
      }
    })
  };
  const observer = new IntersectionObserver(callback,{threshold: thresholdValue})
  observer.observe(document.getElementById(idToObserv))
}

export default SetObserver;